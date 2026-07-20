using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

/// <summary>
/// Quản lý nhiều bước (state) làm sạch cho một item.
/// Hỗ trợ hai chế độ paint:
///   - MaskPainter: Spawn brush masks để phủ lên vùng (dùng ItemSpriteMaskPainter).
///   - SpriteReveal: Fade reveal các sprite target khi paint trúng (dùng ItemSpriteRevealPainter).
/// </summary>
public class CleaningTarget : MonoBehaviour
{
    public enum PaintMode
    {
        MaskPainter,    // Spawn brush mask như cũ
        SpriteReveal    // Fade reveal sprite target
    }

    [Serializable]
    public class DirtTarget
    {
        [Tooltip("Sprite dirt sẽ hiện lên khi paint trúng và tự mờ đi khi không paint")]
        public SpriteRenderer targetSprite;
        [Tooltip("Bán kính kiểm tra khoảng cách 2D (XY)")]
        [Min(0.01f)] public float hitRadius = 0.5f;
        [Tooltip("Tốc độ hiện rõ (alpha / giây)")]
        [Min(0.01f)] public float fadeSpeed = 3f;
        [Tooltip("Tốc độ tự mờ dần (alpha / giây)")]
        [Min(0.01f)] public float fadeOutSpeed = 1.5f;

        [HideInInspector] public bool isBeingHit = false;
    }

    [Serializable]
    public class CleaningState
    {
        [Tooltip("Tên state, chỉ dùng để nhận biết trên Inspector")]
        public string stateName;

        [Tooltip("Chế độ paint của state này")]
        public PaintMode paintMode = PaintMode.MaskPainter;

        [Tooltip("Tool được phép sử dụng. Tool đang kéo phải khớp với Tool này. (Nếu không cần thiết, có thể bỏ qua check)")]
        public Item requiredTool;

        // ---------- MaskPainter config ----------
        [Header("Brush Config (chỉ dùng khi MaskPainter)")]
        public float brushRadius = 0.25f;
        public float brushSpacing = 0.1f;

        [Tooltip("Bật nếu muốn tùy chỉnh Sorting Order của SpriteMask được sinh ra")]
        public bool overrideMaskSorting = true;
        public string maskSortingLayerName = "Default";

        // ---------- SpriteReveal config ----------
        [Header("Reveal Targets (chỉ dùng khi SpriteReveal)")]
        [Tooltip("Danh sách các sprite sẽ được reveal khi paint trúng. Cần gắn Collider vào mỗi sprite GameObject.")]
        public List<ItemSpriteRevealPainter.RevealTarget> revealTargets = new List<ItemSpriteRevealPainter.RevealTarget>();

        [Tooltip("Alpha ban đầu của các sprite (trước khi reveal)")]
        [Range(0f, 1f)] public float initialAlpha = 0f;

        [Header("Dirt Under Config")]
        public bool spawnDirtWhenPaint = false;

        // ---------- Common ----------
        [Header("On Complete Actions")]
        [Tooltip("Các SpriteRenderer sẽ bị trả Mask Interaction về None sau khi làm sạch xong")]
        public List<MaskInteractionConfig> maskInteractionsToReset;

        [Tooltip("Event gọi khi State này hoàn thành")]
        public UnityEvent onStateComplete;
    }


    [Tooltip("Danh sách các bước (state) làm sạch theo thứ tự")]
    public List<CleaningState> states;

    [Tooltip("Event gọi khi TẤT CẢ các state đã hoàn thành")]
    public UnityEvent onAllStatesComplete;

    [Header("--- DIRT UNDER TARGETS ---")]
    [Tooltip("Danh sách sprite Dirt dùng chung cho tất cả các state (nếu state có bật spawnDirtWhenPaint)")]
    public List<DirtTarget> dirtTargets = new List<DirtTarget>();

    private ItemSpriteMaskPainter maskPainter;
    private ItemSpriteRevealPainter revealPainter;
    private int currentStateIndex = 0;
    private bool isFullyCompleted = false;

