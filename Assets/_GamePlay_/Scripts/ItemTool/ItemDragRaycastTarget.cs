using UnityEngine;
using UnityEngine.Events;

[System.Serializable]
public class ItemRaycastTargetEvent : UnityEvent<Item>
{
}

[RequireComponent(typeof(ItemDraggable))]
public class ItemDragRaycastTarget : MonoBehaviour
{
    [Header("--- RAYCAST TARGET ---")]
    public ItemType targetToFind = ItemType.None;
    public ItemType targetItemTypeWhenHit = ItemType.None;
    public ItemType targetItemTypeOnDropFail = ItemType.None;
    public Transform raycastPoint;
    public LayerMask targetLayerMask = ~0;
    public float rayDistance = 100f;
    public bool updateMoveDefaultTarget = false;
    public bool invokeOnlyWhenTargetChanged = true;
    public bool targetChangeEnabled = false;
    public bool restoreTargetOnDropFail = true;
    public bool resetCurrentTargetOnNoHit = false;

    [Header("--- EVENTS ---")]
    public UnityEvent onTargetFound;
    public ItemRaycastTargetEvent onTargetFoundWithItem;

    private ItemDraggable itemDraggable;
    protected Item ownerItem;
    private Collider ownerCollider;
    private Camera mainCam;
    private bool isDragging;
    private Item currentTarget;
    private Transform originalDefaultTarget;

    private void Awake()
    {
        itemDraggable = GetComponent<ItemDraggable>();
        ownerItem = ComponentCache<Item>.Get(transform);
        ownerCollider = ComponentCache<Collider>.Get(transform);
    }

    protected virtual void OnEnable()
    {
        if (itemDraggable == null)
        {
            itemDraggable = GetComponent<ItemDraggable>();
        }

        itemDraggable.onBeginDrag.RemoveListener(HandleBeginDrag);
        itemDraggable.onBeginDrag.AddListener(HandleBeginDrag);

        itemDraggable.onDropFail.RemoveListener(HandleDropFail);
        itemDraggable.onDropFail.AddListener(HandleDropFail);
    }

    protected virtual void OnDisable()
    {
        if (itemDraggable != null)
        {
            itemDraggable.onBeginDrag.RemoveListener(HandleBeginDrag);
            itemDraggable.onDropFail.RemoveListener(HandleDropFail);
        }

        isDragging = false;
        currentTarget = null;
    }

    private void Update()
    {
        if (!isDragging) return;

        if (!Input.GetMouseButton(0))
        {
            isDragging = false;
            currentTarget = null;
            return;
        }

        FindTargetUnderPointer();
    }

    private void HandleBeginDrag()
    {
        mainCam = Camera.main;
        isDragging = mainCam != null;
        currentTarget = null;
        originalDefaultTarget = ownerItem != null && ownerItem.itemMoveToTarget != null
            ? ownerItem.itemMoveToTarget.defaultTarget
            : null;
    }

    private void HandleDropFail()
    {
        if (!restoreTargetOnDropFail || itemDraggable == null) return;

        itemDraggable.targetItemType = targetItemTypeOnDropFail;

        if (updateMoveDefaultTarget && ownerItem != null && ownerItem.itemMoveToTarget != null)
        {
            ownerItem.itemMoveToTarget.defaultTarget = originalDefaultTarget;
        }

        currentTarget = null;
    }

    private void FindTargetUnderPointer()
    {
        if (mainCam == null || itemDraggable == null) return;

        bool wasOwnerColliderEnabled = ownerCollider != null && ownerCollider.enabled;
        if (ownerCollider != null)
        {
            ownerCollider.enabled = false;
        }

        Ray ray = GetTargetRay();
        RaycastHit[] hits = Physics.RaycastAll(ray, rayDistance, targetLayerMask);

        if (ownerCollider != null)
        {
            ownerCollider.enabled = wasOwnerColliderEnabled;
        }

        Item foundTarget = GetMatchingTarget(hits);
        if (foundTarget == null)
        {
            if (resetCurrentTargetOnNoHit)
            {
                currentTarget = null; // Đặt lại currentTarget về null khi không tìm thấy mục tiêu nào
            }
            return;
        }
        if (invokeOnlyWhenTargetChanged && foundTarget == currentTarget) return;

        currentTarget = foundTarget;
        if (targetChangeEnabled)
        {
            itemDraggable.targetItemType = targetItemTypeWhenHit;

            if (updateMoveDefaultTarget && ownerItem != null && ownerItem.itemMoveToTarget != null)
            {
                ownerItem.itemMoveToTarget.defaultTarget = foundTarget.transform;
            }
        }
        onTargetFound?.Invoke();
        onTargetFoundWithItem?.Invoke(foundTarget);
    }

    private Ray GetTargetRay()
    {
        if (raycastPoint == null)
        {
            return mainCam.ScreenPointToRay(Input.mousePosition);
        }

        return new Ray(raycastPoint.position, mainCam.transform.forward);
    }

    public void EnableTarget()
    {
        targetChangeEnabled = true;
    }

    public void DisableTarget()
    {
        targetChangeEnabled = false;
    }

    public void SetTargetEnabled(bool isEnabled)
    {
        targetChangeEnabled = isEnabled;
    }

    private Item GetMatchingTarget(RaycastHit[] hits)
    {
        Item bestTarget = null;
        float bestZ = float.MaxValue;
        float bestDistance = float.MaxValue;

        for (int i = 0; i < hits.Length; i++)
        {
            Item hitItem = hits[i].collider.GetComponentInParent<Item>();
            if (hitItem == null || hitItem == ownerItem) continue;
            if (hitItem.itemType != targetToFind) continue;

            float hitZ = hitItem.transform.position.z;
            bool isCloserToScreen = hitZ < bestZ;
            bool isSameZAndCloserHit = Mathf.Approximately(hitZ, bestZ)
                && hits[i].distance < bestDistance;

            if (isCloserToScreen || isSameZAndCloserHit)
            {
                bestZ = hitZ;
                bestDistance = hits[i].distance;
                bestTarget = hitItem;
            }
        }

        return bestTarget;
    }
    public void ChangeTargetToFind(Item item)
    {
        targetToFind = item.itemType;
    }

    private void OnDrawGizmos()
    {
        if (isDragging && mainCam != null)
        {
            Ray ray = GetTargetRay();
            Gizmos.color = Color.blue;
            Gizmos.DrawRay(ray.origin, ray.direction * rayDistance);
        }
    }
}
