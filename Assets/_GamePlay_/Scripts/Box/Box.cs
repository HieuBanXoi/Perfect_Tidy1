using UnityEngine;
using DG.Tweening;
using System;
using System.Collections.Generic;

public class Box : Ply_Singleton<Box>
{
    [Header("Settings")]
    public bool useBox = true;

    [Header("Components")]
    [SerializeField] private BoxGraphicController graphicController;

    [Header("Item Spawning")]
    public BoxSpawnMode spawnMode = BoxSpawnMode.Continuous;
    public List<Item> dynamicItems;
    public List<Transform> spawnTargets;
    public int initialSpawnCount = 5;
    public float revealDuration = 0.4f;
    [Tooltip("Only used by BatchWhenTargetsEmpty. Shows holder shadows for all items in the first spawned batch.")]
    public bool showInitialBatchShadowsOnSpawn = false;
    public ItemConveyor mainConveyor;

    private int currentItemIndex = 0;
    private bool isRevealingInitialItems = false;
    private readonly List<Transform> vacatedTargets = new List<Transform>();
    private readonly List<Transform> availableBoxTargets = new List<Transform>();
    private int activeSpawnTargetCount = 0;
    private bool isOpened = false;
    private bool isPlayingBoxAnimation = false;

    private void Start()
    {
        if (useBox && graphicController == null)
        {
            graphicController = ComponentCache<BoxGraphicController>.Get(transform);
        }

        for (int i = 0; i < dynamicItems.Count; i++)
        {
            Item item = dynamicItems[i];
            if (item != null)
            {
                item.gameObject.SetActive(false);
            }
        }

        if (useBox)
        {
            CacheAvailableBoxTargets();

            if (graphicController != null)
            {
                graphicController.ChangeAnim("0-Drop", false, () => {
                    graphicController.ChangeAnim("1-ready-Loop", true);
                    GameManager.Ins.TriggerTutorial();
                });
            }
            else
            {
                GameManager.Ins.TriggerTutorial();
            }
        }
        else
        {
            RevealInitialItems();
        }
    }

    public void OnClicked()
    {
        Debug.Log("OnClick");
        Ply_SoundManager.Ins.PlayFx(FxType.Click);
        GameManager.Ins.ResetInactivityTimer();

        if (useBox)
        {
            HandleBoxClickSpawn();
        }
    }

    public bool HasItems()
    {
        return currentItemIndex < dynamicItems.Count;
    }

    public void SpawnNextItemToVacatedTarget(Vector3 targetPosition, Action onComplete = null)
    {
        Transform target = GetSpawnTargetByPosition(targetPosition);
        if (target == null)
        {
            onComplete?.Invoke();
            return;
        }

        if (useBox)
        {
            AddAvailableBoxTarget(target);
            onComplete?.Invoke();
            return;
        }

        if (spawnMode == BoxSpawnMode.BatchWhenTargetsEmpty)
        {
            SpawnBatchWhenTargetsEmpty(target, onComplete);
            return;
        }

        if (isRevealingInitialItems)
        {
            onComplete?.Invoke();
            return;
        }

        if (currentItemIndex >= dynamicItems.Count)
        {
            TryPlayEndAnimation();
            onComplete?.Invoke();
            return;
        }

        // Chế độ Continuous khi không dùng Box sẽ spawn ngay lập tức tại đây
        if (!RevealNextItem(target, onComplete))
        {
            TryPlayEndAnimation();
            onComplete?.Invoke();
        }
    }

    private void RevealInitialItems()
    {
        isRevealingInitialItems = true;
        int revealCount = Mathf.Min(initialSpawnCount, spawnTargets.Count, dynamicItems.Count - currentItemIndex);

        for (int i = 0; i < revealCount; i++)
        {
            if (spawnTargets[i] != null)
            {
                if (ShowInitialItem(spawnTargets[i]))
                {
                    activeSpawnTargetCount++;
                }
            }
        }

        if (spawnMode == BoxSpawnMode.BatchWhenTargetsEmpty && showInitialBatchShadowsOnSpawn)
        {
            SetSpawnedShadowsVisible(0, currentItemIndex, true);
        }

        isRevealingInitialItems = false;
        UIManager.Ins.ZoomInCamera();
        GameManager.Ins.TriggerTutorial();
    }

