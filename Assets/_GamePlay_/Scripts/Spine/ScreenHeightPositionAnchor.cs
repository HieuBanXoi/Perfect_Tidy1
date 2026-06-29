using UnityEngine;

public class ScreenHeightPositionAnchor : MonoBehaviour
{
    [SerializeField] private Transform anchorPoint;
    [SerializeField] private Camera targetCamera;
    [SerializeField, Range(0f, 1f)] private float viewportYRatio = 0f;
    [SerializeField] private bool alignOnStart = true;
    [SerializeField] private bool alignOnEnable = true;
    [SerializeField] private bool realignOnScreenSizeChanged = true;
    [SerializeField] private bool drawGizmos = true;
    [SerializeField] private Color targetLineColor = Color.green;
    [SerializeField] private Color anchorColor = Color.yellow;

    private int lastScreenWidth;
    private int lastScreenHeight;
    private Vector3 lastCameraPosition;
    private Quaternion lastCameraRotation;
    private float lastCameraFieldOfView;
    private float lastCameraOrthographicSize;
    private float lastCameraAspect;

    private void Awake()
    {
        if (targetCamera == null)
            targetCamera = Camera.main;
    }

    private void OnEnable()
    {
        if (alignOnEnable)
            AlignToScreenHeightRatio();
    }

    private void Start()
    {
        if (alignOnStart)
            AlignToScreenHeightRatio();

        CacheScreenState();
    }

    private void LateUpdate()
    {
        if (!realignOnScreenSizeChanged)
            return;

        if (lastScreenWidth == Screen.width && lastScreenHeight == Screen.height && !HasCameraChanged())
            return;

        AlignToScreenHeightRatio();
        CacheScreenState();
    }

    public void AlignToScreenHeightRatio()
    {
        Camera cameraToUse = GetTargetCamera();
        if (cameraToUse == null)
            return;

        Transform anchor = GetAnchor();
        Vector3 viewportPoint = cameraToUse.WorldToViewportPoint(anchor.position);
        viewportPoint.y = viewportYRatio;

        Vector3 targetWorldPosition = cameraToUse.ViewportToWorldPoint(viewportPoint);
        transform.position += targetWorldPosition - anchor.position;
    }

    private Camera GetTargetCamera()
    {
        if (targetCamera == null)
            targetCamera = Camera.main;

        return targetCamera;
    }

    private Transform GetAnchor()
    {
        return anchorPoint != null ? anchorPoint : transform;
    }

    private void CacheScreenState()
    {
        lastScreenWidth = Screen.width;
        lastScreenHeight = Screen.height;

        Camera cameraToUse = GetTargetCamera();
        if (cameraToUse == null)
            return;

        lastCameraPosition = cameraToUse.transform.position;
        lastCameraRotation = cameraToUse.transform.rotation;
        lastCameraFieldOfView = cameraToUse.fieldOfView;
        lastCameraOrthographicSize = cameraToUse.orthographicSize;
        lastCameraAspect = cameraToUse.aspect;
    }

    private bool HasCameraChanged()
    {
        Camera cameraToUse = GetTargetCamera();
        if (cameraToUse == null)
            return false;

        return cameraToUse.transform.position != lastCameraPosition
            || cameraToUse.transform.rotation != lastCameraRotation
            || !Mathf.Approximately(cameraToUse.fieldOfView, lastCameraFieldOfView)
            || !Mathf.Approximately(cameraToUse.orthographicSize, lastCameraOrthographicSize)
            || !Mathf.Approximately(cameraToUse.aspect, lastCameraAspect);
    }

    private void OnDrawGizmos()
    {
        if (!drawGizmos)
            return;

        Camera cameraToUse = targetCamera != null ? targetCamera : Camera.main;
        if (cameraToUse == null)
            return;

        Transform anchor = GetAnchor();
        Vector3 anchorPosition = anchor.position;
        Vector3 viewportPoint = cameraToUse.WorldToViewportPoint(anchorPosition);
        viewportPoint.y = viewportYRatio;

        Vector3 targetPosition = cameraToUse.ViewportToWorldPoint(viewportPoint);
        Vector3 leftPoint = cameraToUse.ViewportToWorldPoint(new Vector3(0f, viewportYRatio, viewportPoint.z));
        Vector3 rightPoint = cameraToUse.ViewportToWorldPoint(new Vector3(1f, viewportYRatio, viewportPoint.z));

        Gizmos.color = targetLineColor;
        Gizmos.DrawLine(leftPoint, rightPoint);
        Gizmos.DrawWireSphere(targetPosition, 0.12f);

        Gizmos.color = anchorColor;
        Gizmos.DrawWireSphere(anchorPosition, 0.12f);
        Gizmos.DrawLine(anchorPosition, targetPosition);
    }
}
