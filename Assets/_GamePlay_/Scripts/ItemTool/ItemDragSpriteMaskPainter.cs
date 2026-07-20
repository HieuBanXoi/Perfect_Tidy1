using UnityEngine;

[RequireComponent(typeof(ItemDraggable))]
public class ItemDragSpriteMaskPainter : MonoBehaviour
{
    [Header("--- PAINT TARGET ---")]
    public ItemSpriteMaskPainter targetPainter;
    public Transform brushSpawnPoint;
    public bool paintOnBeginDrag = true;
    public bool returnToStartOnPaintComplete = true;
    public bool spawnHeartOnAutoDropFail = false;

    public bool IsPaintComplete => hasCompletedPaint;

    private ItemDraggable itemDraggable;
    private bool isDragging;
    private bool hasBegunPaint;
    private bool hasCompletedPaint;

    private void Awake()
    {
        itemDraggable = GetComponent<ItemDraggable>();
        if (brushSpawnPoint == null) brushSpawnPoint = transform;
    }

    private void OnEnable()
    {
        if (itemDraggable == null)
        {
            itemDraggable = GetComponent<ItemDraggable>();
        }

        itemDraggable.onBeginDrag.RemoveListener(HandleBeginDrag);
        itemDraggable.onBeginDrag.AddListener(HandleBeginDrag);

        itemDraggable.onDropSuccess.RemoveListener(HandleEndDrag);
        itemDraggable.onDropSuccess.AddListener(HandleEndDrag);

        itemDraggable.onDropFail.RemoveListener(HandleEndDrag);
        itemDraggable.onDropFail.AddListener(HandleEndDrag);

        itemDraggable.onReturnToStartComplete.RemoveListener(HandleEndDrag);
        itemDraggable.onReturnToStartComplete.AddListener(HandleEndDrag);

        RegisterPaintComplete();
    }

    private void OnDisable()
    {
        if (itemDraggable != null)
        {
            itemDraggable.onBeginDrag.RemoveListener(HandleBeginDrag);
            itemDraggable.onDropSuccess.RemoveListener(HandleEndDrag);
            itemDraggable.onDropFail.RemoveListener(HandleEndDrag);
            itemDraggable.onReturnToStartComplete.RemoveListener(HandleEndDrag);
        }

        UnregisterPaintComplete();
        EndPaint();
    }

    private void Update()
    {
        if (!isDragging || targetPainter == null || brushSpawnPoint == null) return;

        if (!hasBegunPaint)
        {
            BeginPaint();
            return;
        }

        targetPainter.PaintAtWorldPoint(brushSpawnPoint.position);
    }

    private void HandleBeginDrag()
    {
        isDragging = true;
        hasBegunPaint = false;
        hasCompletedPaint = false;

        if (paintOnBeginDrag)
        {
            BeginPaint();
        }
    }

    private void HandleEndDrag()
    {
        EndPaint();
    }

    private void BeginPaint()
    {
        if (targetPainter == null || brushSpawnPoint == null) return;

        RegisterPaintComplete();
        hasBegunPaint = true;
        targetPainter.BeginPaintAtWorldPoint(brushSpawnPoint.position);
    }

    private void EndPaint()
    {
        if (targetPainter != null && hasBegunPaint)
        {
            targetPainter.EndPaint();
        }

        isDragging = false;
        hasBegunPaint = false;
    }

    private void HandlePaintComplete()
    {
        if (hasCompletedPaint) return;

        hasCompletedPaint = true;
        EndPaint();

        if (returnToStartOnPaintComplete && itemDraggable != null)
        {
            itemDraggable.ForceDropFailReturnToStart(spawnHeartOnAutoDropFail);
        }
    }

    private void RegisterPaintComplete()
    {
        if (targetPainter == null) return;

        targetPainter.onPaintComplete.RemoveListener(HandlePaintComplete);
        targetPainter.onPaintComplete.AddListener(HandlePaintComplete);
    }

    private void UnregisterPaintComplete()
    {
        if (targetPainter == null) return;

        targetPainter.onPaintComplete.RemoveListener(HandlePaintComplete);
    }

    public Transform GetTutorialStart()
    {
        return brushSpawnPoint != null ? brushSpawnPoint : transform;
    }

    public Transform GetTutorialTarget()
    {
        return targetPainter != null ? targetPainter.transform : null;
    }
}
