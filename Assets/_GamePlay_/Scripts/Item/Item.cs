using System;
using UnityEngine;
using DG.Tweening;

public class Item : MonoBehaviour
{
    public enum PlaceSoundType {Decor,Wooden,Plant,Mental,Silk,HeavyWooden,Clock,Girl,Wolf}
    public PlaceSoundType placeSoundType;
    public int id; // Đã đổi sang int
    public ItemState currentState;
    public LayerMask itemHolderLayer;

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

    private void Start()
    {
        mainCam = Camera.main;
        originalScale = Vector3.one;
        if (tf == null) tf = transform;
        originalRotation = tf.rotation;
        currentState = ItemState.Waitting;
        itemHolderLayer = InputManager.Ins.targetLayer;
    }

    public void ChangeState(ItemState newState)
    {
        currentState = newState;
    }

    public void SetSortingOrder(int order)
    {
        if (spriteRenderer != null)
        {
            spriteRenderer.sortingOrder = order;
        }
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
        ChangeState(ItemState.OnDrag);
        tf.DOScale(originalScale * 1.2f, 0.2f).SetEase(Ease.OutBack);
        tf.DORotate(new Vector3(0, 0, 0), 0.2f); 

        if (canShowShadowHint && shadowOnHolder != null)
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
        tf.DOScale(originalScale, 0.2f).SetEase(Ease.OutBack);
        
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
                GameManager.Ins.OnItemPlaced();
                PlaceSound(placeSoundType);
                tf.DOMove(holder.transform.position, 0.2f)
                         .SetEase(Ease.OutCubic)
                         .OnComplete(() =>
                         {
                             SetSortingOrder(this.id);
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
            tf.DOMoveY(tf.position.y + 0.3f, 1.5f).SetEase(Ease.InOutSine).SetLoops(-1, LoopType.Yoyo);
            tf.DORotateQuaternion(originalRotation, 0.3f);
        }
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