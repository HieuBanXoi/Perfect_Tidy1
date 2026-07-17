using System;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class Item : MonoBehaviour
{
    public FxType fxTypeOnPlace;
    public int id;
    public ItemState currentState;
    public LayerMask itemHolderLayer;
    public GameObject defaultShadow;

    [Header("Drop Settings")]
    [Tooltip("Bật để vật phẩm bay về slot/vị trí cũ khi thả trượt. Tắt để rớt tại chỗ.")]
    public bool returnToSlotOnMiss = false;
    public bool hideShadowOnDrop = false;

    [Header("Spawn Scale")]
    public bool scaleOnSpawn = false;
    public float spawnScaleMultiplier = 1.25f;
    [Header("RequiredItems")]
    public List<Item> requiredItems;


    [NonSerialized]
    public Transform tf;
    private Camera mainCam;
    private float zCoord;
    private Vector3 offset;
    private Vector3 originalScale;
    
    public Transform correctHolderTransform;
    public Transform shadowOnHolder;
    public bool canShowShadowHint = true;
    
    [NonSerialized]
    public bool keepShadowVisibleWhenWaiting = false;
    [NonSerialized]
    public int dynamicItemIndex = -1;
    
    public Transform homeSlot; // Ghi nhớ vị trí gốc (trên Box hoặc Conveyor)
    public Vector3 waitingPosition;
    private Quaternion originalRotation;
    private Animator itemAnimator;
    private bool hasCachedAnimator;

    [Header("Sorting Layer Settings")]
    public SpriteRenderer spriteRenderer; 
    private int defaultOrderLayer; 
    private SpriteRenderer[] childSpriteRenderers;
    private int[] defaultChildSortingOrders;
    private bool hasCachedChildSortingOrders;
    private bool hasDefaultSortingOrder;

    private void Start()
    {
        mainCam = Camera.main;
        originalScale = GetWaitingScale();
        if (tf == null) tf = transform;
        originalRotation = tf.rotation;
        currentState = ItemState.Waitting;
        itemHolderLayer = InputManager.Ins.targetLayer;
        defaultOrderLayer = id;
        hasDefaultSortingOrder = true;
    }

    public void ChangeState(ItemState newState)
    {
        currentState = newState;
    }

    public Vector3 GetWaitingScale()
    {
        return scaleOnSpawn ? Vector3.one * spawnScaleMultiplier : Vector3.one;
    }

    public void ApplySpawnScale()
    {
        if (tf == null)
        {
            tf = transform;
        }

        originalScale = GetWaitingScale();
        tf.localScale = originalScale;
    }

    public void DisableAnimatorOnSpawn()
    {
        EnsureAnimator();
        if (itemAnimator != null)
        {
            itemAnimator.enabled = false;
        }
    }

    private void EnableAnimatorWhenPlaced()
    {
        EnsureAnimator();
        if (itemAnimator != null)
        {
            itemAnimator.enabled = true;
        }
    }

    public void SetSortingOrder(int order)
    {
        EnsureDefaultSortingOrder();
        if (spriteRenderer != null)
        {
            spriteRenderer.sortingOrder = order;
        }
        ApplyChildSortingOffset();
    }

    private void Update()
    {
        switch (currentState)
        {
            case ItemState.Waitting: Waitting(); break;
            case ItemState.OnDrag: OnDrag(); break;
            case ItemState.MoveToCorrectPos: MoveToCorrectPos(); break;
            case ItemState.OnGoal: OnGoal(); break;
        }
    }

    public void StartDrag()
    {
        Ply_SoundManager.Ins.PlayFx(FxType.Click);

        transform.SetParent(null); // Gỡ khỏi cha (conveyor/box) để kéo mượt trên màn hình
        tf.DOKill();
        GameManager.Ins.ResetInactivityTimer();

        // --- LOGIC MỚI: HIỆN SHADOW KHI KÉO ---
        if (ItemSpawnManager.Ins != null)
        {
            int limit = ItemSpawnManager.Ins.showShadowOnDragCount;
            bool canShowShadow = false;

            // -1 nghĩa là hiện cho tất cả.
            // Các giá trị > 0 sẽ chỉ hiện cho N item đầu tiên.
            if (limit < 0) 
            {
                canShowShadow = true;
            }
            else if (limit > 0 && dynamicItemIndex >= 0 && dynamicItemIndex < limit)
            {
                canShowShadow = true;
            }

            if (canShowShadow && shadowOnHolder != null)
            {
                shadowOnHolder.gameObject.SetActive(true);
            }
        }
        // -----------------------------------------

        ApplyChildSortingOffset();
        ChangeState(ItemState.OnDrag);
        tf.DOScale(originalScale * 1.2f, 0.2f).SetEase(Ease.OutBack);
        tf.DORotate(new Vector3(0, 0, 0), 0.2f); 

        zCoord = mainCam.WorldToScreenPoint(tf.position).z;
        offset = tf.position - GetMouseWorldPos();
    }

    private void OnDrag()
    {
        tf.position = GetMouseWorldPos() + offset;

        if (Input.GetMouseButtonUp(0))
        {
            ReleaseItem();
        }
    }

    private void ReleaseItem()
    {
        if (InputManager.Ins != null) 
            InputManager.Ins.isDragging = false;

        Ray ray = mainCam.ScreenPointToRay(Input.mousePosition);
        RaycastHit[] hits = Physics.RaycastAll(ray, 100f, itemHolderLayer);

        bool isPlaced = false;

        for (int i = 0; i < hits.Length; i++)
        {
            RaycastHit hit = hits[i];
            ItemHolder holder = hit.collider.GetComponent<ItemHolder>();

            if (holder != null && CanPlaced() && holder.id == this.id )
            {
                isPlaced = true;
                ChangeState(ItemState.MoveToCorrectPos);
                GameManager.Ins.OnItemPlaced(this);
                PlaySoundOnPlace();

                // --- GỌI BOX SPAWN ITEM MỚI VÀO SLOT TRỐNG ---
                if (homeSlot != null)
                {
                    ItemSpawnManager box = ItemSpawnManager.Ins;
                    if (box != null)
                    {
                        box.SpawnNextItemToVacatedTarget(homeSlot.position);
                    }
                    homeSlot = null; // Huỷ liên kết để tránh gọi trùng lặp
                }
                // ----------------------------------------------

                tf.DOScale(Vector3.one, 0.2f).SetEase(Ease.OutBack);
                tf.DOMove(holder.transform.position, 0.2f)
                         .SetEase(Ease.OutCubic)
                         .OnComplete(() =>
                         {
                             RestoreDefaultSorting();
                             SpawnVFX();
                             EnableAnimatorWhenPlaced();
                             if (shadowOnHolder != null && !hideShadowOnDrop)
                             {
                                 shadowOnHolder.gameObject.SetActive(true);
                             }
                             else
                             {
                                 shadowOnHolder.gameObject.SetActive(false);
                                 
                             }

                             GameManager.Ins.RemoveItemFromTutorial(this);

                            if(defaultShadow != null)
                             {
                                 defaultShadow.SetActive(true);
                             }
                             ChangeState(ItemState.OnGoal);

                             // Hiệu ứng nảy nhẹ khi đặt thành công
                             tf.DOPunchScale(new Vector3(0.1f, -0.1f, 0.2f), 0.3f, 10, 1);
                         });

                tf.DORotate(holder.transform.rotation.eulerAngles, 0.5f);
                break;
            }
        }

        if (!isPlaced)
        {
            if (shadowOnHolder != null && !keepShadowVisibleWhenWaiting)
            {
                shadowOnHolder.gameObject.SetActive(false);
            }

            ChangeState(ItemState.Waitting);
            tf.DOScale(originalScale, 0.2f).SetEase(Ease.OutBack);
            tf.DORotateQuaternion(originalRotation, 0.3f);

            // Bắn tia kiểm tra xem vị trí thả chuột có nằm trên Conveyor không
            bool isOverConveyor = false;
            
                isOverConveyor = Physics.Raycast(ray, 100f, InputManager.Ins.conveyorLayer);
            

            // ĐIỀU KIỆN MỚI: Chỉ return khi returnToSlotOnMiss là TRUE VÀ thả trúng vùng Conveyor
            if (returnToSlotOnMiss && isOverConveyor)
            {
                // Quay về đúng slot và bám theo di chuyển (đặt target là cha)
                if (homeSlot != null)
                {
                    tf.SetParent(homeSlot, true); // Đặt lại cha để bám theo
                    tf.DOLocalMove(Vector3.zero, 0.2f).SetEase(Ease.OutCubic).OnComplete(() => {
                        tf.DOMoveY(homeSlot.position.y + 0.3f, 1.5f).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
                    });
                }
                else
                {
                    tf.DOMove(waitingPosition, 0.2f).SetEase(Ease.OutCubic).OnComplete(() => {
                        tf.DOMoveY(waitingPosition.y + 0.3f, 1.5f).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
                    });
                }
            }
            else
            {
                // KHÔNG RETURN: Rớt tại chỗ thả
                // Kích hoạt khi thả ngoài Conveyor HOẶC returnToSlotOnMiss = false
                tf.SetParent(null); // Gỡ khỏi cha cũ để nằm độc lập ngoài không gian
                tf.DOMoveY(tf.position.y + 0.3f, 1.5f).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
            }
        }
    }
    public bool CanPlaced()
    {
        for(int i = 0; i < requiredItems.Count; i++)
        {
            if(requiredItems[i].currentState != ItemState.OnGoal)
            {
                return false;
            }
        }
            
        return true;
    }
    private void ApplyChildSortingOffset()
    {
        EnsureDefaultSortingOrder();
        CacheChildSortingOrders();

        if (spriteRenderer == null || childSpriteRenderers == null) return;

        int orderOffset = spriteRenderer.sortingOrder - defaultOrderLayer;
        for (int i = 0; i < childSpriteRenderers.Length; i++)
        {
            if (childSpriteRenderers[i] != null)
            {
                childSpriteRenderers[i].sortingOrder = defaultChildSortingOrders[i] + orderOffset;
            }
        }
    }

    private void RestoreDefaultSorting()
    {
        EnsureDefaultSortingOrder();
        SetSortingOrder(defaultOrderLayer);

        if (!hasCachedChildSortingOrders || childSpriteRenderers == null) return;

        for (int i = 0; i < childSpriteRenderers.Length; i++)
        {
            if (childSpriteRenderers[i] != null)
            {
                childSpriteRenderers[i].sortingOrder = defaultChildSortingOrders[i];
            }
        }
    }

    private void CacheChildSortingOrders()
    {
        if (hasCachedChildSortingOrders) return;

        List<SpriteRenderer> children = new List<SpriteRenderer>();
        SpriteRenderer[] renderers = GetComponentsInChildren<SpriteRenderer>(true);

        for (int i = 0; i < renderers.Length; i++)
        {
            if (renderers[i] != null && renderers[i] != spriteRenderer)
            {
                children.Add(renderers[i]);
            }
        }

        childSpriteRenderers = children.ToArray();
        defaultChildSortingOrders = new int[childSpriteRenderers.Length];

        for (int i = 0; i < childSpriteRenderers.Length; i++)
        {
            defaultChildSortingOrders[i] = childSpriteRenderers[i].sortingOrder;
        }

        hasCachedChildSortingOrders = true;
    }

    private void EnsureDefaultSortingOrder()
    {
        if (hasDefaultSortingOrder) return;
        defaultOrderLayer = id;
        hasDefaultSortingOrder = true;
    }

    private void EnsureAnimator()
    {
        if (hasCachedAnimator) return;
        itemAnimator = GetComponent<Animator>();
        hasCachedAnimator = true;
    }

    private Vector3 GetMouseWorldPos()
    {
        Vector3 mousePoint = Input.mousePosition;
        mousePoint.z = zCoord;
        return mainCam.ScreenToWorldPoint(mousePoint);
    }

    private void OnGoal()
    {
        gameObject.layer = LayerMask.NameToLayer("Default");
        Collider col = ComponentCache<Collider>.Get(tf);
        if (col != null) col.enabled = false;
        enabled = false; 
    }

    private void MoveToCorrectPos() { }
    private void Waitting() { }
    
    public void SpawnVFX()
    {
        MergeEffect mergeEffect = Ply_Pool.Ins.Spawn<MergeEffect>(PoolType.MergeVFX, tf.position, tf.rotation);
        mergeEffect.DeSpawnByTime();
    }
    // public void SpawnVFX()
    // {
    //     BlinkEffect blinkEffect = Ply_Pool.Ins.Spawn<BlinkEffect>(PoolType.BlinkFX, tf.position, tf.rotation);
    //     blinkEffect.DeSpawnByTime();
    // }
    
    public void PlaySoundOnPlace()
    {
        Ply_SoundManager.Ins.PlayFx(fxTypeOnPlace);
    }
}

public enum ItemState
{
    Waitting,
    OnDrag,
    MoveToCorrectPos,
    OnGoal
}