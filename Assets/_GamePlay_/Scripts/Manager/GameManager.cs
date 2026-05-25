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
    public int countMove = 0;
    public int currentLayer; // Lớp sorting order cao nhất hiện tại

    [Header("Components")]
    public Box mainBox;

    [Header("Tutorial")]
    public GameObject handTutorial;
    public float tutorialDelay = 5f;
    private List<Item> tutorialItems = new List<Item>();
    private float inactivityTimer;
    private Item currentlyGuidedItem = null;
    private bool isTutorialActive = false;
    private int totalDynamicItems;
    private int placedItemCount = 0;

    private void Start()
    {
        ChangeState(new OnPlayState());
        currentLayer = 2000; // Khởi tạo lớp sorting order ban đầu
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
        if (!isTutorialActive && isPlaying && !InputManager.Ins.isDragging)
        {
            inactivityTimer += Time.deltaTime;
            if (inactivityTimer >= tutorialDelay) ShowHandTutorial();
        }
    }
    public void ChangeState(IGameState newState)
    {
        currentState?.OnExit(this);

        currentState = newState;

        currentState?.OnEnter(this);
        Debug.Log("ChangeState: "+ currentState.ToString());
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
        if(countMove == 100)
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
            isTutorial= false;
        }
    }
    public void WinGame()
    {
        ChangeState(new WinState());
    }
    public void LoseGame()
    {
        ChangeState(new LoseState());
    }

    public void OnItemPlaced()
    {
        placedItemCount++;
        if (UIManager.Ins != null)
        {
            UIManager.Ins.UpdateProgress();
        }

        if (placedItemCount == 8)
        {
            LoseGame();
            return;
        }

        if (placedItemCount >= totalDynamicItems)
        {
            WinGame();
        }
    }

    #region Tutorial Methods

    public void TriggerTutorial()
    {
        if (isTutorialActive || !isPlaying) return;
        inactivityTimer = tutorialDelay;
    }

    public void AddItemToTutorial(Item item)
    {
        if (!tutorialItems.Contains(item))
        {
            tutorialItems.Add(item);
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
            if (currentlyGuidedItem != null && currentlyGuidedItem.shadowOnHolder != null)
            {
                // Tắt shadow hint của item vừa được hướng dẫn
                currentlyGuidedItem.shadowOnHolder.gameObject.SetActive(false);
            }
            currentlyGuidedItem = null; // Clear reference
        }
    }

    private void ShowHandTutorial()
    {
        if (isTutorialActive) return;

        // Ưu tiên hướng dẫn cho item nếu có
        if (tutorialItems.Count > 0)
        {
            isTutorialActive = true;

            Item itemToGuide = null;
            int maxOrder = -1;
            for (int i = 0; i < tutorialItems.Count; i++)
            {
                var item = tutorialItems[i];
                // Ưu tiên item có sortingOrder cao nhất
                if (item.spriteRenderer != null && item.spriteRenderer.sortingOrder > maxOrder)
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
            else
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
    }

    #endregion
}
