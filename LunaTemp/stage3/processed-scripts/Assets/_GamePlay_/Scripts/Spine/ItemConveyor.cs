using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class ItemConveyor : MonoBehaviour
{
    private const float EdgeSearchStep = 5f;
    private const int EdgeSearchIterations = 24;

    [SerializeField] private Transform movingRoot;
    [SerializeField] private List<Transform> itemSlots = new List<Transform>();
    
    [SerializeField] private bool arrangeSlotsOnStart = true;
    [SerializeField] private Vector3 leftLocalPoint = new Vector3(-2f, 0f, 0f);
    [SerializeField] private Vector3 rightLocalPoint = new Vector3(2f, 0f, 0f);
    [SerializeField] private bool sortSlotsLeftToRight = true;
    [SerializeField] private bool alignLeftMostSlotToScreenLeftOnStart = true;
    [SerializeField] private bool enableHorizontalDrag = true;
    
    [SerializeField] private LayerMask conveyorLayer;
    [SerializeField] private Camera raycastCamera;
    [SerializeField] private float raycastDistance = 100f;
    [SerializeField, Range(0f, 0.49f)] private float leftEdgeViewportPadding = 0f;
    [SerializeField, Range(0f, 0.49f)] private float rightEdgeViewportPadding = 0f;
    [SerializeField] private float slideBackSpeed = 35f;
    
    [Header("--- SLIDER ---")]
    [SerializeField] private SpriteRenderer sliderBackground;
    [SerializeField] private Transform sliderHandle;
    [SerializeField] private SpriteRenderer sliderHandleRenderer;
    [SerializeField] private bool hideSliderInLandscape = true;

    private Plane dragPlane;
    private Vector3 targetLocalPosition;
    private Vector3 leftScreenEdgeLocalPosition;
    private Vector3 rightScreenEdgeLocalPosition;
    private float pointerLocalOffsetX;
    
    public bool isDraggingConveyor;
    private bool hasScreenEdgePositions;
    private Tween focusTween;
    private bool isSliderVisible;
    private bool hasSliderVisibility;

    private void Reset()
    {
        movingRoot = transform;
        conveyorLayer = LayerMask.GetMask("Conveyor");
    }

    private void Awake()
    {
        if (movingRoot == null)
            movingRoot = transform;

        targetLocalPosition = movingRoot.localPosition;

        if (conveyorLayer.value == 0)
            conveyorLayer = LayerMask.GetMask("Conveyor");

        if (raycastCamera == null)
            raycastCamera = Camera.main;

        UpdateSliderVisibility();
    }

    private void Start()
    {
        if (arrangeSlotsOnStart)
            ArrangeSlotsEvenly();

        if (alignLeftMostSlotToScreenLeftOnStart)
            AlignLeftMostSlotToScreenLeft();

        CacheScreenEdgePositions();
        UpdateSliderHandle();
    }

    private void Update()
    {
        if (movingRoot == null)
            return;

        if (!enableHorizontalDrag)
        {
            UpdateSliderHandle();
            return;
        }

        if (GameManager.Ins != null && !GameManager.Ins.isPlaying)
        {
            UpdateSliderHandle();
            return;
        }

        // Nếu người chơi đang kéo một Item cụ thể, dừng drag Conveyor ngay lập tức
        if (InputManager.Ins != null && InputManager.Ins.isDragging)
        {
            if (isDraggingConveyor)
            {
                EndDrag();
            }
            UpdateSliderHandle();
            return;
        }

        // Xử lý sự kiện nhả chuột/thả tay toàn cục để tránh bị kẹt trạng thái drag
        if (Input.GetMouseButtonUp(0) && isDraggingConveyor)
        {
            EndDrag();
        }

        if (Input.GetMouseButtonDown(0) && IsPointerOverThisConveyor())
            BeginDrag();

        if (isDraggingConveyor && Input.GetMouseButton(0))
            DragConveyor();

        if (!isDraggingConveyor)
            MoveConveyorToTarget();

        UpdateSliderHandle();
    }

    public void ArrangeSlotsEvenly()
    {
        List<Transform> slots = GetOrderedSlotsForArrangement();
        if (slots.Count == 0)
            return;

        Transform pointRoot = GetPointRoot();
        Vector3 leftWorldPoint = pointRoot.TransformPoint(leftLocalPoint);
        Vector3 rightWorldPoint = pointRoot.TransformPoint(rightLocalPoint);

        for (int i = 0; i < slots.Count; i++)
        {
            float t = slots.Count == 1 ? 0.5f : i / (float)(slots.Count - 1);
            slots[i].position = Vector3.Lerp(leftWorldPoint, rightWorldPoint, t);
        }
    }

    private List<Transform> GetOrderedSlotsForArrangement()
    {
        List<Transform> slots = new List<Transform>();
        for (int i = 0; i < itemSlots.Count; i++)
        {
            if (itemSlots[i] != null)
                slots.Add(itemSlots[i]);
        }
        return slots;
    }

    private List<Transform> GetSortedSlots()
    {
        List<Transform> sortedSlots = new List<Transform>();
        for (int i = 0; i < itemSlots.Count; i++)
        {
            if (itemSlots[i] != null)
                sortedSlots.Add(itemSlots[i]);
        }

        if (sortSlotsLeftToRight)
            sortedSlots.Sort((a, b) => GetSlotSortX(a).CompareTo(GetSlotSortX(b)));

        return sortedSlots;
    }

    private float GetSlotSortX(Transform slot)
    {
        if (movingRoot == null)
            return slot.position.x;

        return movingRoot.InverseTransformPoint(slot.position).x;
    }

    private Transform GetPointRoot()
    {
        return movingRoot != null ? movingRoot : transform;
    }

    private bool IsPointerOverThisConveyor()
    {
        if (conveyorLayer.value == 0)
            return false;

        Ray ray = GetPointerRay();

        RaycastHit[] hits3D = Physics.RaycastAll(ray, raycastDistance, conveyorLayer);
        for (int i = 0; i < hits3D.Length; i++)
        {
            if (IsThisConveyorHit(hits3D[i].collider))
                return true;
        }

        return false;
    }

    private bool IsThisConveyorHit(Component hitComponent)
    {
        if (hitComponent == null)
            return false;

        ItemConveyor conveyor = hitComponent.GetComponentInParent<ItemConveyor>();
        return conveyor == this;
    }

    private Ray GetPointerRay()
    {
        if (raycastCamera == null)
            raycastCamera = Camera.main;

        return raycastCamera.ScreenPointToRay(Input.mousePosition);
    }

    private void BeginDrag()
    {
        if (raycastCamera == null)
            raycastCamera = Camera.main;

        if (raycastCamera == null)
            return;

        focusTween?.Kill();
        CacheScreenEdgePositions();
        dragPlane = new Plane(-raycastCamera.transform.forward, movingRoot.position);

        if (!TryGetPointerLocalPosition(out Vector3 pointerLocalPosition))
            return;

        pointerLocalOffsetX = movingRoot.localPosition.x - pointerLocalPosition.x;
        targetLocalPosition = movingRoot.localPosition;
        isDraggingConveyor = true;
    }

    private void DragConveyor()
    {
        if (!TryGetPointerLocalPosition(out Vector3 pointerLocalPosition))
            return;

        Vector3 nextLocalPosition = movingRoot.localPosition;
        nextLocalPosition.x = pointerLocalPosition.x + pointerLocalOffsetX;
        movingRoot.localPosition = nextLocalPosition;
        targetLocalPosition = nextLocalPosition;
    }

    private void EndDrag()
    {
        isDraggingConveyor = false;
        targetLocalPosition = GetScreenEdgeClampedPosition(movingRoot.localPosition);
    }

    public void AlignLeftMostSlotToScreenLeft()
    {
        AlignLeftMostSlotToScreenLeft(0f);
    }

    public Tween AlignLeftMostSlotToScreenLeft(float duration)
    {
        if (movingRoot == null)
            return null;

        if (raycastCamera == null)
            raycastCamera = Camera.main;

        if (raycastCamera == null)
            return null;

        List<Transform> slots = GetSortedSlots();
        if (slots.Count == 0)
            return null;

        Vector3 startLocalPosition = movingRoot.localPosition;
        startLocalPosition.x = FindLocalXForViewportEdge(slots, true, leftEdgeViewportPadding);
        targetLocalPosition = startLocalPosition;

        focusTween?.Kill();
        if (duration <= 0f)
        {
            movingRoot.localPosition = startLocalPosition;
            CacheScreenEdgePositions();
            UpdateSliderHandle();
            return null;
        }

        focusTween = movingRoot.DOLocalMove(startLocalPosition, duration).SetEase(Ease.InOutSine);
        focusTween.OnComplete(() =>
        {
            movingRoot.localPosition = startLocalPosition;
            targetLocalPosition = startLocalPosition;
            CacheScreenEdgePositions();
            UpdateSliderHandle();
        });

        return focusTween;
    }

    private bool TryGetPointerLocalPosition(out Vector3 pointerLocalPosition)
    {
        pointerLocalPosition = Vector3.zero;
        if (raycastCamera == null)
        {
            raycastCamera = Camera.main;
            if (raycastCamera == null)
                return false;
        }

        Ray ray = GetPointerRay();
        if (!dragPlane.Raycast(ray, out float enter))
            return false;

        Vector3 pointerWorldPosition = ray.GetPoint(enter);
        pointerLocalPosition = movingRoot.parent != null
            ? movingRoot.parent.InverseTransformPoint(pointerWorldPosition)
            : pointerWorldPosition;
        return true;
    }

    private void CacheScreenEdgePositions()
    {
        hasScreenEdgePositions = false;
        List<Transform> slots = GetSortedSlots();
        if (slots.Count == 0)
        {
            leftScreenEdgeLocalPosition = movingRoot.localPosition;
            rightScreenEdgeLocalPosition = movingRoot.localPosition;
            return;
        }

        float leftLimitX = FindLocalXForViewportEdge(slots, false, 1f - rightEdgeViewportPadding);
        float rightLimitX = FindLocalXForViewportEdge(slots, true, leftEdgeViewportPadding);

        if (leftLimitX > rightLimitX)
        {
            leftLimitX = movingRoot.localPosition.x;
            rightLimitX = movingRoot.localPosition.x;
        }

        leftScreenEdgeLocalPosition = movingRoot.localPosition;
        leftScreenEdgeLocalPosition.x = leftLimitX;
        rightScreenEdgeLocalPosition = movingRoot.localPosition;
        rightScreenEdgeLocalPosition.x = rightLimitX;
        hasScreenEdgePositions = true;
    }

    private float FindLocalXForViewportEdge(List<Transform> slots, bool useLeftMostSlot, float targetViewportX)
    {
        float currentX = movingRoot.localPosition.x;
        float lowX = currentX;
        float highX = currentX;

        for (int i = 0; i < EdgeSearchIterations; i++)
        {
            if (GetExtremeViewportX(slots, useLeftMostSlot, lowX) <= targetViewportX)
                break;
            lowX -= EdgeSearchStep;
        }

        for (int i = 0; i < EdgeSearchIterations; i++)
        {
            if (GetExtremeViewportX(slots, useLeftMostSlot, highX) >= targetViewportX)
                break;
            highX += EdgeSearchStep;
        }

        for (int i = 0; i < EdgeSearchIterations; i++)
        {
            float midX = (lowX + highX) * 0.5f;
            float viewportX = GetExtremeViewportX(slots, useLeftMostSlot, midX);
            if (viewportX < targetViewportX)
                lowX = midX;
            else
                highX = midX;
        }

        return (lowX + highX) * 0.5f;
    }

    private float GetExtremeViewportX(List<Transform> slots, bool useLeftMostSlot, float localX)
    {
        Vector3 localPosition = movingRoot.localPosition;
        localPosition.x = localX;

        Vector3 rootDelta = GetRootWorldPosition(localPosition) - movingRoot.position;
        float viewportX = useLeftMostSlot ? float.MaxValue : float.MinValue;

        for (int i = 0; i < slots.Count; i++)
        {
            Vector3 predictedWorldPosition = slots[i].position + rootDelta;
            float slotViewportX = raycastCamera.WorldToViewportPoint(predictedWorldPosition).x;
            viewportX = useLeftMostSlot
                ? Mathf.Min(viewportX, slotViewportX)
                : Mathf.Max(viewportX, slotViewportX);
        }

        return viewportX;
    }

    private Vector3 GetScreenEdgeClampedPosition(Vector3 localPosition)
    {
        if (!hasScreenEdgePositions)
            return localPosition;

        float minX = Mathf.Min(leftScreenEdgeLocalPosition.x, rightScreenEdgeLocalPosition.x);
        float maxX = Mathf.Max(leftScreenEdgeLocalPosition.x, rightScreenEdgeLocalPosition.x);
        localPosition.x = Mathf.Clamp(localPosition.x, minX, maxX);
        return localPosition;
    }

    private void UpdateSliderHandle()
    {
        UpdateSliderVisibility();
        if (!isSliderVisible)
            return;

        if (sliderBackground == null || sliderHandle == null || movingRoot == null)
            return;

        CacheScreenEdgePositions();
        if (!hasScreenEdgePositions)
            return;

        float minX = Mathf.Min(leftScreenEdgeLocalPosition.x, rightScreenEdgeLocalPosition.x);
        float maxX = Mathf.Max(leftScreenEdgeLocalPosition.x, rightScreenEdgeLocalPosition.x);
        float t = Mathf.Approximately(minX, maxX)
            ? 0.5f
            : Mathf.InverseLerp(minX, maxX, movingRoot.localPosition.x);
        t = 1f - t;

        UpdateSliderHandlePosition(t);
    }

    private void UpdateSliderHandlePosition(float t)
    {
        Bounds backgroundBounds = sliderBackground.bounds;
        float leftX = backgroundBounds.min.x;
        float rightX = backgroundBounds.max.x;

        if (sliderHandleRenderer != null)
        {
            float halfHandleWidth = sliderHandleRenderer.bounds.size.x * 0.5f;
            leftX += halfHandleWidth;
            rightX -= halfHandleWidth;
        }

        if (leftX > rightX)
        {
            float centerX = backgroundBounds.center.x;
            leftX = centerX;
            rightX = centerX;
        }

        Vector3 worldPosition = sliderHandle.position;
        worldPosition.x = Mathf.Lerp(leftX, rightX, t);
        sliderHandle.position = worldPosition;
    }

    private void UpdateSliderVisibility()
    {
        bool shouldShow = !hideSliderInLandscape || Screen.height >= Screen.width;
        if (hasSliderVisibility && shouldShow == isSliderVisible)
            return;

        hasSliderVisibility = true;
        isSliderVisible = shouldShow;

        if (sliderBackground != null)
            sliderBackground.gameObject.SetActive(shouldShow);

        if (sliderHandle != null)
            sliderHandle.gameObject.SetActive(shouldShow);
    }

    private Vector3 GetRootWorldPosition([Bridge.Ref] Vector3 localPosition)
    {
        if (movingRoot.parent != null)
            return movingRoot.parent.TransformPoint(localPosition);

        return localPosition;
    }

    private void MoveConveyorToTarget()
    {
        if (focusTween != null && focusTween.IsActive() && focusTween.IsPlaying())
            return;

        movingRoot.localPosition = Vector3.MoveTowards(
            movingRoot.localPosition,
            targetLocalPosition,
            slideBackSpeed * Time.deltaTime
        );

        if ((movingRoot.localPosition - targetLocalPosition).sqrMagnitude > 0.0001f)
            return;

        movingRoot.localPosition = targetLocalPosition;
    }

    private void OnDrawGizmos()
    {
        Transform pointRoot = GetPointRoot();
        Vector3 leftWorldPoint = pointRoot.TransformPoint(leftLocalPoint);
        Vector3 rightWorldPoint = pointRoot.TransformPoint(rightLocalPoint);

        Gizmos.color = Color.cyan;
        Gizmos.DrawLine(leftWorldPoint, rightWorldPoint);
        Gizmos.DrawWireSphere(leftWorldPoint, 0.15f);
        Gizmos.DrawWireSphere(rightWorldPoint, 0.15f);

        Gizmos.color = Color.yellow;
        Gizmos.DrawSphere(leftWorldPoint, 0.07f);

        Gizmos.color = Color.magenta;
        Gizmos.DrawSphere(rightWorldPoint, 0.07f);
    }
}