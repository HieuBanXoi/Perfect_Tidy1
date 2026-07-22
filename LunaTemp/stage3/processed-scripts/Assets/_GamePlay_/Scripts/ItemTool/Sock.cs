using DG.Tweening;
using UnityEngine;

[RequireComponent(typeof(Collider))]
public class Sock : Item
{
    [Header("--- Sock Stretch Settings ---")]
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
    private Vector3 initialMouseOnPlane;

    // Vị trí world của cạnh trên (top edge) khi bắt đầu kéo - cố định trong suốt drag
    private Vector3 topEdgeWorldPos;

    public bool IsDetached => isDetached;

    public override void Awake()
    {
        base.Awake();
        mainCam = Camera.main;

        if (stretchTarget != null)
        {
            originalStretchTargetLocalPos = stretchTarget.localPosition;
            originalStretchTargetLocalRot = stretchTarget.localRotation;
            originalStretchTargetLocalScale = stretchTarget.localScale;
        }
    }

    public void BeginDrag()
    {
        if (isDetached || !enabled) return;

        isDragging = true;
        Ply_SoundManager.Ins.PlayFxLoop(FxType.FoodToWater);

        // Cạnh trên = vị trí world hiện tại của transform gốc (sock)
        // Mặt phẳng kéo đi qua vị trí này, hướng về camera
        topEdgeWorldPos = transform.position;
        dragPlane = new Plane(-mainCam.transform.forward, topEdgeWorldPos);

        // Lấy vị trí chuột ban đầu trên mặt phẳng kéo để tính toán độ dãn tương đối
        Ray ray = mainCam.ScreenPointToRay(Input.mousePosition);
        if (dragPlane.Raycast(ray, out float enter))
        {
            initialMouseOnPlane = ray.GetPoint(enter);
        }
    }

    public void ProcessDrag()
    {
        if (!isDragging || isDetached || !enabled) return;

        Ray ray = mainCam.ScreenPointToRay(Input.mousePosition);
        if (dragPlane.Raycast(ray, out float enter))
        {
            Vector3 mouseOnPlane = ray.GetPoint(enter);

            // Tính quãng đường kéo xuống theo trục Y so với điểm click ban đầu.
            float dragDistanceY = initialMouseOnPlane.y - mouseOnPlane.y;

            // Chỉ tính khi kéo xuống (giá trị dương), không tính khi kéo lên.
            float stretchDistance = Mathf.Max(0, dragDistanceY);

            // Vector thể hiện độ giãn của tất, luôn hướng thẳng xuống từ điểm neo.
            Vector3 stretchVector = Vector3.down * stretchDistance;

            if (stretchTarget != null)
            {
                // Cạnh trên của tất cố định tại topEdgeWorldPos.
                // Trung tâm của sprite sẽ di chuyển xuống một nửa quãng đường giãn.
                stretchTarget.position = topEdgeWorldPos + stretchVector * 0.5f;

                // Scale theo chiều Y để tạo hiệu ứng giãn.
                stretchTarget.localScale = new Vector3(
                    originalStretchTargetLocalScale.x,
                    originalStretchTargetLocalScale.y + stretchDistance * stretchScaleMultiplier,
                    originalStretchTargetLocalScale.z
                );
            }
            if (stretchDistance >= detachDistance)
            {
                DetachAndMove();
            }
        }
    }

    public void EndDrag()
    {
        if (!isDragging || isDetached) return;
        Ply_SoundManager.Ins.StopFxLoop(FxType.FoodToWater);

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
        Ply_SoundManager.Ins.StopFxLoop(FxType.FoodToWater);

        Ply_SoundManager.Ins.PlayFx(FxType.KnifeCut);

        isDetached = true;
        isDragging = false;

        // Đặt sock về vị trí cạnh trên (đã cố định trong suốt drag)
        transform.position = topEdgeWorldPos;

        // Dãn về bình thường VÀ move đến defaultTarget CÙNG LÚC (song song)
        if (stretchTarget != null)
        {
            stretchTarget.DOKill();
            stretchTarget.DOLocalMove(originalStretchTargetLocalPos, shrinkDuration).SetEase(Ease.OutQuad);
            stretchTarget.DOLocalRotateQuaternion(originalStretchTargetLocalRot, shrinkDuration);
            stretchTarget.DOScale(originalStretchTargetLocalScale, shrinkDuration).SetEase(Ease.OutQuad);
        }

        if (defaultTarget != null)
        {
            transform.DOMove(defaultTarget.position, moveDuration)
                .SetEase(moveEase)
                .OnComplete(() =>
                {
                    // Re-cache paintBounds tại vị trí mới (defaultTarget) trước khi paint bắt đầu.
                    // Nếu không làm bước này, paintBounds vẫn ở vị trí gốc của sock,
                    // khiến các sample point bị lệch và paint không bao giờ đạt requiredPercent.
                    var painter = GetComponent<ItemSpriteMaskPainter>();
                    if (painter != null) painter.ResetPaint();

                    onMoveComplete?.Invoke();
                });
        }
        else
        {
            onMoveComplete?.Invoke();
        }
    }
}
