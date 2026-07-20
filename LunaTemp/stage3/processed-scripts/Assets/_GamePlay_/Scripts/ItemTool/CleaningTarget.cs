using System;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

[RequireComponent(typeof(ItemSpriteMaskPainter))]
public class CleaningTarget : MonoBehaviour
{
    [Serializable]
    public class CleaningState
    {
        [Tooltip("Tên state, chỉ dùng để nhận biết trên Inspector")]
        public string stateName;

        [Tooltip("Tool được phép sử dụng. Tool đang kéo phải khớp với Tool này. (Nếu không cần thiết, có thể bỏ qua check)")]
        public Item requiredTool;

        [Header("Brush Config")]
        public float brushRadius = 0.25f;
        
        [Tooltip("Bật nếu muốn tùy chỉnh Sorting Order của SpriteMask được sinh ra")]
        public bool overrideMaskSorting = true;
        public string maskSortingLayerName = "Default";

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
    private int currentStateIndex = 0;
    private bool isFullyCompleted = false;

    private void Awake()
    {
        maskPainter = GetComponent<ItemSpriteMaskPainter>();
        maskPainter.onPaintComplete.AddListener(OnPaintComplete);
        
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
        
        // Cấu hình Mask Painter theo state hiện tại
        maskPainter.brushRadius = state.brushRadius;
        maskPainter.maskSortingLayerName = state.maskSortingLayerName;
        maskPainter.overrideMaskSorting = state.overrideMaskSorting;
    }

    // Helper để check xem tool (Item) có được phép vẽ lên target này không
    public bool CanProcess(Item tool)
    {
        if (isFullyCompleted || currentStateIndex >= states.Count) return false;
        
        var state = states[currentStateIndex];
        // Nếu không gắn requiredTool thì cho phép mọi tool
        if (state.requiredTool == null) 
        {
            // Debug.LogWarning($"[CleaningTarget] State '{state.stateName}' đang KHÔNG có requiredTool (bị null). Nó sẽ cho phép mọi tool vẽ lên!");
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
    public void Process([Bridge.Ref] Vector3 worldPosition)
    {
        if (isFullyCompleted || !maskPainter.isActiveAndEnabled) return;
        
        maskPainter.BeginPaintAtWorldPoint(worldPosition);
        maskPainter.PaintAtWorldPoint(worldPosition);
    }

    public void EndProcess()
    {
        if (isFullyCompleted || !maskPainter.isActiveAndEnabled) return;
        
        maskPainter.EndPaint();
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
        
        // Xóa (Despawn) toàn bộ mask đã vẽ của state này
        maskPainter.ResetPaint();
        
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
