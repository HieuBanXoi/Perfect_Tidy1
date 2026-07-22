using UnityEngine;
using UnityEngine.Events;
using DG.Tweening;

[RequireComponent(typeof(Collider))] // Chuyển sang Collider 3D
public class ItemDraggable : MonoBehaviour
{
    [Header("--- CÀI ĐẶT DRAG 3D ---")]
    public bool isDraggable = true;
    public Transform returnTransform;
    public bool setParentToReturnTransform = true;
    public bool returnToStartOnDragFailed = true;
    public bool returnToExactReturnTransformPosition = true;
    public ItemType targetItemType;
    public Item item;
    public bool checkState = false;
    public GameObject shadowObject;

    [Header("--- RETURN TO START SOUND ---")]
    public bool playReturnToStartFinishSound = false;
    public FxType returnToStartFinishFxType = FxType.Failed;
    public bool spawnBreakHeartOnDropFail = true;

    [Header("--- BEGIN DRAG SOUND ---")]
    public bool playBeginDragSound = true;
    public FxType beginDragFxType = FxType.Click;

    [Tooltip("Khi nhấc lên, vật sẽ nhích lại gần Camera (hoặc bay cao lên) bao nhiêu để không kẹt vào bàn?")]
    public float liftOffset = 1.0f;

    [Header("--- DRAG SCALE ---")]
    [Tooltip("Nhân với scale gốc khi bắt đầu kéo vật phẩm.")]
    public float dragScaleMultiplier = 1.1f;
    public float dragScaleDuration = 0.15f;

    [Header("--- SỰ KIỆN ---")]
    public UnityEvent onBeginDrag;
    public UnityEvent onDropSuccess;
    public UnityEvent onDropFail;
    public UnityEvent onReturnToStartComplete;

    private Transform originalParent;
    private Vector3 originalLocalPos;
    private Vector3 originalScale;
    private float originalZ;
    private Vector3 offset;
    private float zCoord;
    private Camera mainCam;
    private Collider myCollider;
    private Ply_BobEffect bobEffect;
    private bool shadowDefaultActive;
    private Tween scaleTween;
    private bool hasOriginalScale;
    private bool spawnHeartOnReturnComplete = true;
    private bool consumeCurrentDropFail;
    private bool isForceReturningToStart;
    private bool isDraggingSession;
    private bool isReturningToStart;
    private ItemDragChildRotator itemDragChildRotator;

    public bool IsDragging => isDraggingSession;
    public bool IsReturningToStart => isReturningToStart;


    void Start()
    {
        item = ComponentCache<Item>.Get(transform);
        mainCam = Camera.main;
        myCollider = ComponentCache<Collider>.Get(transform);
        itemDragChildRotator = ComponentCache<ItemDragChildRotator>.Get(transform);
        bobEffect = ComponentCache<Ply_BobEffect>.Get(transform);
        originalParent = transform.parent;
        originalLocalPos = transform.localPosition;
        originalScale = transform.localScale;
        hasOriginalScale = true;
        originalZ = transform.position.z;
        if (shadowObject != null)
        {
            shadowDefaultActive = shadowObject.activeSelf;
        }
    }

    public void ReturnToStart()
    {
        ReturnToStart(true);
    }

    public void ReturnToStartWithoutHeart()
    {
        ReturnToStart(false);
    }

    public void ForceDropFailReturnToStart(bool spawnHeart)
    {
        if (isForceReturningToStart) return;

        isForceReturningToStart = true;
        isDraggingSession = false;
        ResetScale();
        onDropFail?.Invoke();
        ReturnToStart(spawnHeart);
    }

