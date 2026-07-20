using DG.Tweening;
using UnityEngine;

public class Paper : Item
{
    public bool isUse = false;
    public GameObject paper;
    public GameObject paperTrash;
    public ItemDragRaycastTarget itemDragRaycastTarget;
    public SphereCollider curentCollider;

    private void OnEnable()
    {
        // Reset lại trạng thái của giấy về mặc định khi được lấy ra từ pool.
        // Điều này đảm bảo giấy mới spawn ra sẽ "có các component như cũ" (hoạt động như mới).
        transform.localScale = Vector3.one;

        isUse = false;
        if (paper != null) paper.SetActive(false);
        if (paperTrash != null) paperTrash.SetActive(false);
        if (itemDragRaycastTarget != null) itemDragRaycastTarget.enabled = true;
        itemDraggable.returnToStartOnDragFailed = false;
        itemDraggable.targetItemType = ItemType.Trash;
        curentCollider.radius = 1.5f;
        animator.enabled = false;

        
        // Đăng ký các sự kiện kéo thả theo yêu cầu.
        if (itemDraggable != null)
        {
            // Luôn xóa listener cũ trước khi thêm mới để tránh đăng ký trùng lặp,
            // đảm bảo object hoạt động đúng khi được tái sử dụng từ pool.
            itemDraggable.onBeginDrag.RemoveListener(OnDrag);
            itemDraggable.onDropFail.RemoveListener(OnDrop);
            itemDraggable.onDropSuccess.RemoveListener(ExecuteMoveToTrash);

            itemDraggable.onBeginDrag.AddListener(OnDrag);
            itemDraggable.onDropFail.AddListener(OnDrop);
            itemDraggable.onDropSuccess.AddListener(ExecuteMoveToTrash);
        }
        if (itemMoveToTarget != null)
        {
            itemMoveToTarget.onComplete.RemoveListener(Despawn);
            itemMoveToTarget.onComplete.AddListener(Despawn);
        }
        if (itemDragRaycastTarget != null)
        {
            // Khi kéo và phát hiện được target (thùng rác), gọi sự kiện.
            itemDragRaycastTarget.onTargetFoundWithItem.RemoveListener(OnTrashCanFound);
            itemDragRaycastTarget.onTargetFoundWithItem.AddListener(OnTrashCanFound);
        }
    }

    private void OnDisable()
    {
        // Hủy đăng ký sự kiện khi không dùng tới để tránh lỗi.
        if (itemDraggable != null)
        {
            itemDraggable.onBeginDrag.RemoveListener(OnDrag);
            itemDraggable.onDropFail.RemoveListener(OnDrop);
            itemDraggable.onDropSuccess.RemoveListener(ExecuteMoveToTrash);
        }
        if (itemMoveToTarget != null)
        {
            itemMoveToTarget.onComplete.RemoveListener(Despawn);
        }
        if (itemDragRaycastTarget != null)
        {
            // Hủy đăng ký khi không dùng tới.
            itemDragRaycastTarget.onTargetFoundWithItem.RemoveListener(OnTrashCanFound);
        }
    }

    public void OnDrag()
    {
        ComponentCache<Animator>.Get(GameManager.Ins.trashCan)?.SetTrigger("In");
        if (isUse)
        {
            return;
        }
        SpawnExtendPaper();
        paper.SetActive(true);
        paperTrash.SetActive(false);
        itemDragRaycastTarget.enabled = true;
        isUse = true;
    }
    public void OnDrop()
    {
        ComponentCache<Animator>.Get(GameManager.Ins.trashCan)?.SetTrigger("Out");

        paper.SetActive(false);
        paperTrash.SetActive(true);
        itemDragRaycastTarget.enabled = false;
        curentCollider.radius = 0.7f;
    }

    private void ExecuteMoveToTrash()
    {
        if (itemMoveToTarget != null)
        {
            // ExecuteMove() sẽ di chuyển đến defaultTarget đã được gán từ trước.
            itemMoveToTarget.ExecuteMove();
            tf.DOScale(Vector3.zero, itemMoveToTarget.duration);
        }
    }
    public void SpawnExtendPaper()
    {
        Vector3 spawnPosition = GameManager.Ins.paperBox.transform.position;
        Paper paper = Ply_Pool.Ins.Spawn<Paper>(PoolType.Paper, spawnPosition, transform.rotation);

        if (paper == this)
        {
            // Nếu pool trả về chính object này, hãy yêu cầu một object khác.
            paper = Ply_Pool.Ins.Spawn<Paper>(PoolType.Paper, spawnPosition, transform.rotation);
        }
        
        // Thêm kiểm tra null để code an toàn hơn và dễ debug hơn
        if (paper == null)
        {
            Debug.LogError("Không thể spawn Paper từ pool. Hãy kiểm tra cấu hình của Ply_Pool trong Inspector.", this.gameObject);
            return;
        }
        paper.tf.SetParent(PhaseManager.Ins.CurrentPhaseObject);
        paper.itemMoveToTarget.defaultTarget = GameManager.Ins.trashCan;
    }
    public void Despawn()
    {
        ComponentCache<Animator>.Get(GameManager.Ins.trashCan)?.SetTrigger("Out");

        isUse = false;
        

        Ply_Pool.Ins.Despawn(PoolType.Paper, this);
    }

    /// <summary>
    /// Được gọi bởi ItemDragRaycastTarget khi con trỏ chuột bay qua thùng rác.
    /// </summary>
    /// <param name="trashCanItem">Item component của thùng rác.</param>
    private void OnTrashCanFound(Item trashCanItem)
    {
        if (trashCanItem == null || trashCanItem.animator == null) return;
        animator.enabled = true;
        trashCanItem.animator.SetTrigger("Clean");
    }
    
}
