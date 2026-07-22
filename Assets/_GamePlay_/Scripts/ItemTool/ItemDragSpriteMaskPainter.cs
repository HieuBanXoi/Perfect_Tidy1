using UnityEngine;

public enum ItemDragSoundPlayback
{
    OnPaint,
    OnDrag
}

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

    [Header("--- SOUND ---")]
    public FxType fxSoundType = FxType.Click;
    [Tooltip("Khi nào thì phát âm thanh: 'OnPaint' - chỉ khi đang vẽ trúng, 'OnDrag' - trong suốt quá trình kéo.")]
    public ItemDragSoundPlayback soundPlayback = ItemDragSoundPlayback.OnPaint;

    public bool IsPaintComplete => hasCompletedPaint;

    private ItemDraggable itemDraggable;
    private Item ownerItem;
    private bool isDragging;
    private bool hasBegunPaint;
    private bool hasCompletedPaint;
    private int completedPaintersCount;
    private int initialPaintersCount;
    private ItemSpriteMaskPainter activeTargetPainter;
    private float lastHeartSpawnTime = -1f;
    private const float heartSpawnCooldown = 3.0f;

    private void Awake()
    {
        itemDraggable = GetComponent<ItemDraggable>();
        ownerItem = GetComponent<Item>();
        if (brushSpawnPoint == null) brushSpawnPoint = transform;
        if (paintTrailFx != null) paintTrailFx.SetActive(false);
    }

    public bool CanPaint(ItemSpriteMaskPainter painter)
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
            EndActiveTargetPaint();
            UpdateActivePaintingState(false);
            return;
        }

        if (!hasBegunPaint)
        {
            BeginPaint();
            return;
        }

        ItemSpriteMaskPainter frontmostPainter = GetFrontmostPainterUnderPointer();

        if (frontmostPainter != null)
        {
            bool isDesignatedTarget = targetPainters.Contains(frontmostPainter);
            bool canPaintOnTarget = CanPaint(frontmostPainter);

            if (isDesignatedTarget && canPaintOnTarget)
            {
                if (activeTargetPainter != null && activeTargetPainter != frontmostPainter)
                {
                    EndActiveTargetPaint();
                }

                activeTargetPainter = frontmostPainter;
                ProcessTargetPainter(activeTargetPainter);
                UpdateActivePaintingState(IsTargetPainting(activeTargetPainter));
            }
            else
            {
                EndActiveTargetPaint();
                UpdateActivePaintingState(false);

                if (isDesignatedTarget && !canPaintOnTarget)
                {
                    if (Time.time > lastHeartSpawnTime + heartSpawnCooldown)
                    {
                        Item painterItem = frontmostPainter.GetComponent<Item>();
                        if (painterItem != null)
                        {
                            painterItem.SpawnHeart(true);
                            lastHeartSpawnTime = Time.time;
                        }
                    }
                }
            }
        }
        else
        {
            EndActiveTargetPaint();
            UpdateActivePaintingState(false);
        }
    }

    private bool isActivelyPainting;

    private void UpdateActivePaintingState(bool isActive)
    {
        if (isActive == isActivelyPainting || Ply_SoundManager.Ins == null) return;
        isActivelyPainting = isActive;

        if (paintTrailFx != null) paintTrailFx.SetActive(isActive);

        if (soundPlayback == ItemDragSoundPlayback.OnPaint)
        {
            if (isActive)
            {
                Ply_SoundManager.Ins.PlayFxLoop(fxSoundType);
            }
            else
            {
                Ply_SoundManager.Ins.StopFxLoop(fxSoundType);
            }
        }
    }

    private void HandleBeginDrag()
    {
        isDragging = true;
        hasBegunPaint = false;
        hasCompletedPaint = false;
        completedPaintersCount = 0;
        initialPaintersCount = GetValidPaintersCount();
        isActivelyPainting = false;

        if (soundPlayback == ItemDragSoundPlayback.OnDrag)
        {
            Ply_SoundManager.Ins.PlayFxLoop(fxSoundType);
        }

        if (paintOnBeginDrag)
        {
            BeginPaint();
        }
    }

    private void HandleEndDrag()
    {
        if (soundPlayback == ItemDragSoundPlayback.OnDrag)
        {
            Ply_SoundManager.Ins.StopFxLoop(fxSoundType);
        }

        UpdateActivePaintingState(false);
        EndPaint();
    }

    private void BeginPaint()
    {
        if (targetPainters == null || targetPainters.Count == 0 || brushSpawnPoint == null) return;

        RegisterPaintComplete();
        hasBegunPaint = true;

    // Vòng lặp này không còn cần thiết.
    // Logic BeginPaint giờ được xử lý trong Process() của CleaningTarget
    // hoặc ProcessPaint() của ItemSpriteMaskPainter trong hàm Update().
    }

    private void EndPaint()
    {
        EndActiveTargetPaint();

        isDragging = false;
        hasBegunPaint = false;
    }

    private void EndActiveTargetPaint()
    {
        if (activeTargetPainter == null) return;

        CleaningTarget ct = activeTargetPainter.GetComponent<CleaningTarget>();
        if (ct != null)
        {
            ct.EndProcess();
        }
        else
        {
            activeTargetPainter.EndPaint();
        }

        activeTargetPainter = null;
    }

    private void ProcessTargetPainter(ItemSpriteMaskPainter painter)
    {
        if (painter == null) return;

        CleaningTarget ct = painter.GetComponent<CleaningTarget>();
        if (ct != null)
        {
            ct.Process(brushSpawnPoint.position);
        }
        else
        {
            painter.ProcessPaint(brushSpawnPoint.position);
        }
    }

    private bool IsTargetPainting(ItemSpriteMaskPainter painter)
    {
        if (painter == null) return false;

        CleaningTarget ct = painter.GetComponent<CleaningTarget>();
        if (ct != null)
        {
            return ct.IsPlayingPaintFx;
        }

        return painter.IsPlayingPaintFx;
    }

    private ItemSpriteMaskPainter GetFrontmostPainterUnderPointer()
    {
        Camera mainCamera = Camera.main;
        if (mainCamera == null)
        {
            return null;
        }

        Ray ray = new Ray(brushSpawnPoint.position, mainCamera.transform.forward);
        RaycastHit[] hits = Physics.RaycastAll(ray, 100f);
        ItemSpriteMaskPainter bestPainter = null;
        float bestZ = float.MaxValue;
        float bestDistance = float.MaxValue;

        for (int i = 0; i < hits.Length; i++)
        {
            ItemSpriteMaskPainter hitPainter = hits[i].collider.GetComponentInParent<ItemSpriteMaskPainter>();
            if (hitPainter == null) continue;

            float hitZ = hitPainter.transform.position.z;
            bool isCloserToScreen = hitZ < bestZ;
            bool isSameZAndCloserHit = Mathf.Approximately(hitZ, bestZ) && hits[i].distance < bestDistance;

            if (isCloserToScreen || isSameZAndCloserHit)
            {
                bestZ = hitZ;
                bestDistance = hits[i].distance;
                bestPainter = hitPainter;
            }
        }

        return bestPainter;
    }

    private void HandleSingleStateComplete()
    {
        // Một state vừa hoàn thành, và một trái tim thành công có thể đã được hiển thị.
        // Reset lại cooldown để tránh spawn thêm trái tim thất bại ngay lập tức khi chuyển state.
        lastHeartSpawnTime = Time.time;
    }

    private void HandlePaintComplete()
    {
        if (hasCompletedPaint) return;

        completedPaintersCount++;
        
        // Đợi tất cả painter hoàn thành
        if (initialPaintersCount > 0 && completedPaintersCount >= initialPaintersCount)
        {
            hasCompletedPaint = true;

            if (soundPlayback == ItemDragSoundPlayback.OnDrag)
            {
                Ply_SoundManager.Ins.StopFxLoop(fxSoundType);
            }

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
                CleaningTarget ct = targetPainters[i].GetComponent<CleaningTarget>();
                if (ct != null)
                {
                // Lắng nghe event khi TẤT CẢ state của nó hoàn thành
                    ct.onAllStatesComplete.RemoveListener(HandlePaintComplete);
                    ct.onAllStatesComplete.AddListener(HandlePaintComplete);

                // Lắng nghe event khi MỖI state hoàn thành để reset cooldown heart
                if (ct.states != null)
                {
                    for (int j = 0; j < ct.states.Count; j++)
                    {
                        if (ct.states[j] != null)
                        {
                            ct.states[j].onStateComplete.RemoveListener(HandleSingleStateComplete);
                            ct.states[j].onStateComplete.AddListener(HandleSingleStateComplete);
                        }
                    }
                }
                }
                else
                {
                // Nếu không có CleaningTarget, lắng nghe event hoàn thành của chính painter
                    targetPainters[i].onPaintComplete.RemoveListener(HandlePaintComplete);
                    targetPainters[i].onPaintComplete.AddListener(HandlePaintComplete);
                }
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
                CleaningTarget ct = targetPainters[i].GetComponent<CleaningTarget>();
                if (ct != null)
                {
                    ct.onAllStatesComplete.RemoveListener(HandlePaintComplete);

                    // Hủy đăng ký lắng nghe event của mỗi state
                    if (ct.states != null)
                    {
                        for (int j = 0; j < ct.states.Count; j++)
                        {
                            if (ct.states[j] != null)
                            {
                                ct.states[j].onStateComplete.RemoveListener(HandleSingleStateComplete);
                            }
                        }
                    }
                }
                else
                {
                    targetPainters[i].onPaintComplete.RemoveListener(HandlePaintComplete);
                }
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
