using UnityEngine;
using Luna.Unity;
using System;
using System.Collections.Generic;
using DG.Tweening;
public class GameManager : Ply_Singleton<GameManager>
{
    private IGameState currentState;
    public bool isPlaying = false;
    public bool isTutorial = true;
    public bool isGotoStore = false;
    public bool isDraggingConveyor = false;
    public int countMove = 0;
    [LunaPlaygroundField("MaxMove", 1, "Build Settings")]
    public int maxMove = 200;
    public int startLayer = 2000;
    public int currentLayer; // Lớp sorting order cao nhất hiện tại

    [Header("Components")]
    public Box mainBox;
    public ItemConveyor itemConveyor;

    [Header("Tutorial")]
    public GameObject handTutorial;
    public float tutorialDelay = 5f;
    private List<Item> tutorialItems = new List<Item>();
    private float inactivityTimer;
    private Item currentlyGuidedItem = null;
    private bool isTutorialActive = false;
    private int totalDynamicItems;
    private int placedItemCount = 0;

    public override void Awake()
    {
        base.Awake();
        currentLayer = startLayer;
    }

    private void Start()
    {
        ChangeState(new OnPlayState());
        if (handTutorial != null)
        {
            handTutorial.SetActive(false);
        }
        inactivityTimer = 0f;

        if (mainBox != null)
        {
            totalDynamicItems = mainBox.dynamicItems.Count;
            if (UIManager.Ins != null)
            {
                UIManager.Ins.SetupProgressBar(totalDynamicItems);
            }
        }


    }
    private void Update()
    {
        if (isGotoStore && Input.GetMouseButtonUp(0))
        {
            GotoStore();
        }
        if (currentState != null)
        {
            currentState.OnExecute(this);
        }

        // Xử lý logic tutorial
        if (!isTutorialActive && !itemConveyor.isDraggingConveyor && isPlaying && !InputManager.Ins.isDragging)
        {
            // Nếu người chơi chưa ghép đúng item nào (vừa vào game), 
            // bỏ qua timer và ép gọi tay hướng dẫn liên tục cho đến khi hiện thành công.
            if (placedItemCount == 0)
            {
                ShowHandTutorial();
            }
            else
            {
                // Các bước chơi sau sẽ dùng lại timer (tutorialDelay) bình thường
                inactivityTimer += Time.deltaTime;
                if (inactivityTimer >= tutorialDelay)
                {
                    ShowHandTutorial();
                }
            }
        }
    }
    public void ChangeState(IGameState newState)
    {
        currentState?.OnExit(this);

        currentState = newState;

        currentState?.OnEnter(this);
        Debug.Log("ChangeState: " + currentState.ToString());
    }
    public bool IsPlaying()
    {
        return isPlaying;
    }
    public void GotoStore()
    {
        LifeCycle.GameEnded();
        Playable.InstallFullGame();
    }
    public void MoveOne()
    {
        countMove++;
        if (countMove == 100)
        {
            isPlaying = false;
            isGotoStore = true;
        }
    }
    public void TurnOffTut()
    {
        if (isTutorial)
        {
            UIManager.Ins.ActiveTutorialUI(false);
            isTutorial = false;
        }
    }
    [ContextMenu("Win Game")]
    public void WinGame()
    {
        ChangeState(new WinState());
    }
    [ContextMenu("Lose Game")]
    public void LoseGame()
    {
        ChangeState(new LoseState());
    }

    public void OnItemPlaced()
    {
        OnItemPlaced(null);
    }

    public void OnItemPlaced(Item placedItem)
    {
        placedItemCount++;
        if (UIManager.Ins != null)
        {
            UIManager.Ins.UpdateProgress();
        }

        if (placedItemCount == maxMove)
        {
            if (placedItem != null && mainBox != null && mainBox.HasItems())
            {
                mainBox.SpawnNextItemToVacatedTarget(placedItem.waitingPosition, LoseGame);
                return;
            }

            LoseGame();
            return;
        }

        if (placedItemCount >= totalDynamicItems)
        {
            WinGame();
            return;
        }

        // if (placedItem != null && mainBox != null)
        // {
        //     mainBox.SpawnNextItemToVacatedTarget(placedItem.waitingPosition);
        // }
    }

    #region Tutorial Methods

    public void TriggerTutorial()
    {
        if (isTutorialActive || !isPlaying) return;
        inactivityTimer = tutorialDelay;
        ShowHandTutorial();
    }

    public void AddItemToTutorial(Item item)
    {
        if (!tutorialItems.Contains(item))
        {
            tutorialItems.Add(item);
        }

        if (isTutorialActive)
        {
            RestartHandTutorial();
            return;
        }

        ResetInactivityTimer();
    }

