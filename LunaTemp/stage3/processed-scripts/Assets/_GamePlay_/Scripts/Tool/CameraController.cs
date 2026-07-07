using UnityEngine;

public class CameraController : MonoBehaviour
{
    [Header("Components")]
    [SerializeField] private Camera targetCamera;

    [Header("Zoom")]
    [SerializeField] private bool enableZoom = true;
    [SerializeField] private float minZoomRatio = 0.75f;
    [SerializeField] private float maxZoomRatio = 1.35f;
    [SerializeField] private float mouseWheelZoomSpeed = 0.25f;
    [SerializeField] private float pinchZoomSpeed = 0.2f;
    [SerializeField] private ItemConveyor conveyor;


    [Header("Drag")]
    [SerializeField] private bool enableDrag = true;
    [SerializeField] private bool horizontalOnly = true;
    [SerializeField] private float dragSensitivity = 1f;
    [SerializeField] private float maxHorizontalOffset = 1.5f;
    [SerializeField] private float maxVerticalOffset = 0.75f;

    private float baseOrthographicSize;
    private float minOrthographicSize;
    private float maxOrthographicSize;
    private Vector3 startCameraPosition;
    private Vector3 lastDragWorldPosition;
    private bool isDraggingCamera;

    private void Awake()
    {
        if (targetCamera == null)
        {
            targetCamera = Camera.main;
        }
    }

    private void Start()
    {
        if (targetCamera == null)
        {
            Debug.LogError("CameraController: Target Camera is missing.", this);
            enabled = false;
            return;
        }

        startCameraPosition = targetCamera.transform.position;
        baseOrthographicSize = targetCamera.orthographicSize;
        RefreshZoomLimits();
    }

    private void Update()
    {
        if (targetCamera == null)
        {
            return;
        }

        HandleZoom();
        HandleDrag();
    }

    public void SetInputEnabled(bool isEnabled)
    {
        enableZoom = isEnabled;
        enableDrag = isEnabled;
        isDraggingCamera = false;
    }

    private void HandleZoom()
    {
        if (!enableZoom || !targetCamera.orthographic )
        {
            return;
        }

        if (Input.touchCount >= 2)
        {
            HandlePinchZoom();
            return;
        }

        float scroll = Input.mouseScrollDelta.y;
        if (Mathf.Abs(scroll) > 0.01f)
        {
            SetOrthographicSize(targetCamera.orthographicSize - scroll * mouseWheelZoomSpeed);
        }
    }

    private void HandlePinchZoom()
    {
        Touch touchA = Input.GetTouch(0);
        Touch touchB = Input.GetTouch(1);

        Vector2 previousA = touchA.position - touchA.deltaPosition;
        Vector2 previousB = touchB.position - touchB.deltaPosition;

        float previousDistance = Vector2.Distance(previousA, previousB);
        float currentDistance = Vector2.Distance(touchA.position, touchB.position);
        float distanceDelta = currentDistance - previousDistance;

        SetOrthographicSize(targetCamera.orthographicSize - distanceDelta * pinchZoomSpeed);
    }

    private void HandleDrag()
    {
        bool isConveyorDragging = conveyor != null && conveyor.isDraggingConveyor;
        if (!enableDrag || Input.touchCount >= 2 || IsItemDragging() || isConveyorDragging)
        {
            isDraggingCamera = false;
            return;
        }

        if (Input.touchCount == 1)
        {
            HandleTouchDrag();
            return;
        }

        HandleMouseDrag();
    }

    private void HandleMouseDrag()
    {
        if (Input.GetMouseButtonDown(0))
        {
            StartCameraDrag(Input.mousePosition);
            return;
        }

        if (Input.GetMouseButton(0) && isDraggingCamera)
        {
            DragCamera(Input.mousePosition);
            return;
        }

        if (Input.GetMouseButtonUp(0))
        {
            isDraggingCamera = false;
        }
    }

    private void HandleTouchDrag()
    {
        Touch touch = Input.GetTouch(0);

        if (touch.phase == TouchPhase.Began)
        {
            StartCameraDrag(touch.position);
            return;
        }

        if ((touch.phase == TouchPhase.Moved || touch.phase == TouchPhase.Stationary) && isDraggingCamera)
        {
            DragCamera(touch.position);
            return;
        }

        if (touch.phase == TouchPhase.Ended || touch.phase == TouchPhase.Canceled)
        {
            isDraggingCamera = false;
        }
    }

    private void StartCameraDrag([Bridge.Ref] Vector2 screenPosition)
    {
        if (IsPointerOverGameplayObject(screenPosition))
        {
            isDraggingCamera = false;
            return;
        }

        if (!TryGetWorldPoint(screenPosition, out lastDragWorldPosition))
        {
            isDraggingCamera = false;
            return;
        }

        isDraggingCamera = true;
    }

    private void DragCamera([Bridge.Ref] Vector2 screenPosition)
    {
        if (!TryGetWorldPoint(screenPosition, out Vector3 currentWorldPosition))
        {
            isDraggingCamera = false;
            return;
        }

        Vector3 delta = (lastDragWorldPosition - currentWorldPosition) * dragSensitivity;
        if (horizontalOnly)
        {
            delta.y = 0f;
        }

        targetCamera.transform.position = ClampCameraPosition(targetCamera.transform.position + delta);

        if (TryGetWorldPoint(screenPosition, out lastDragWorldPosition) == false)
        {
            isDraggingCamera = false;
        }
    }

    private bool TryGetWorldPoint([Bridge.Ref] Vector2 screenPosition, out Vector3 worldPosition)
    {
        Ray ray = targetCamera.ScreenPointToRay(screenPosition);
        Plane plane = new Plane(Vector3.forward, Vector3.zero);

        if (plane.Raycast(ray, out float distance))
        {
            worldPosition = ray.GetPoint(distance);
            return true;
        }

        worldPosition = Vector3.zero;
        return false;
    }

    private Vector3 ClampCameraPosition(Vector3 position)
    {
        position.x = Mathf.Clamp(position.x, startCameraPosition.x - maxHorizontalOffset, startCameraPosition.x + maxHorizontalOffset);

        if (horizontalOnly)
        {
            position.y = startCameraPosition.y;
        }
        else
        {
            position.y = Mathf.Clamp(position.y, startCameraPosition.y - maxVerticalOffset, startCameraPosition.y + maxVerticalOffset);
        }

        return position;
    }

    private void SetOrthographicSize(float size)
    {
        targetCamera.orthographicSize = Mathf.Clamp(size, minOrthographicSize, maxOrthographicSize);
    }

    private void RefreshZoomLimits()
    {
        minZoomRatio = Mathf.Max(0.01f, minZoomRatio);
        maxZoomRatio = Mathf.Max(minZoomRatio, maxZoomRatio);

        minOrthographicSize = baseOrthographicSize * minZoomRatio;
        maxOrthographicSize = baseOrthographicSize * maxZoomRatio;
    }

    private bool IsItemDragging()
    {
        return InputManager.Ins != null && InputManager.Ins.isDragging;
    }

    private bool IsPointerOverGameplayObject([Bridge.Ref] Vector2 screenPosition)
    {
        if (InputManager.Ins == null)
        {
            return false;
        }

        Ray ray = targetCamera.ScreenPointToRay(screenPosition);
        int blockedLayers = InputManager.Ins.itemLayer.value | InputManager.Ins.boxLayer.value;
        return Physics.Raycast(ray, 100f, blockedLayers);
    }
}
