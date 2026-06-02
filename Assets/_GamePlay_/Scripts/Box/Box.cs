using UnityEngine;
using DG.Tweening;
using System;
using System.Collections.Generic;

public class Box : MonoBehaviour
{
    [Header("Components")]
    [SerializeField] private BoxGraphicController graphicController;

    [Header("Item Spawning")]
    public List<Item> dynamicItems;
    public List<Transform> spawnTargets;
    public int initialSpawnCount = 5;
    public float revealDuration = 0.4f;

    private int currentItemIndex = 0;
    private bool isRevealingInitialItems = false;

    private void Start()
    {
        if (graphicController == null)
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

        if (graphicController != null)
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

    public void SpawnNextItemToVacatedTarget(Vector3 targetPosition)
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

        RevealNextItem(targetPosition);
    }

    private void RevealInitialItems()
    {
        isRevealingInitialItems = true;
        int revealCount = Mathf.Min(initialSpawnCount, spawnTargets.Count, dynamicItems.Count - currentItemIndex);

        for (int i = 0; i < revealCount; i++)
        {
            if (spawnTargets[i] != null)
            {
                ShowInitialItem(spawnTargets[i].position);
            }
        }

        isRevealingInitialItems = false;
        UIManager.Ins.ZoomInCamera();
        GameManager.Ins.TriggerTutorial();
    }

    private void ShowInitialItem(Vector3 targetPosition)
    {
        if (currentItemIndex >= dynamicItems.Count)
        {
            return;
        }

        Item itemComponent = dynamicItems[currentItemIndex];
        if (itemComponent == null)
        {
            currentItemIndex++;
            ShowInitialItem(targetPosition);
            return;
        }

        Transform itemToShow = itemComponent.transform;
        itemToShow.DOKill();
        itemToShow.position = targetPosition;
        itemToShow.localScale = Vector3.one;

        itemComponent.canShowShadowHint = currentItemIndex < initialSpawnCount;
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
        currentItemIndex++;
    }

    private void RevealNextItem(Vector3 targetPosition, Action onComplete = null)
    {
        if (currentItemIndex >= dynamicItems.Count)
        {
            return;
        }

        Item itemComponent = dynamicItems[currentItemIndex];
        if (itemComponent == null)
        {
            currentItemIndex++;
            RevealNextItem(targetPosition, onComplete);
            return;
        }

        Transform itemToReveal = itemComponent.transform;
        itemToReveal.DOKill();
        itemToReveal.position = targetPosition;
        itemToReveal.localScale = Vector3.zero;

        itemComponent.canShowShadowHint = currentItemIndex < initialSpawnCount;
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

        currentItemIndex++;

        itemToReveal.DOScale(Vector3.one, revealDuration).SetEase(Ease.OutBack).OnComplete(() => {
            if (itemCollider != null)
            {
                itemCollider.enabled = true;
            }

            itemToReveal.DOMoveY(itemToReveal.position.y + 0.3f, 1.5f).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
            onComplete?.Invoke();
        });
    }

    private void TryPlayEndAnimation()
    {
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