    public void RemoveItemFromTutorial(Item item)
    {
        if (tutorialItems.Contains(item))
        {
            tutorialItems.Remove(item);
        }
        ResetInactivityTimer();
    }

    public void ResetInactivityTimer()
    {
        inactivityTimer = 0f;
        if (isTutorialActive)
        {
            isTutorialActive = false;
            if (handTutorial != null)
            {
                DOTween.Kill("handTutorial");
                handTutorial.SetActive(false);
            }

            // Tắt shadow hint của item vừa được hướng dẫn
            HideCurrentGuidedItemShadowIfAllowed();
            currentlyGuidedItem = null; // Clear reference
        }
    }

    private void RestartHandTutorial()
    {
        isTutorialActive = false;

        if (handTutorial != null)
        {
            DOTween.Kill("handTutorial");
            handTutorial.SetActive(false);
        }

        HideCurrentGuidedItemShadowIfAllowed();

        currentlyGuidedItem = null;
        ShowHandTutorial();
    }

    private void HideCurrentGuidedItemShadowIfAllowed()
    {
        if (currentlyGuidedItem == null || currentlyGuidedItem.shadowOnHolder == null)
        {
            return;
        }

        if (currentlyGuidedItem.keepShadowVisibleWhenWaiting)
        {
            return;
        }

        currentlyGuidedItem.shadowOnHolder.gameObject.SetActive(false);
    }

    private void ShowHandTutorial()
    {
        if (isTutorialActive) return;

        // Ưu tiên hướng dẫn cho item nếu có
        // Get the main camera. If not available, we can't check viewport visibility.
        Camera mainCamera = Camera.main;
        if (mainCamera == null)
        {
            Debug.LogWarning("GameManager: Main Camera not found. Cannot determine item visibility for tutorial.");
            return;
        }

        // Filter visible items from the tutorialItems list
        List<Item> visibleTutorialItems = new List<Item>();
        foreach (var item in tutorialItems)
        {
            if (item != null)
            {
                Vector3 viewportPoint = mainCamera.WorldToViewportPoint(item.transform.position);
                // Check if the item is within the viewport (0 to 1 for x and y) and in front of the camera (z > 0)
                if (viewportPoint.x >= 0 && viewportPoint.x <= 1 &&
                    viewportPoint.y >= 0 && viewportPoint.y <= 1 &&
                    viewportPoint.z > 0)
                {
                    visibleTutorialItems.Add(item);
                }
            }
        }

        if (visibleTutorialItems.Count > 0)
        {
            isTutorialActive = true;

            Item itemToGuide = null;
            int maxOrder = -1;
            // Find the visible item with the highest sorting order
            foreach (var item in visibleTutorialItems)
            {
                // Ưu tiên item có sortingOrder cao nhất
                if (item.spriteRenderer != null && item.spriteRenderer.sortingOrder > maxOrder && item.CanPlaced())
                {
                    maxOrder = item.spriteRenderer.sortingOrder;
                    itemToGuide = item;
                }
            }

            if (itemToGuide != null && itemToGuide.correctHolderTransform != null && handTutorial != null)
            {
                currentlyGuidedItem = itemToGuide; // Lưu lại item đang được hướng dẫn

                // Bật shadow hint ở holder
                if (itemToGuide.shadowOnHolder != null)
                {
                    itemToGuide.shadowOnHolder.gameObject.SetActive(true);
                }

                handTutorial.SetActive(true);
                handTutorial.transform.position = itemToGuide.transform.position;

                var sequence = DOTween.Sequence();
                sequence.Append(handTutorial.transform.DOMove(itemToGuide.correctHolderTransform.position, 1.5f).SetEase(Ease.InOutSine));
                sequence.AppendInterval(0.5f);
                sequence.SetLoops(-1, LoopType.Restart).SetId("handTutorial");
            }
            else // No item to guide, or missing correctHolderTransform/handTutorial
            {
                isTutorialActive = false; // Không có gì để hướng dẫn, reset lại
            }
        }
        // Nếu không có item, hướng dẫn bấm vào hộp
        else if (mainBox != null && mainBox.HasItems())
        {
            isTutorialActive = true;
            handTutorial.SetActive(true);
            handTutorial.transform.position = mainBox.transform.position + new Vector3(0.5f, -0.5f, 0);

            var sequence = DOTween.Sequence();
            sequence.Append(handTutorial.transform.DOScale(0.8f, 0.3f).SetEase(Ease.InOutSine));
            sequence.Append(handTutorial.transform.DOScale(1f, 0.3f).SetEase(Ease.InOutSine));
            sequence.SetLoops(-1, LoopType.Yoyo).SetId("handTutorial");
        }
        else
        {
            // No visible items and no items in the box, so no tutorial to show.
            isTutorialActive = false;
            handTutorial.SetActive(false);
        }
    }

    #endregion
}
