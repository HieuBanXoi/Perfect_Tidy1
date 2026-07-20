using DG.Tweening;
using UnityEngine;

[RequireComponent(typeof(ItemDraggable))]
public class ItemDragChildRotator : MonoBehaviour
{
    [Header("--- ROTATE TARGET ---")]
    public Transform rotateTarget;
    public Vector3 dragEulerAngles;
    public bool useLocalRotation = true;
    public bool rotateRelative = false;

    [Header("--- TWEEN ---")]
    public float rotateDuration = 0.15f;
    public Ease rotateEase = Ease.OutQuad;
    public RotateMode rotateMode = RotateMode.Fast;

    private ItemDraggable itemDraggable;
    private Vector3 originalEulerAngles;
    private bool hasOriginalRotation;
    private Tween deferredRotateTween;
    private Tween rotateTween;

    private void Awake()
    {
        itemDraggable = GetComponent<ItemDraggable>();
        CacheOriginalRotation();
    }

    private void OnEnable()
    {
        if (itemDraggable == null)
        {
            itemDraggable = GetComponent<ItemDraggable>();
        }

        itemDraggable.onBeginDrag.RemoveListener(RotateOnDrag);
        itemDraggable.onBeginDrag.AddListener(RotateOnDrag);

        itemDraggable.onDropFail.RemoveListener(HandleDropFail);
        itemDraggable.onDropFail.AddListener(HandleDropFail);

    }

    private void OnDisable()
    {
        if (itemDraggable != null)
        {
            itemDraggable.onBeginDrag.RemoveListener(RotateOnDrag);
            itemDraggable.onDropFail.RemoveListener(HandleDropFail);
        }

        deferredRotateTween?.Kill();
        rotateTween?.Kill();
    }

    public void RotateOnDrag()
    {
        CacheOriginalRotation();

        Vector3 targetEulerAngles = rotateRelative
            ? originalEulerAngles + dragEulerAngles
            : dragEulerAngles;

        RotateTo(targetEulerAngles);
    }

    public void RotateBack()
    {
        if (!hasOriginalRotation) return;

        RotateTo(originalEulerAngles);
    }

    public void ResetToOriginalRotation()
    {
        if (!hasOriginalRotation)
        {
            CacheOriginalRotation();
        }

        Transform target = GetRotateTarget();
        deferredRotateTween?.Kill();
        rotateTween?.Kill();

        if (useLocalRotation)
        {
            target.localEulerAngles = originalEulerAngles;
            return;
        }

        target.eulerAngles = originalEulerAngles;
    }

    private void HandleDropFail()
    {
        if (!hasOriginalRotation) return;

        if (GetRotateTarget() == transform)
        {
            deferredRotateTween?.Kill();
            deferredRotateTween = DOVirtual.DelayedCall(0f, RotateBack);
            return;
        }

        RotateBack();
    }

    private void CacheOriginalRotation()
    {
        if (hasOriginalRotation) return;

        Transform target = GetRotateTarget();
        originalEulerAngles = useLocalRotation ? target.localEulerAngles : target.eulerAngles;
        hasOriginalRotation = true;
    }

    private void RotateTo([Bridge.Ref] Vector3 targetEulerAngles)
    {
        Transform target = GetRotateTarget();
        rotateTween?.Kill();
        rotateTween = useLocalRotation
            ? target.DOLocalRotate(targetEulerAngles, rotateDuration, rotateMode)
            : target.DORotate(targetEulerAngles, rotateDuration, rotateMode);
        rotateTween.SetEase(rotateEase);
    }

    private Transform GetRotateTarget()
    {
        return rotateTarget != null ? rotateTarget : transform;
    }
}
