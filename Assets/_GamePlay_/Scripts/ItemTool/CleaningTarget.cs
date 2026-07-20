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

    private ItemSpriteMaskPainter maskPainter;
    private ItemSpriteRevealPainter revealPainter;
    private int currentStateIndex = 0;
    private bool isFullyCompleted = false;

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

    private void ApplyCurrentState()
    {
        if (currentStateIndex >= states.Count)
        {
            isFullyCompleted = true;
            onAllStatesComplete?.Invoke();
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
                revealPainter.enabled = true;
                revealPainter.initialAlpha = state.initialAlpha;
                revealPainter.revealTargets = state.revealTargets;
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
                maskPainter.BeginPaintAtWorldPoint(worldPosition);
                maskPainter.PaintAtWorldPoint(worldPosition);
            }
        }
        else
        {
            if (revealPainter != null && revealPainter.isActiveAndEnabled)
            {
                revealPainter.BeginPaintAtWorldPoint(worldPosition);
                revealPainter.PaintAtWorldPoint(worldPosition);
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