    private bool ShowInitialItem(Transform target)
    {
        if (target == null) return false;

        Item itemComponent = GetNextDynamicItem(out int itemIndex);
        if (itemComponent == null)
        {
            return false;
        }

        Transform itemToShow = itemComponent.transform;
        
        // Đặt Spawn Target làm cha của Item và lưu lại homeSlot
        itemToShow.SetParent(target, true);
        itemComponent.homeSlot = target;

        itemToShow.DOKill();
        itemToShow.position = target.position;
        itemComponent.ApplySpawnScale();
        itemComponent.DisableAnimatorOnSpawn();

        itemComponent.canShowShadowHint = itemIndex < initialSpawnCount;
        itemComponent.waitingPosition = target.position;
        itemComponent.SetSortingOrder(GameManager.Ins.currentLayer);
        GameManager.Ins.AddItemToTutorial(itemComponent);
        GameManager.Ins.currentLayer++;

        itemToShow.gameObject.SetActive(true);
        itemComponent.enabled = true;
        itemComponent.ChangeState(ItemState.Waitting);

        Collider itemCollider = ComponentCache<Collider>.Get(itemToShow);
        if (itemCollider != null)
        {
            itemCollider.enabled = true;
        }

        itemToShow.DOMoveY(itemToShow.position.y + 0.3f, 1.5f).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
        return true;
    }

    private bool RevealNextItem(Transform target, Action onComplete = null, bool moveFromBox = false)
    {
        if (target == null) return false;

        Item itemComponent = GetNextDynamicItem(out int itemIndex);
        if (itemComponent == null)
        {
            return false;
        }

        Transform itemToReveal = itemComponent.transform;
        
        // Đặt Spawn Target làm cha của Item và lưu lại homeSlot
        itemToReveal.SetParent(target, true);
        itemComponent.homeSlot = target;

        itemToReveal.DOKill();
        itemToReveal.position = moveFromBox ? transform.position : target.position;
        itemToReveal.localScale = Vector3.zero;
        itemComponent.DisableAnimatorOnSpawn();
        Vector3 targetScale = itemComponent.GetWaitingScale();

        itemComponent.canShowShadowHint = itemIndex < initialSpawnCount;
        itemComponent.waitingPosition = target.position;
        itemComponent.SetSortingOrder(GameManager.Ins.currentLayer);
        GameManager.Ins.AddItemToTutorial(itemComponent);
        GameManager.Ins.currentLayer++;

        itemToReveal.gameObject.SetActive(true);
        itemComponent.enabled = true;
        itemComponent.ChangeState(ItemState.Waitting);

        Collider itemCollider = ComponentCache<Collider>.Get(itemToReveal);
        if (itemCollider != null)
        {
            itemCollider.enabled = false;
        }

        if (moveFromBox)
        {
            itemToReveal.DOJump(target.position, 0.5f, 1, revealDuration).SetEase(Ease.OutQuad);
        }

        itemToReveal.DOScale(targetScale, revealDuration).SetEase(Ease.OutBack).OnComplete(() => {
            if (itemCollider != null)
            {
                itemCollider.enabled = true;
            }

            itemToReveal.DOMoveY(itemToReveal.position.y + 0.3f, 1.5f).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
            onComplete?.Invoke();
        });

        return true;
    }