    public bool IsPlayingPaintFx
    {
        get
        {
            if (currentStateIndex < states.Count && states[currentStateIndex].paintMode == PaintMode.MaskPainter)
            {
                return maskPainter != null && maskPainter.IsPlayingPaintFx;
            }
            else
            {
                return revealPainter != null && revealPainter.IsPlayingPaintFx;
            }
        }
    }

    private void Awake()
    {
        maskPainter = GetComponent<ItemSpriteMaskPainter>();
        revealPainter = GetComponent<ItemSpriteRevealPainter>();

        // Lắng nghe paintComplete từ cả hai painter
        if (maskPainter != null)
            maskPainter.onPaintComplete.AddListener(OnPaintComplete);
        if (revealPainter != null)
            revealPainter.onPaintComplete.AddListener(OnPaintComplete);

        ApplyCurrentState();
    }

    private void Update()
    {
        // Logic mờ dần các vết bẩn sẽ luôn chạy để đảm bảo chúng mờ đi sau khi một state hoàn thành,
        // hoặc khi người dùng ngừng vẽ.
        if (dirtTargets != null)
        {
            for (int i = 0; i < dirtTargets.Count; i++)
            {
                var target = dirtTargets[i];
                if (target == null || target.targetSprite == null) continue;

                // Nếu không được tô trúng, vết bẩn sẽ tự mờ đi.
                if (!target.isBeingHit)
                {
                    Color c = target.targetSprite.color;
                    if (c.a > 0f)
                    {
                        c.a = Mathf.MoveTowards(c.a, 0f, target.fadeOutSpeed * Time.deltaTime);
                        target.targetSprite.color = c;
                    }
                }

                // Reset cờ 'isBeingHit' cho frame tiếp theo.
                // Cờ này sẽ được set thành true trong Process() nếu người dùng tô trúng.
                target.isBeingHit = false;
            }
        }
    }

    private void ApplyCurrentState()
    {
        if (currentStateIndex >= states.Count)
        {
            isFullyCompleted = true;
            onAllStatesComplete?.Invoke();

            // Tắt collider của chính nó để ItemDraggable có thể "nhả" target này ra
            // và paint tiếp các target khác mà không cần nhả chuột.
            var ownCollider = GetComponent<Collider>();
            if (ownCollider != null)
            {
                ownCollider.enabled = false;
            }
            return;
        }

        var state = states[currentStateIndex];

        if (state.paintMode == PaintMode.MaskPainter)
        {
            // Tắt reveal painter, bật mask painter
            if (revealPainter != null) revealPainter.enabled = false;
            if (maskPainter != null)
            {
                maskPainter.enabled = true;
                maskPainter.brushRadius = state.brushRadius;
                maskPainter.brushSpacing = state.brushSpacing;
                maskPainter.maskSortingLayerName = state.maskSortingLayerName;
                maskPainter.overrideMaskSorting = state.overrideMaskSorting;
            }
        }
        else // SpriteReveal
        {
            // Tắt mask painter, bật reveal painter
            if (maskPainter != null) maskPainter.enabled = false;
            if (revealPainter != null)
            {
                // Gán data TRƯỚC khi enable để OnEnable không reset với list rỗng
                revealPainter.initialAlpha = state.initialAlpha;
                revealPainter.revealTargets = state.revealTargets;
                revealPainter.enabled = true;
                revealPainter.ResetPaint();
            }
        }
    }

    // Helper để check xem tool (Item) có được phép vẽ lên target này không
    public bool CanProcess(Item tool)
    {
        if (isFullyCompleted || currentStateIndex >= states.Count) return false;

        var state = states[currentStateIndex];
        // Nếu không gắn requiredTool thì cho phép mọi tool
        if (state.requiredTool == null)
        {
            return true;
        }

        bool isMatch = (state.requiredTool == tool);
        if (!isMatch && tool != null)
        {
            Debug.Log($"[CleaningTarget] Chặn tool: {tool.gameObject.name} vì yêu cầu tool: {state.requiredTool.gameObject.name}");
        }
        else if (isMatch)
        {
            Debug.Log($"[CleaningTarget] Cho phép tool: {tool.gameObject.name} vì khớp với yêu cầu tool: {state.requiredTool.gameObject.name}");
        }
        return isMatch;
    }