    public void ReturnToStart(bool spawnHeart)
    {
        Tween returnTween = null;
        spawnHeartOnReturnComplete = spawnHeart;
        isReturningToStart = true;

        transform.DOKill();

        if (bobEffect != null && bobEffect.isActiveAndEnabled)
        {
            bobEffect.Stop(false);
        }

        if (returnTransform != null)
        {
            if (setParentToReturnTransform)
            {
                Vector3 worldScaleBeforeParentChange = transform.lossyScale;
                transform.SetParent(returnTransform);
                SetWorldScale(transform, worldScaleBeforeParentChange);
                Vector3 localTargetPos = returnToExactReturnTransformPosition ? Vector3.zero : new Vector3(0, 0, originalLocalPos.z);
                returnTween = transform.DOLocalMove(localTargetPos, 0.3f).SetEase(Ease.OutQuart);
            }
            else
            {
                Vector3 targetPos = returnToExactReturnTransformPosition ? returnTransform.position : new Vector3(returnTransform.position.x, returnTransform.position.y, originalZ);
                Debug.Log(targetPos);
                returnTween = transform.DOMove(targetPos, 0.3f).SetEase(Ease.OutQuart);
            }
        }
        else if (originalParent != null)
        {
            transform.SetParent(originalParent); // Đưa về parent gốc ngay để bám theo băng chuyền
            returnTween = transform.DOLocalMove(originalLocalPos, 0.3f).SetEase(Ease.OutQuart);
        }
        else
        {
            Vector3 targetPos = transform.position;
            targetPos.z = originalZ;
            returnTween = transform.DOMove(targetPos, 0.3f).SetEase(Ease.OutQuart);
        }

        returnTween?.OnComplete(OnReturnToStartComplete);
    }
    public void CacheOriginalPos()
    {
        originalParent = transform.parent;
        originalLocalPos = transform.localPosition;
        originalScale = transform.localScale;
        hasOriginalScale = true;
        originalZ = transform.position.z;
    }
    public void TeleportToStart()
    {
        isReturningToStart = false;
        transform.DOKill();

        if (bobEffect != null && bobEffect.isActiveAndEnabled)
        {
            bobEffect.Stop(false);
        }

        ResetScale();
        itemDragChildRotator?.ResetToOriginalRotation();

        SetShadowActive(shadowDefaultActive);

        if (returnTransform != null)
        {
            if (setParentToReturnTransform)
            {
                Vector3 worldScaleBeforeParentChange = transform.lossyScale;
                transform.SetParent(returnTransform);
                SetWorldScale(transform, worldScaleBeforeParentChange);
                transform.localPosition = returnToExactReturnTransformPosition ? Vector3.zero : new Vector3(0, 0, originalLocalPos.z);
            }
            else
            {
                transform.position = returnToExactReturnTransformPosition ? returnTransform.position : new Vector3(returnTransform.position.x, returnTransform.position.y, originalZ);
            }
        }
        else if (originalParent != null)
        {
            transform.SetParent(originalParent);
            transform.localPosition = originalLocalPos;
        }
        else
        {
            Vector3 targetPos = transform.position;
            targetPos.z = originalZ;
            transform.position = targetPos;
        }

        PlayBobEffectIfEnabled();
    }

    public void RefreshDragParentContext()
    {
        originalParent = transform.parent;
        originalLocalPos = transform.localPosition;
        originalScale = transform.localScale;
        hasOriginalScale = true;
        originalZ = transform.position.z;
        if (shadowObject != null)
        {
            shadowDefaultActive = shadowObject.activeSelf;
        }
    }

    public bool BeginDrag()
    {
        if (!CanDrag()) return false;

        transform.DOKill(); // Dừng tween bay về nếu người chơi cầm lại vật thể giữa chừng

        // Cập nhật lại originalScale trước khi kéo để lấy đúng scale hiện tại,
        // đặc biệt trong trường hợp scale đã bị thay đổi (ví dụ: flip) bởi animation hoặc script khác.
        if (hasOriginalScale) {
            originalScale = transform.localScale;
        }

        PlayDragScale();

        SetShadowActive(false);

        PlayBeginDragSound();

        Vector3 worldScaleBeforeParentChange = transform.lossyScale;
        transform.SetParent(originalParent);
        SetWorldScale(transform, worldScaleBeforeParentChange);

        zCoord = mainCam.WorldToScreenPoint(transform.position).z;
        transform.position += mainCam.transform.forward * -liftOffset;

        // Ép Z của vật thể lên -5 thay vì dùng liftOffset
        Vector3 pos = transform.position;
        pos.z = -7f;
        transform.position = pos;

        offset = transform.position - GetMouseWorldPos();
        isDraggingSession = true;
        onBeginDrag?.Invoke();
        return true;
    }

    public void Drag()
    {
        if (!CanDrag() || !isDraggingSession) return;
        transform.position = GetMouseWorldPos() + offset;
        Vector3 newPos = GetMouseWorldPos() + offset;
        newPos.z = -7f; // Đảm bảo vật thể luôn giữ ở mức Z = -5 trong suốt quá trình kéo
        transform.position = newPos;
    }

