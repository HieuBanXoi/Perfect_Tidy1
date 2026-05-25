using UnityEngine;
using DG.Tweening;
using System.Collections.Generic;

public class Box : MonoBehaviour
{
    [Header("Components")]
    [SerializeField] private BoxGraphicController graphicController;

    [Header("Item Spawning")]
    [Tooltip("Các vật phẩm động sẽ bay ra từ hộp.")]
    public List<Item> dynamicItems;
    [Tooltip("Các vị trí mà vật phẩm sẽ bay đến.")]
    public List<Transform> spawnTargets;

    private int currentItemIndex = 0;
    private bool isOpened = false;

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

        graphicController.ChangeAnim("0-Drop", false, () => {
            graphicController.ChangeAnim("1-ready-Loop", true);
            GameManager.Ins.TriggerTutorial();
        });
    }

    public void OnClicked()
    {
        Debug.Log("OnClick");
        Ply_SoundManager.Ins.PlayFx(FxType.Click);
        GameManager.Ins.ResetInactivityTimer();

        if (!isOpened)
        {
            UIManager.Ins.ZoomInCamera();
            isOpened = true;
            graphicController.ChangeAnim("2-OPEN", false, () => {
                SpawnNextItem();
                graphicController.ChangeAnim("3-OPEN-click", false, () => {
                    graphicController.ChangeAnim("3-OPEN-loop-break", true);
                });
            });
        }
        else
        {
            if (currentItemIndex < dynamicItems.Count && spawnTargets.Count > 0)
            {
                graphicController.ChangeAnim("3-OPEN-click", false, () => {
                    if (currentItemIndex >= dynamicItems.Count)
                    {
                        Debug.Log("End");
                        graphicController.ChangeAnim("4-End", false,() => {
                            gameObject.SetActive(false);
                        });
                    }
                    else
                    {
                        graphicController.ChangeAnim("3-OPEN-loop", true);
                    }
                });
                SpawnNextItem();
            }
        }
    }

    public bool HasItems()
    {
        return currentItemIndex < dynamicItems.Count;
    }

    private void SpawnNextItem()
    {
        if (currentItemIndex >= dynamicItems.Count || spawnTargets.Count == 0) return;

        Item itemComponent = dynamicItems[currentItemIndex];
        if (itemComponent == null)
        {
            currentItemIndex++;
            return;
        }
        
        bool isFirstItem = (currentItemIndex == 0);

        int randomIndex = Random.Range(0, spawnTargets.Count);
        Transform targetTransform = spawnTargets[randomIndex];
        Transform itemToSpawn = itemComponent.transform;
        itemToSpawn.position = this.transform.position; 
        itemToSpawn.localScale = Vector3.zero; 
        itemToSpawn.gameObject.SetActive(true);

        Collider itemCollider = ComponentCache<Collider>.Get(itemToSpawn);

        if (itemCollider != null)
        {
            itemCollider.enabled = false;
        }

        itemComponent.canShowShadowHint = (currentItemIndex < 3);
        itemComponent.waitingPosition = targetTransform.position;
        itemComponent.SetSortingOrder(GameManager.Ins.currentLayer);
        GameManager.Ins.AddItemToTutorial(itemComponent);
        GameManager.Ins.currentLayer++;

        itemToSpawn.DOJump(targetTransform.position,0.5f,1, 0.4f).SetEase(Ease.OutQuad);
        itemToSpawn.DOScale(Vector3.one, 0.4f).SetEase(Ease.OutBack).OnComplete(() => {
            if (itemCollider != null)
            {
                itemCollider.enabled = true;
            }
            if (isFirstItem) {
                GameManager.Ins.TriggerTutorial();
            }
            itemToSpawn.DOMoveY(itemToSpawn.position.y + 0.3f, 1.5f).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
        });

        currentItemIndex++;
    }
}