    // Hàm gọi từ bên ngoài khi có tool chạm vào
    public void Process(Vector3 worldPosition)
    {
        if (isFullyCompleted) return;

        if (currentStateIndex < states.Count && states[currentStateIndex].paintMode == PaintMode.MaskPainter)
        {
            if (maskPainter != null && maskPainter.isActiveAndEnabled)
            {
                // Chỉ gọi BeginPaint khi chưa bắt đầu paint (lần đầu tiên kéo vào)
                if (!maskPainter.IsPainting)
                {
                    maskPainter.BeginPaintAtWorldPoint(worldPosition);
                }
                else // Các lần di chuyển tiếp theo chỉ cần cập nhật vị trí paint
                {
                    maskPainter.PaintAtWorldPoint(worldPosition);
                }
            }
        }
        else
        {
            // Debug log để kiểm tra xem có nhảy vào đây không
            Debug.Log($"[CleaningTarget] Process called! revealPainter != null: {revealPainter != null}, isActiveAndEnabled: {(revealPainter != null ? revealPainter.isActiveAndEnabled.ToString() : "N/A")}");
            if (revealPainter != null && revealPainter.isActiveAndEnabled)
            {
                // Tương tự, áp dụng logic cho revealPainter
                if (!revealPainter.IsPainting)
                {
                    revealPainter.BeginPaintAtWorldPoint(worldPosition);
                }
                else
                {
                    revealPainter.PaintAtWorldPoint(worldPosition);
                }
            }
        }

        // --- Handle Dirt Targets ---
        if (currentStateIndex < states.Count)
        {
            var state = states[currentStateIndex];
            if (state.spawnDirtWhenPaint && dirtTargets != null)
            {
                Camera mainCam = Camera.main;
            if (mainCam != null)
            {
                Plane paintPlane = new Plane(-mainCam.transform.forward, transform.position);
                Vector3 point = worldPosition - paintPlane.normal * paintPlane.GetDistanceToPoint(worldPosition);

                for (int i = 0; i < dirtTargets.Count; i++)
                {
                    var target = dirtTargets[i];
                    if (target == null || target.targetSprite == null) continue;

                    Vector2 spritePos2D = target.targetSprite.transform.position;
                    Vector2 paintPos2D = point;
                    float distSqr = (spritePos2D - paintPos2D).sqrMagnitude;
                    if (distSqr <= target.hitRadius * target.hitRadius)
                    {
                        target.isBeingHit = true;
                        Color c = target.targetSprite.color;
                        c.a = Mathf.MoveTowards(c.a, 1f, target.fadeSpeed * Time.deltaTime);
                        target.targetSprite.color = c;
                    }
                    }
                }
            }
        }
    }

    public void EndProcess()
    {
        if (isFullyCompleted) return;

        if (currentStateIndex < states.Count && states[currentStateIndex].paintMode == PaintMode.MaskPainter)
        {
            if (maskPainter != null && maskPainter.isActiveAndEnabled)
                maskPainter.EndPaint();
        }
        else
        {
            if (revealPainter != null && revealPainter.isActiveAndEnabled)
                revealPainter.EndPaint();
        }
    }

    private void OnPaintComplete()
    {
        if (isFullyCompleted || currentStateIndex >= states.Count) return;

        var state = states[currentStateIndex];

        // Trả Mask Interaction về None
        if (state.maskInteractionsToReset != null)
        {
            foreach (var config in state.maskInteractionsToReset)
            {
                if (config != null && config.targetRenderer != null)
                {
                    config.targetRenderer.maskInteraction = config.interaction;
                }
            }
        }

        // Nếu là MaskPainter thì reset paint brushes
        if (state.paintMode == PaintMode.MaskPainter && maskPainter != null)
        {
            maskPainter.ResetPaint();
        }

        // Bắn event hoàn thành State
        state.onStateComplete?.Invoke();

        GetComponent<Item>()?.SpawnHeart(false);

        // Chuyển sang State tiếp theo
        currentStateIndex++;
        ApplyCurrentState();
    }
}

[Serializable]
public class MaskInteractionConfig
{
    public SpriteRenderer targetRenderer;
    public SpriteMaskInteraction interaction;
}
