using DG.Tweening;
using UnityEngine;

public enum ConveyorScrollDirection { LeftToRight, RightToLeft }

public class Ply_TransformConveyor : Ply_Singleton<Ply_TransformConveyor>
{
    [Header("--- CÀI ĐẶT DI CHUYỂN ---")]
    public float scrollSpeed = 2.0f;
    public ConveyorScrollDirection scrollDirection = ConveyorScrollDirection.LeftToRight;
    public Transform waitingPos;
    public Transform targetPos;
    public bool isMoving = false;


    [Header("--- PHẠM VI (BOUNDS) ---")]
    public float leftBound = -5.0f;
    public float rightBound = 5.0f;
    [Tooltip("Độ cao hiển thị của đường Gizmos")]
    public float gizmoHeight = 2.0f;

    [Header("--- DANH SÁCH SLOTS ---")]
    [Tooltip("Kéo các Transform (khay chứa) vào đây. Code sẽ tự động chia đều chúng.")]
    public Transform[] conveyorSlots;

    void Start()
    {
        // 1. Tự động chia đều khoảng cách các Slot khi bắt đầu game
        if (conveyorSlots != null && conveyorSlots.Length > 0)
        {
            float totalDist = rightBound - leftBound;
            float spacing = totalDist / conveyorSlots.Length;

            for (int i = 0; i < conveyorSlots.Length; i++)
            {
                // Sắp xếp các slot từ trái qua phải hoặc ngược lại tùy ý
                float newX = scrollDirection == ConveyorScrollDirection.LeftToRight
                    ? rightBound - (i * spacing)
                    : leftBound + (i * spacing);
                conveyorSlots[i].position = new Vector3(newX, conveyorSlots[i].position.y, 0);
            }
        }
        UIManager.Ins.ActiveTutorialUI(true);
    }

    void Update()
    {
        // Chỉ chạy khi game đang trong trạng thái playing
        if (GameManager.Ins != null && !GameManager.Ins.isPlaying) return;
        if (!isMoving) return;

        for (int i = 0; i < conveyorSlots.Length; i++)
        {
            Transform slot = conveyorSlots[i];
            if (slot == null) continue;

            // Di chuyển Slot sang phải
            float direction = scrollDirection == ConveyorScrollDirection.LeftToRight ? 1f : -1f;
            slot.position += Vector3.right * direction * scrollSpeed * Time.deltaTime;

            // Nếu Slot đi quá lề phải, bắn nó về lề trái ngay lập tức
            if (scrollDirection == ConveyorScrollDirection.LeftToRight && slot.position.x > rightBound)
            {
                float overshoot = slot.position.x - rightBound; // Bù đắp phần đi quá để mượt hơn
                Vector3 newPos = slot.position;
                newPos.x = leftBound + overshoot;
                slot.position = newPos;
            }
            else if (scrollDirection == ConveyorScrollDirection.RightToLeft && slot.position.x < leftBound)
            {
                float overshoot = leftBound - slot.position.x;
                Vector3 newPos = slot.position;
                newPos.x = rightBound - overshoot;
                slot.position = newPos;
            }
        }
    }

    // ==========================================
    // GIZMOS: HIỂN THỊ TRONG CỬA SỔ SCENE
    // ==========================================
    private void OnDrawGizmos()
    {
        // Vẽ đường biên TRÁI (Màu Đỏ)
        Gizmos.color = Color.red;
        Vector3 leftTop = new Vector3(leftBound, gizmoHeight, 0);
        Vector3 leftBottom = new Vector3(leftBound, -gizmoHeight, 0);
        Gizmos.DrawLine(leftTop, leftBottom);

        // Vẽ đường biên PHẢI (Màu Xanh Lá)
        Gizmos.color = Color.green;
        Vector3 rightTop = new Vector3(rightBound, gizmoHeight, 0);
        Vector3 rightBottom = new Vector3(rightBound, -gizmoHeight, 0);
        Gizmos.DrawLine(rightTop, rightBottom);

        // Vẽ đường nối ngang (Màu Vàng)
        Gizmos.color = Color.yellow;
        Gizmos.DrawLine(new Vector3(leftBound, 0, 0), new Vector3(rightBound, 0, 0));

        // Vẽ các nhãn chữ để dễ phân biệt
#if UNITY_EDITOR
        UnityEditor.Handles.Label(leftTop + Vector3.up * 0.2f, "Left Bound");
        UnityEditor.Handles.Label(rightTop + Vector3.up * 0.2f, "Right Bound");
#endif
    }
    public void MoveOut()
    {
        Ply_SoundManager.Ins.PlayFx(FxType.Swipe);
        transform.DOMove(waitingPos.position, 0.3f).SetEase(Ease.OutBack);
    }
    public void MoveIn()
    {
        Ply_SoundManager.Ins.PlayFx(FxType.Swipe);
        transform.DOMove(targetPos.position, 0.3f).SetEase(Ease.OutBack).OnComplete(() =>
        {
            if (GameManager.Ins != null) GameManager.Ins.isPlaying = true;
        });
    }
}
