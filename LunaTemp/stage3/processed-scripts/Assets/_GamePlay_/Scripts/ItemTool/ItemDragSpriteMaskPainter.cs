using UnityEngine;

[RequireComponent(typeof(ItemDraggable))]
public class ItemDragSpriteMaskPainter : MonoBehaviour
{
    [Header("--- PAINT TARGET ---")]
    public System.Collections.Generic.List<ItemSpriteMaskPainter> targetPainters = new System.Collections.Generic.List<ItemSpriteMaskPainter>();
    public Transform brushSpawnPoint;
    public bool paintOnBeginDrag = true;
    public bool returnToStartOnPaintComplete = true;
    public bool spawnHeartOnAutoDropFail = false;
    public GameObject paintTrailFx;
    public FxType fxSoundType = FxType.Click;

    public bool IsPaintComplete => hasCompletedPaint;

    private ItemDraggable itemDraggable;
    private Item ownerItem;
    private bool isDragging;
    private bool hasBegunPaint;
    private bool hasCompletedPaint;
    private int completedPaintersCount;

    private void Awake()
    {
        itemDraggable = GetComponent<ItemDraggable>();
        ownerItem = GetComponent<Item>();
        if (brushSpawnPoint == null) brushSpawnPoint = transform;
        if (paintTrailFx != null) paintTrailFx.SetActive(false);
    }

    private bool CanPaint(ItemSpriteMaskPainter painter)
    {
        if (painter == null) return false;
        
        CleaningTarget ct = painter.GetComponent<CleaningTarget>();
        if (ct != null)
        {
            return ct.CanProcess(ownerItem);
        }
        return true;
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
        if (!isDragging || targetPainters == null || targetPainters.Count == 0 || brushSpawnPoint == null)
        {
            UpdateActivePaintingState(false);
            return;
        }

        if (!hasBegunPaint)
        {
            BeginPaint();
            return;
        }

        bool isPaintingAnywhere = false;
        for (int i = 0; i < targetPainters.Count; i++)
        {
            if (CanPaint(targetPainters[i]))
            {
                targetPainters[i].PaintAtWorldPoint(brushSpawnPoint.position);
                if (targetPainters[i].IsPlayingPaintFx)
                {
                    isPaintingAnywhere = true;
                }
            }
        }
        
        UpdateActivePaintingState(isPaintingAnywhere);
    }

    private bool isActivelyPainting;

    private void UpdateActivePaintingState(bool isActive)
    {
        if (isActive == isActivelyPainting) return;
        isActivelyPainting = isActive;

        if (paintTrailFx != null) paintTrailFx.SetActive(isActive);
        
        if (isActive)
        {
            Ply_SoundManager.Ins.PlayFxLoop(fxSoundType);
        }
        else
        {
            Ply_SoundManager.Ins.StopFxLoop(fxSoundType);
        }
    }

    private void HandleBeginDrag()
    {
        isDragging = true;
        hasBegunPaint = false;
        hasCompletedPaint = false;
        completedPaintersCount = 0;
        isActivelyPainting = false;

        if (paintOnBeginDrag)
        {
            BeginPaint();
        }
    }

    private void HandleEndDrag()
    {
        UpdateActivePaintingState(false);
        EndPaint();
    }

    private void BeginPaint()
    {
        if (targetPainters == null || targetPainters.Count == 0 || brushSpawnPoint == null) return;

        RegisterPaintComplete();
        hasBegunPaint = true;
        
        for (int i = 0; i < targetPainters.Count; i++)
        {
            if (CanPaint(targetPainters[i]))
            {
                targetPainters[i].BeginPaintAtWorldPoint(brushSpawnPoint.position);
            }
        }
    }

    private void EndPaint()
    {
        if (hasBegunPaint)
        {
            if (targetPainters != null)
            {
                for (int i = 0; i < targetPainters.Count; i++)
                {
                    if (CanPaint(targetPainters[i]))
                    {
                        targetPainters[i].EndPaint();
                    }
                }
            }
        }

        isDragging = false;
        hasBegunPaint = false;
    }

    private void HandlePaintComplete()
    {
        if (hasCompletedPaint) return;

        completedPaintersCount++;
        
        // Đợi tất cả painter hoàn thành
        if (completedPaintersCount >= GetValidPaintersCount())
        {
            hasCompletedPaint = true;
            UpdateActivePaintingState(false);
            EndPaint();

            if (returnToStartOnPaintComplete && itemDraggable != null)
            {
                itemDraggable.ForceDropFailReturnToStart(spawnHeartOnAutoDropFail);
            }
        }
    }
    
    private int GetValidPaintersCount()
    {
        int count = 0;
        if (targetPainters != null)
        {
            for (int i = 0; i < targetPainters.Count; i++)
            {
                if (CanPaint(targetPainters[i])) count++;
            }
        }
        return count;
    }

    private void RegisterPaintComplete()
    {
        if (targetPainters == null) return;

        for (int i = 0; i < targetPainters.Count; i++)
        {
            if (targetPainters[i] != null)
            {
                targetPainters[i].onPaintComplete.RemoveListener(HandlePaintComplete);
                targetPainters[i].onPaintComplete.AddListener(HandlePaintComplete);
            }
        }
    }

    private void UnregisterPaintComplete()
    {
        if (targetPainters == null) return;

        for (int i = 0; i < targetPainters.Count; i++)
        {
            if (targetPainters[i] != null)
            {
                targetPainters[i].onPaintComplete.RemoveListener(HandlePaintComplete);
            }
        }
    }
    
    public Transform GetTutorialStart()
    {
        return brushSpawnPoint != null ? brushSpawnPoint : transform;
    }

    public Transform GetTutorialTarget()
    {
        return targetPainters != null && targetPainters.Count > 0 && targetPainters[0] != null ? targetPainters[0].transform : null;
    }
}