    private void HandleBoxClickSpawn()
    {
        if (!isOpened)
        {
            UIManager.Ins.ZoomInCamera();
            isOpened = true;

            if (graphicController == null)
            {
                SpawnItemFromBoxClick();
                return;
            }

            isPlayingBoxAnimation = true;
            graphicController.ChangeAnim("2-OPEN", false, () => {
                SpawnItemFromBoxClick();
                graphicController.ChangeAnim("3-OPEN-click", false, () => {
                    graphicController.ChangeAnim("3-OPEN-loop-break", true);
                    isPlayingBoxAnimation = false;
                });
            });
            return;
        }

        if (currentItemIndex >= dynamicItems.Count)
        {
            TryPlayEndAnimation();
            return;
        }

        if (availableBoxTargets.Count <= 0)
        {
            return;
        }

        if (graphicController == null)
        {
            SpawnItemFromBoxClick();
            return;
        }

        isPlayingBoxAnimation = true;
        graphicController.ChangeAnim("3-OPEN-click", false, () => {
            if (currentItemIndex >= dynamicItems.Count)
            {
                Debug.Log("End");
                TryPlayEndAnimation();
            }
            else
            {
                graphicController.ChangeAnim("3-OPEN-loop", true);
                isPlayingBoxAnimation = false;
            }
        });

        SpawnItemFromBoxClick();
    }

    private void SpawnItemFromBoxClick()
    {
        if (isRevealingInitialItems)
        {
            return;
        }

        if (currentItemIndex >= dynamicItems.Count)
        {
            TryPlayEndAnimation();
            return;
        }

        if (availableBoxTargets.Count <= 0)
        {
            return;
        }

        int randomIndex = UnityEngine.Random.Range(0, availableBoxTargets.Count);
        Transform target = availableBoxTargets[randomIndex];
        availableBoxTargets.RemoveAt(randomIndex);

        if (!RevealNextItem(target, null, true))
        {
            AddAvailableBoxTarget(target);
            TryPlayEndAnimation();
        }
    }

    private void CacheAvailableBoxTargets()
    {
        availableBoxTargets.Clear();

        for (int i = 0; i < spawnTargets.Count; i++)
        {
            if (spawnTargets[i] != null)
            {
                AddAvailableBoxTarget(spawnTargets[i]);
            }
        }
    }

    private void AddAvailableBoxTarget(Transform target)
    {
        if (target == null) return;
        if (!availableBoxTargets.Contains(target))
        {
            availableBoxTargets.Add(target);
        }
    }

    private void SpawnBatchWhenTargetsEmpty(Transform target, Action onComplete = null)
    {
        if (isRevealingInitialItems)
        {
            onComplete?.Invoke();
            return;
        }

        vacatedTargets.Add(target);

        if (vacatedTargets.Count < activeSpawnTargetCount)
        {
            onComplete?.Invoke();
            return;
        }

        if (currentItemIndex >= dynamicItems.Count)
        {
            TryPlayEndAnimation();
            onComplete?.Invoke();
            return;
        }

        RevealBatch(onComplete);
    }

    private void RevealBatch(Action onComplete = null)
    {
        int targetCount = Mathf.Min(spawnTargets.Count, vacatedTargets.Count);
        if (targetCount <= 0)
        {
            TryPlayEndAnimation();
            onComplete?.Invoke();
            return;
        }

        List<Transform> targetsToProcess = vacatedTargets.GetRange(0, targetCount);
        vacatedTargets.RemoveRange(0, targetCount);

        activeSpawnTargetCount = 0;
        int pendingRevealCount = 0;

        for (int i = 0; i < targetsToProcess.Count; i++)
        {
            if (currentItemIndex >= dynamicItems.Count)
            {
                break;
            }

            pendingRevealCount++;
            bool didReveal = RevealNextItem(targetsToProcess[i], () => {
                pendingRevealCount--;
                if (pendingRevealCount == 0)
                {
                    onComplete?.Invoke();
                }
            });

            if (didReveal)
            {
                activeSpawnTargetCount++;
            }
            else
            {
                pendingRevealCount--;
            }
        }

        if (pendingRevealCount == 0)
        {
            TryPlayEndAnimation();
            onComplete?.Invoke();
        }
    }

    private Item GetNextDynamicItem(out int itemIndex)
    {
        while (currentItemIndex < dynamicItems.Count)
        {
            itemIndex = currentItemIndex;
            Item item = dynamicItems[currentItemIndex];
            currentItemIndex++;

            if (item != null)
            {
                return item;
            }
        }

        itemIndex = -1;
        return null;
    }

