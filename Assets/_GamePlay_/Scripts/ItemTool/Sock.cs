using DG.Tweening;
using UnityEngine;

[RequireComponent(typeof(Collider))]
public class Sock : Item
{
    [Header("--- Sock Stretch Settings ---")]
    [Tooltip("Điểm neo giữ chiếc tất lại.")]
    public Transform anchorPoint;

    [Tooltip("Transform của hình ảnh chiếc tất sẽ bị kéo dãn.")]
    public Transform stretchTarget;

    [Tooltip("Khoảng cách kéo tối đa để tách tất khỏi điểm neo.")]
    public float detachDistance = 2f;

    [Tooltip("Hệ số nhân để tăng độ dãn của tất khi kéo.")]
    public float stretchScaleMultiplier = 1f;

    [Tooltip("Thời gian để tất co về vị trí ban đầu nếu thả ra giữa chừng.")]
    public float returnToAnchorDuration = 0.3f;

    [Tooltip("Thời gian để tất co lại kích thước ban đầu sau khi tách.")]
    public float shrinkDuration = 0.2f;

    [Header("--- Components ---")]
    [Tooltip("Component CleaningTarget sẽ được bật sau khi kéo thành công.")]
    public CleaningTarget cleaningTarget;

    [Header("--- Move After Detach ---")]
    [Tooltip("Đích đến sau khi tất được tách ra.")]
    public Transform defaultTarget;
    [Tooltip("Thời gian di chuyển đến đích.")]
    public float moveDuration = 0.5f;
    [Tooltip("Kiểu di chuyển (Ease) của DOTween.")]
    public Ease moveEase = Ease.OutQuad;
    [Tooltip("Sự kiện được gọi sau khi di chuyển đến đích hoàn tất.")]
    public UnityEngine.Events.UnityEvent onMoveComplete;

    private Camera mainCam;
    private bool isDragging = false;
    private bool isDetached = false;
    private Vector3 originalStretchTargetLocalPos;
    private Quaternion originalStretchTargetLocalRot;
    private Vector3 originalStretchTargetLocalScale;
    private Plane dragPlane;
    private Collider ownCollider;

    public override void Awake()
    {
        base.Awake(); // Gọi hàm Awake của lớp cha
        mainCam = Camera.main;
        ownCollider = GetComponent<Collider>();

        if (stretchTarget != null)
        {
            originalStretchTargetLocalPos = stretchTarget.localPosition;
            originalStretchTargetLocalRot = stretchTarget.localRotation;
            originalStretchTargetLocalScale = stretchTarget.localScale;
        }

        if (cleaningTarget != null)
        {
            cleaningTarget.enabled = false;
        }
    }

    private void OnMouseDown()
    {
        if (isDetached || !enabled) return;

        isDragging = true;
        // Tạo một mặt phẳng ảo tại vị trí của điểm neo, hướng về phía camera
        dragPlane = new Plane(-mainCam.transform.forward, anchorPoint.position);
    }

    private void OnMouseDrag()
    {
        if (!isDragging || isDetached) return;

        Ray ray = mainCam.ScreenPointToRay(Input.mousePosition);
        if (dragPlane.Raycast(ray, out float enter))
        {
            Vector3 mouseOnPlane = ray.GetPoint(enter);
            Vector3 dragVector = mouseOnPlane - anchorPoint.position;

            // Chỉ cho phép kéo theo chiều dọc (khóa trục X) và chỉ đi xuống
            dragVector.x = 0;
            if (dragVector.y > 0)
            {
                dragVector.y = 0;
            }

            float stretchDistance = dragVector.magnitude;

            if (stretchTarget != null)
            {
                stretchTarget.position = anchorPoint.position + dragVector / 2f;
                stretchTarget.localScale = new Vector3(originalStretchTargetLocalScale.x, originalStretchTargetLocalScale.y + stretchDistance * stretchScaleMultiplier, originalStretchTargetLocalScale.z);
            }

            if (stretchDistance >= detachDistance)
            {
                DetachAndMove();
            }
        }
    }

    private void OnMouseUp()
    {
        if (!isDragging || isDetached) return;

        isDragging = false;

        if (stretchTarget != null)
        {
            stretchTarget.DOKill();
            stretchTarget.DOLocalMove(originalStretchTargetLocalPos, returnToAnchorDuration).SetEase(Ease.OutBounce);
            stretchTarget.DOLocalRotateQuaternion(originalStretchTargetLocalRot, returnToAnchorDuration);
            stretchTarget.DOScale(originalStretchTargetLocalScale, returnToAnchorDuration);
        }
    }

    private void DetachAndMove()
    {
        isDetached = true;
        isDragging = false;

        if (ownCollider != null)
        {
            ownCollider.enabled = false;
        }

        transform.position = anchorPoint.position;

        var sequence = DOTween.Sequence();
        if (stretchTarget != null)
        {
            sequence.Append(stretchTarget.DOLocalMove(originalStretchTargetLocalPos, shrinkDuration));
            sequence.Join(stretchTarget.DOLocalRotateQuaternion(originalStretchTargetLocalRot, shrinkDuration));
        }

        sequence.OnComplete(() =>
        {
            stretchTarget.DOScale(originalStretchTargetLocalScale, shrinkDuration).SetEase(Ease.OutQuad);
            if (cleaningTarget != null)
            {
                cleaningTarget.enabled = true;
            }

            if (defaultTarget != null)
            {
                transform.DOMove(defaultTarget.position, moveDuration)
                    .SetEase(moveEase)
                    .OnComplete(() =>
                    {
                        onMoveComplete?.Invoke();
                    });
            }
            else
            {
                onMoveComplete?.Invoke();
            }
        });
    }
}
