using System;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;

public class Item : MonoBehaviour
{
    public enum PlaceSoundType {Decor,Wooden,Plant,Mental,Silk,HeavyWooden,Clock,Girl,Wolf,Char1,Char2,Star,Blanket}
    public PlaceSoundType placeSoundType;
    public int id; // Đã đổi sang int
    public ItemState currentState;
    public LayerMask itemHolderLayer;

    [Header("Spawn Scale")]
    public bool scaleOnSpawn = false;
    public float spawnScaleMultiplier = 1.25f;

    [NonSerialized]
    public Transform tf;
    private Camera mainCam;
    private float zCoord;
    private Vector3 offset;
    private Vector3 originalScale;
    public Transform correctHolderTransform;
    public Transform shadowOnHolder;
    public bool canShowShadowHint = true;
    public Vector3 waitingPosition;
    private Quaternion originalRotation;

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
        Ply_SoundManager.Ins.PlayFx(FxType.Pop);
        tf.DOKill();
        GameManager.Ins.ResetInactivityTimer();
        ApplyChildSortingOffset();
        ChangeState(ItemState.OnDrag);
        tf.DOScale(originalScale * 1.2f, 0.2f).SetEase(Ease.OutBack);
        tf.DORotate(new Vector3(0, 0, 0), 0.2f); 

        if (shadowOnHolder != null)
        {
            shadowOnHolder.gameObject.SetActive(true);
        }
        
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

            if (holder != null && holder.id == this.id)
            {
                isPlaced = true;
                ChangeState(ItemState.MoveToCorrectPos);
                GameManager.Ins.OnItemPlaced(this);
                PlaceSound(placeSoundType);
                tf.DOScale(Vector3.one, 0.2f).SetEase(Ease.OutBack);
                tf.DOMove(holder.transform.position, 0.2f)
                         .SetEase(Ease.OutCubic)
                         .OnComplete(() =>
                         {
                             RestoreDefaultSorting();
                            SpawnVFX();
                             if (shadowOnHolder != null)
                             {
                                 shadowOnHolder.gameObject.SetActive(true);
                             }

                             GameManager.Ins.RemoveItemFromTutorial(this);

                             

                             ChangeState(ItemState.OnGoal);
                         });

                tf.DORotate(holder.transform.rotation.eulerAngles, 0.5f);
                break;
            }
        }

        if (!isPlaced)
        {

            if (shadowOnHolder != null)
            {
                shadowOnHolder.gameObject.SetActive(false);
            }

            ChangeState(ItemState.Waitting);
            tf.DOScale(originalScale, 0.2f).SetEase(Ease.OutBack);
            tf.DOMoveY(tf.position.y + 0.3f, 1.5f).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
            tf.DORotateQuaternion(originalRotation, 0.3f);
        }
    }

    private void ApplyChildSortingOffset()
    {
        EnsureDefaultSortingOrder();
        CacheChildSortingOrders();

        if (spriteRenderer == null || childSpriteRenderers == null)
        {
            return;
        }

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

        if (!hasCachedChildSortingOrders || childSpriteRenderers == null)
        {
            return;
        }

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
        if (hasCachedChildSortingOrders)
        {
            return;
        }

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
        if (hasDefaultSortingOrder)
        {
            return;
        }

        defaultOrderLayer = id;
        hasDefaultSortingOrder = true;
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

    public void PlaceSound(PlaceSoundType type)
    {
        switch (type)
        {
            case PlaceSoundType.Decor:
            Ply_SoundManager.Ins.PlayFx(FxType.Decor);
                break;
            case PlaceSoundType.Wooden:
            Ply_SoundManager.Ins.PlayFx(FxType.Wooden);
                break;
            case PlaceSoundType.Plant:
            Ply_SoundManager.Ins.PlayFx(FxType.Plant);
                break;
            case PlaceSoundType.Mental:
            Ply_SoundManager.Ins.PlayFx(FxType.Mental);
                break;
            case PlaceSoundType.Silk:
            Ply_SoundManager.Ins.PlayFx(FxType.Silk);
                break;
            case PlaceSoundType.HeavyWooden:
            Ply_SoundManager.Ins.PlayFx(FxType.HeavyWooden);
                break;
            case PlaceSoundType.Clock:
            Ply_SoundManager.Ins.PlayFx(FxType.Clock);
                break;
            case PlaceSoundType.Girl:
            Ply_SoundManager.Ins.PlayFx(FxType.Girl);
                break;
            case PlaceSoundType.Wolf:
            Ply_SoundManager.Ins.PlayFx(FxType.Wolf);
                break;
            case PlaceSoundType.Char1:
            Ply_SoundManager.Ins.PlayFx(FxType.Char1);
                break;
            case PlaceSoundType.Char2:
            Ply_SoundManager.Ins.PlayFx(FxType.Char2);
                break;
            case PlaceSoundType.Star:
            Ply_SoundManager.Ins.PlayFx(FxType.Star);
                break;
            case PlaceSoundType.Blanket:
            Ply_SoundManager.Ins.PlayFx(FxType.Blanket);
                break;
            default:
                break;
        }
    }
    
    public void SpawnVFX()
    {
        MergeEffect mergeEffect = Ply_Pool.Ins.Spawn<MergeEffect>(PoolType.MergeVFX,tf.position,tf.rotation);
        mergeEffect.DeSpawnByTime();
    }
}

public enum ItemState
{
    Waitting,
    OnDrag,
    MoveToCorrectPos,
    OnGoal
}