    public void EndDrag()
    {
        if (!CanDrag() || !isDraggingSession) return;

        isDraggingSession = false;

        consumeCurrentDropFail = false;

        // Nếu targetItemType là None thì bất kể trường hợp nào đều trả về vị trí bắt đầu (treat as drop fail)
        if (targetItemType == ItemType.None)
        {
            ResetScale();
            onDropFail?.Invoke();
            if (!consumeCurrentDropFail)
            {

                if (returnToStartOnDragFailed)
                {
                    ReturnToStart(spawnBreakHeartOnDropFail);
                }
                else
                {
                    Vector3 currentPos = transform.position;
                    currentPos.z += 1f;
                    transform.position = currentPos;
                    FinalizeFailedDrag(spawnBreakHeartOnDropFail);
                }
            }
            else
            {
                SetShadowActive(shadowDefaultActive);
            }

            return;
        }

        myCollider.enabled = false; // Tắt collider của mình để tia xuyên qua

        Ray ray = mainCam.ScreenPointToRay(Input.mousePosition);
        RaycastHit[] hits = Physics.RaycastAll(ray, 100f);
        bool isHitValid = false;

        Item targetItem = null;
        for (int i = 0; i < hits.Length; i++)
        {
            targetItem = ComponentCache<Item>.Get(hits[i].collider);
            if (targetItem != null && targetItem != this.item) // Đảm bảo không phải chính nó
            {
                if (targetItem.itemType == ItemType.None) continue;

                bool matchesTargetType = targetItem.itemType == targetItemType;
                bool matchesDefaultTarget = targetItemType == ItemType.None
                    && item != null
                    && item.itemMoveToTarget != null
                    && item.itemMoveToTarget.defaultTarget != null
                    && targetItem.transform == item.itemMoveToTarget.defaultTarget;

                if (matchesTargetType || matchesDefaultTarget)
                {
                    isHitValid = true;
                    break;
                }
            }
        }

        myCollider.enabled = true; // Bật lại collider

        if (isHitValid)
        {
            ResetScale();
            SetShadowActive(shadowDefaultActive);
            onDropSuccess?.Invoke();
        }
        else
        {
            ResetScale();
            onDropFail?.Invoke();
            if (!consumeCurrentDropFail)
            {

                if (returnToStartOnDragFailed)
                {
                    ReturnToStart(spawnBreakHeartOnDropFail);
                }
                else
                {
                    Vector3 currentPos = transform.position;
                    currentPos.z += 1f;
                    transform.position = currentPos;
                    FinalizeFailedDrag(spawnBreakHeartOnDropFail);
                }
            }
            else
            {
                SetShadowActive(shadowDefaultActive);
            }
        }
    }

    public void ConsumeCurrentDropFail()
    {
        consumeCurrentDropFail = true;
    }

    private Vector3 GetMouseWorldPos()
    {
        Vector3 mousePos = Input.mousePosition;
        mousePos.z = zCoord;
        return mainCam.ScreenToWorldPoint(mousePos);
    }
    public void IsDraggable(bool isDraggable)
    {
        this.isDraggable = isDraggable;
    }

    public bool CanDrag()
    {
        return enabled && isDraggable && !isForceReturningToStart;
    }

    public void ChangeReturnPoint(Transform returnPoint)
    {
        returnTransform = returnPoint;
    }

    private void SetShadowActive(bool isActive)
    {
        if (shadowObject != null)
        {
            shadowObject.SetActive(isActive);
        }
    }

    private void PlayBobEffectIfEnabled()
    {
        if (bobEffect == null || !bobEffect.isActiveAndEnabled) return;
        if (item != null && !item.ShouldPlayBobEffectAfterReturn()) return;

        bobEffect.CacheStartPosition();
        bobEffect.Play();
    }

    private void ResetScale()
    {
        scaleTween?.Kill();
        scaleTween = null;
        if (!hasOriginalScale) return;

        transform.localScale = originalScale;
    }

    private static void SetWorldScale(Transform target, Vector3 worldScale)
    {
        if (target.parent == null)
        {
            target.localScale = worldScale;
            return;
        }

        Vector3 parentScale = target.parent.lossyScale;
        target.localScale = new Vector3(
            parentScale.x != 0f ? worldScale.x / parentScale.x : target.localScale.x,
            parentScale.y != 0f ? worldScale.y / parentScale.y : target.localScale.y,
            parentScale.z != 0f ? worldScale.z / parentScale.z : target.localScale.z
        );
    }

    private void PlayDragScale()
    {
        scaleTween?.Kill();
        scaleTween = transform.DOScale(originalScale * dragScaleMultiplier, dragScaleDuration).SetEase(Ease.OutBack);
    }

    private void PlayBeginDragSound()
    {
        if (!playBeginDragSound || Ply_SoundManager.Ins == null) return;

        Ply_SoundManager.Ins.PlayFx(beginDragFxType);
    }

    private void OnDisable()
    {
        ResetScale();
    }

    private void FinalizeFailedDrag(bool spawnHeart)
    {
        isForceReturningToStart = false;
        isReturningToStart = false;
        SetShadowActive(shadowDefaultActive);
        PlayBobEffectIfEnabled();
        PlayReturnToStartFinishSound();
        onReturnToStartComplete?.Invoke();
        if (spawnHeart && item != null)
        {
            item.OnDragFailReturnComplete();
        }
    }

    private void OnReturnToStartComplete()
    {
        FinalizeFailedDrag(spawnHeartOnReturnComplete);

        spawnHeartOnReturnComplete = true;
    }

    private void PlayReturnToStartFinishSound()
    {
        if (!playReturnToStartFinishSound || Ply_SoundManager.Ins == null) return;

        Ply_SoundManager.Ins.PlayFx(returnToStartFinishFxType);
    }

    public void ChangeTargetItemType(Transform transform)
    {
        this.targetItemType = ComponentCache<Item>.Get(transform).itemType;
        item.itemMoveToTarget.defaultTarget = transform;
    }
    public void UnDraggable(Transform transform)
    {
        ItemType newItemType = ComponentCache<Item>.Get(transform).itemType;
        if (targetItemType == newItemType)
        {
            this.enabled = false;
        }
    }
    public void TurnOnSpawnBreakHeartOnFailed(bool isOn)
    {
        spawnBreakHeartOnDropFail = isOn;
    }
}
