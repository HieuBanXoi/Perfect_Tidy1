using UnityEngine;
using DG.Tweening;
using System;
using System.Collections.Generic;

public class Box : MonoBehaviour
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

    private int currentItemIndex = 0;
    private bool isRevealingInitialItems = false;
    private readonly List<Vector3> vacatedTargetPositions = new List<Vector3>();
    private int activeSpawnTargetCount = 0;

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

        if (useBox && graphicController != null)
        {
            graphicController.ChangeAnim("3-OPEN-loop", true);
        }

        RevealInitialItems();
    }

    public void OnClicked()
    {
        GameManager.Ins.ResetInactivityTimer();
    }

    public bool HasItems()
    {
        return currentItemIndex < dynamicItems.Count;
    }

    public void SpawnNextItemToVacatedTarget([Bridge.Ref] Vector3 targetPosition, Action onComplete = null)
    {
        if (spawnMode == BoxSpawnMode.BatchWhenTargetsEmpty)
        {
            SpawnBatchWhenTargetsEmpty(targetPosition, onComplete);
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

        if (!RevealNextItem(targetPosition, onComplete))
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
                if (ShowInitialItem(spawnTargets[i].position))
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

    private bool ShowInitialItem([Bridge.Ref] Vector3 targetPosition)
    {
        Item itemComponent = GetNextDynamicItem(out int itemIndex);
        if (itemComponent == null)
        {
            return false;
        }

        Transform itemToShow = itemComponent.transform;
        itemToShow.DOKill();
        itemToShow.position = targetPosition;
        itemToShow.localScale = Vector3.one;

        itemComponent.canShowShadowHint = itemIndex < initialSpawnCount;
        itemComponent.waitingPosition = targetPosition;
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

    private bool RevealNextItem([Bridge.Ref] Vector3 targetPosition, Action onComplete = null)
    {
        Item itemComponent = GetNextDynamicItem(out int itemIndex);
        if (itemComponent == null)
        {
            return false;
        }

        Transform itemToReveal = itemComponent.transform;
        itemToReveal.DOKill();
        itemToReveal.position = targetPosition;
        itemToReveal.localScale = Vector3.zero;

        itemComponent.canShowShadowHint = itemIndex < initialSpawnCount;
        itemComponent.waitingPosition = targetPosition;
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

        itemToReveal.DOScale(Vector3.one, revealDuration).SetEase(Ease.OutBack).OnComplete(() => {
            if (itemCollider != null)
            {
                itemCollider.enabled = true;
            }

            itemToReveal.DOMoveY(itemToReveal.position.y + 0.3f, 1.5f).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
            onComplete?.Invoke();
        });

        return true;
    }

    private void SpawnBatchWhenTargetsEmpty([Bridge.Ref] Vector3 targetPosition, Action onComplete = null)
    {
        if (isRevealingInitialItems)
        {
            onComplete?.Invoke();
            return;
        }

        vacatedTargetPositions.Add(targetPosition);

        if (vacatedTargetPositions.Count < activeSpawnTargetCount)
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
        int targetCount = Mathf.Min(spawnTargets.Count, vacatedTargetPositions.Count);
        if (targetCount <= 0)
        {
            TryPlayEndAnimation();
            onComplete?.Invoke();
            return;
        }

        List<Vector3> targetPositions = vacatedTargetPositions.GetRange(0, targetCount);
        vacatedTargetPositions.RemoveRange(0, targetCount);

        activeSpawnTargetCount = 0;
        int pendingRevealCount = 0;

        for (int i = 0; i < targetPositions.Count; i++)
        {
            if (currentItemIndex >= dynamicItems.Count)
            {
                break;
            }

            pendingRevealCount++;
            bool didReveal = RevealNextItem(targetPositions[i], () => {
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

    private void SetSpawnedShadowsVisible(int startIndex, int endIndex, bool isVisible)
    {
        int clampedEndIndex = Mathf.Min(endIndex, dynamicItems.Count);
        for (int i = Mathf.Max(0, startIndex); i < clampedEndIndex; i++)
        {
            Item item = dynamicItems[i];
            if (item != null && item.shadowOnHolder != null)
            {
                item.shadowOnHolder.gameObject.SetActive(isVisible);
            }
        }
    }

    private void TryPlayEndAnimation()
    {
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
            gameObject.SetActive(false);
            return;
        }

        graphicController.ChangeAnim("4-End", false, () => {
            gameObject.SetActive(false);
        });
    }
}

public enum BoxSpawnMode
{
    Continuous,
    BatchWhenTargetsEmpty
}