    private Transform GetSpawnTargetByPosition(Vector3 position)
    {
        for (int i = 0; i < spawnTargets.Count; i++)
        {
            if (spawnTargets[i] != null && Vector3.SqrMagnitude(spawnTargets[i].position - position) < 0.0001f)
            {
                return spawnTargets[i];
            }
        }
        return null;
    }

    private void SetSpawnedShadowsVisible(int startIndex, int endIndex, bool isVisible)
    {
        int clampedEndIndex = Mathf.Min(endIndex, dynamicItems.Count);
        for (int i = Mathf.Max(0, startIndex); i < clampedEndIndex; i++)
        {
            Item item = dynamicItems[i];
            if (item == null)
            {
                continue;
            }

            item.keepShadowVisibleWhenWaiting = isVisible;

            if (item.shadowOnHolder != null)
            {
                item.shadowOnHolder.gameObject.SetActive(isVisible);
            }
        }
    }
    private void CompactItemsToLeft()
    {
        // 1. Tìm tất cả các Item hiện đang nằm trên các spawnTargets và đang ở trạng thái chờ
        List<Item> activeItems = new List<Item>();
        for (int i = 0; i < spawnTargets.Count; i++)
        {
            Transform target = spawnTargets[i];
            if (target != null && target.childCount > 0)
            {
                Item item = target.GetComponentInChildren<Item>();
                if (item != null && item.currentState == ItemState.Waitting)
                {
                    activeItems.Add(item);
                }
            }
        }

        if (activeItems.Count == 0) return;

        // 2. Sắp xếp các Item này theo vị trí trục X từ trái sang phải để giữ nguyên thứ tự của chúng
        activeItems.Sort((a, b) => a.transform.position.x.CompareTo(b.transform.position.x));

        // 3. Sắp xếp lại danh sách các slot (spawnTargets) từ trái sang phải theo tọa độ thế giới
        List<Transform> sortedTargets = new List<Transform>(spawnTargets);
        sortedTargets.Sort((a, b) => a.position.x.CompareTo(b.position.x));

        // 4. Dồn các Item về các slot bên trái tương ứng
        for (int i = 0; i < activeItems.Count; i++)
        {
            Item item = activeItems[i];
            Transform newTarget = sortedTargets[i];

            // Nếu item đã ở đúng slot này rồi thì bỏ qua để tránh chạy lại Tween không cần thiết
            if (item.homeSlot == newTarget)
            {
                continue;
            }

            // Cập nhật dữ liệu slot mới cho Item để khi người chơi kéo/thả trượt nó sẽ bay về đúng chỗ mới
            item.transform.SetParent(newTarget, true);
            item.homeSlot = newTarget;
            item.waitingPosition = newTarget.position;

            // Chạy hiệu ứng mượt mà dồn item về slot mới bằng DOTween
            Transform itemTf = item.transform;
            itemTf.DOKill(); // Xóa các Tween nhấp nhô (Yoyo) cũ đang chạy

            itemTf.DOLocalMove(Vector3.zero, 0.4f).SetEase(Ease.OutCubic).OnComplete(() => {
                // Sau khi dồn xong, kích hoạt lại hiệu ứng nhấp nhô Yoyo tại vị trí mới giống như ban đầu
                itemTf.DOMoveY(newTarget.position.y + 0.3f, 1.5f).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
            });
        }
    }
    private void TryPlayEndAnimation()
    {
        if (currentItemIndex >= dynamicItems.Count)
        {
            CompactItemsToLeft();
        }
        if (!useBox)
        {
            return;
        }

        if (currentItemIndex < dynamicItems.Count)
        {
            return;
        }

        if (graphicController == null)
        {
            isPlayingBoxAnimation = false;
            gameObject.SetActive(false);
            return;
        }

        graphicController.ChangeAnim("4-End", false, () => {
            isPlayingBoxAnimation = false;
            gameObject.SetActive(false);
        });
    }
}

public enum BoxSpawnMode
{
    Continuous,
    BatchWhenTargetsEmpty
}