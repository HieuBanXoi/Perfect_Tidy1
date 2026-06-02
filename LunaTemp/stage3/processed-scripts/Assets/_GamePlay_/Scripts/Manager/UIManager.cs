using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

[System.Serializable]
public class ScreenScaleStep
{
    [Tooltip("If Height / Width is greater than this ratio, use this orthographic size.")]
    public float heightOnWidthRatio;
    public float orthographicSize;

    public ScreenScaleStep() { }

    public ScreenScaleStep(float ratio, float size)
    {
        heightOnWidthRatio = ratio;
        orthographicSize = size;
    }
}

public class UIManager : Ply_Singleton<UIManager>
{
    public GameObject winUI;
    public GameObject loseUI;
    public GameObject tutorial;
    public GameObject verticalUI;
    public GameObject horizontalUI;
    public Button downloadBtnVertical;
    public Button dowloadBtnHorizontal;
    public Slider progressSlider;
    public TextMeshProUGUI progressText;
    public int maxProgressItems = 100;
    public int startProgressItems = 0;
    public float screenWidth;
    public float screenHeight;
    public float scaleHeightOnWidth;
    private int totalItems;
    private int placedItems;
    private Color originalTextColor;
    public bool isVertical;
    public Camera cam;

    [Header("--- CAMERA INTRO ZOOM ---")]
    public float introZoomOutMultiplier = 1.1f;
    public float cameraZoomDuration = 1f;
    private float defaultOrthographicSize;
    private bool hasDefaultOrthographicSize;
    private bool isIntroZoomedOut = true;

    [Header("--- SCREEN SCALE SETTINGS ---")]
    [Tooltip("Enable continuous camera size scaling by screen ratio. Disable to use discrete steps below.")]
    public bool useContinuousScaling = false;

    [Header("- Continuous Scaling -")]
    public float baseOrthographicSize = 1.65f;
    [Tooltip("Base Height / Width ratio. 16:9 portrait is about 1.777.")]
    public float baseAspect = 1.777f;

    [Header("- Discrete Scaling -")]
    public float landscapeSize = 1.65f;
    public float defaultPortraitSize = 1.65f;
    public List<ScreenScaleStep> discreteScaleSteps = new List<ScreenScaleStep>
    {
        new ScreenScaleStep(1.9f, 1.8f),
        new ScreenScaleStep(2.0f, 1.9f),
        new ScreenScaleStep(2.1f, 2.0f),
        new ScreenScaleStep(2.3f, 2.3f)
    };

    [Header("--- PERSPECTIVE FIT SETTINGS ---")]
    [Tooltip("Enable if this camera is perspective and should be fitted by distance instead of orthographicSize.")]
    public bool usePerspectiveCamera = false;
    [Tooltip("Optional point to keep centered while fitting a perspective camera.")]
    public Transform perspectiveFocus;
    [Tooltip("Distance to focus when perspectiveFocus is empty. Leave 0 to calculate from baseOrthographicSize and FOV.")]
    public float perspectiveFocusDistance = 0f;
    [Tooltip("Padding so the content is not too close to the screen edges.")]
    public float perspectivePadding = 1.05f;
    [Tooltip("Fit perspective camera against real renderer bounds. Assign boundsRoot or boundsRenderers.")]
    public bool fitRendererBounds = false;
    public Transform boundsRoot;
    public List<Renderer> boundsRenderers = new List<Renderer>();

    private Vector3 perspectiveFocusPoint;
    private bool hasPerspectiveCache;

    protected void Start()
    {
        // downloadBtnVertical.onClick.AddListener(GoToStore);
        // dowloadBtnHorizontal.onClick.AddListener(GoToStore);

        winUI.SetActive(false);
        loseUI.SetActive(false);
        tutorial.SetActive(false);
        UpdateUI();
        if (cam != null)
        {
            CachePerspectiveCamera();
        }
        if (progressText != null)
        {
            originalTextColor = progressText.color;
        }
    }

    private void Update()
    {
        // Kiểm tra xem kích thước màn hình có thay đổi không (ví dụ: người chơi xoay thiết bị)
        if (Screen.width != screenWidth || Screen.height != screenHeight)
        {
            // Cập nhật ngay biến tạm để tránh việc gọi Coroutine liên tục trong các frame tiếp theo
            screenWidth = Screen.width;
            screenHeight = Screen.height;
            StartCoroutine(DelayUpdateUIRoutine());
        }
    }

    private IEnumerator DelayUpdateUIRoutine()
    {
        yield return null; // Đợi 1 frame để Luna Engine và Canvas cập nhật xong tỷ lệ nội bộ
        UpdateUI();
    }

    public void UpdateUI()
    {
        winUI.SetActive(false);
        loseUI.SetActive(false);
        // tutorial.SetActive(true);
        GetScreenSize();
        GetSreenType();
        ScreenScale();
    }

    private void GetScreenSize()
    {
        screenHeight = Screen.height;
        screenWidth = Screen.width;
    }
    private void GetSreenType()
    {
        isVertical = screenHeight > screenWidth;
        scaleHeightOnWidth = screenHeight / screenWidth;
    }


    private void ScreenScale()
    {
        if (verticalUI != null)
        {
            verticalUI.SetActive(isVertical);
        }

        if (horizontalUI != null)
        {
            horizontalUI.SetActive(!isVertical);
        }

        float targetOrthographicSize = Mathf.Max(GetTargetOrthographicSize(), baseOrthographicSize);
        ApplyCameraScale(targetOrthographicSize);

        if (cam != null && cam.orthographic)
        {
            CacheDefaultOrthographicSize(targetOrthographicSize);

            if (isIntroZoomedOut)
            {
                cam.orthographicSize = defaultOrthographicSize * introZoomOutMultiplier;
            }
        }
    }

    private float GetTargetOrthographicSize()
    {
        if (useContinuousScaling)
        {
            if (!isVertical)
            {
                return landscapeSize;
            }

            return baseOrthographicSize * (scaleHeightOnWidth / baseAspect);
        }

        if (!isVertical)
        {
            return landscapeSize;
        }

        float matchedSize = defaultPortraitSize;
        float highestMatchedRatio = 0f;

        if (discreteScaleSteps != null)
        {
            foreach (ScreenScaleStep step in discreteScaleSteps)
            {
                if (scaleHeightOnWidth > step.heightOnWidthRatio && step.heightOnWidthRatio > highestMatchedRatio)
                {
                    highestMatchedRatio = step.heightOnWidthRatio;
                    matchedSize = step.orthographicSize;
                }
            }
        }

        return matchedSize;
    }

    private void ApplyCameraScale(float targetOrthographicSize)
    {
        if (cam == null)
        {
            cam = Camera.main;
        }

        if (cam == null)
        {
            return;
        }

        if (usePerspectiveCamera)
        {
            cam.orthographic = false;
        }

        if (cam.orthographic)
        {
            cam.orthographicSize = targetOrthographicSize;
            return;
        }

        CachePerspectiveCamera();

        if (fitRendererBounds && TryGetRendererBounds(out Bounds bounds))
        {
            FitPerspectiveCameraToBounds(bounds);
            return;
        }

        FitPerspectiveCameraToSize(targetOrthographicSize);
    }

    private void CachePerspectiveCamera()
    {
        if (hasPerspectiveCache)
        {
            return;
        }

        if (cam == null)
        {
            cam = Camera.main;
        }

        if (cam == null)
        {
            return;
        }

        float focusDistance = GetInitialPerspectiveFocusDistance();
        perspectiveFocusPoint = perspectiveFocus != null
            ? perspectiveFocus.position
            : cam.transform.position + cam.transform.forward * focusDistance;
        hasPerspectiveCache = true;
    }

    private float GetInitialPerspectiveFocusDistance()
    {
        if (perspectiveFocus != null)
        {
            float focusDistance = Vector3.Dot(perspectiveFocus.position - cam.transform.position, cam.transform.forward);
            return Mathf.Max(focusDistance, cam.nearClipPlane + 0.01f);
        }

        if (perspectiveFocusDistance > 0f)
        {
            return perspectiveFocusDistance;
        }

        float halfFov = cam.fieldOfView * 0.5f * Mathf.Deg2Rad;
        return Mathf.Max(baseOrthographicSize / Mathf.Tan(halfFov), cam.nearClipPlane + 0.01f);
    }

    private void FitPerspectiveCameraToSize(float targetOrthographicSize)
    {
        float halfFov = cam.fieldOfView * 0.5f * Mathf.Deg2Rad;
        float targetDistance = targetOrthographicSize / Mathf.Tan(halfFov);
        targetDistance *= Mathf.Max(1f, perspectivePadding);

        if (perspectiveFocus != null)
        {
            perspectiveFocusPoint = perspectiveFocus.position;
        }

        cam.transform.position = perspectiveFocusPoint - cam.transform.forward * targetDistance;
    }

    private bool TryGetRendererBounds(out Bounds bounds)
    {
        bool hasBounds = false;
        bounds = new Bounds();

        if (boundsRoot != null)
        {
            Renderer[] rootRenderers = boundsRoot.GetComponentsInChildren<Renderer>(false);
            foreach (Renderer targetRenderer in rootRenderers)
            {
                EncapsulateRenderer(targetRenderer, ref bounds, ref hasBounds);
            }
        }

        if (boundsRenderers != null)
        {
            foreach (Renderer targetRenderer in boundsRenderers)
            {
                EncapsulateRenderer(targetRenderer, ref bounds, ref hasBounds);
            }
        }

        return hasBounds;
    }

    private void EncapsulateRenderer(Renderer targetRenderer, ref Bounds bounds, ref bool hasBounds)
    {
        if (targetRenderer == null || !targetRenderer.enabled)
        {
            return;
        }

        if (!hasBounds)
        {
            bounds = targetRenderer.bounds;
            hasBounds = true;
            return;
        }

        bounds.Encapsulate(targetRenderer.bounds);
    }

    private void FitPerspectiveCameraToBounds([Bridge.Ref] Bounds bounds)
    {
        Vector3 forward = cam.transform.forward;
        Vector3 right = cam.transform.right;
        Vector3 up = cam.transform.up;

        float verticalTan = Mathf.Tan(cam.fieldOfView * 0.5f * Mathf.Deg2Rad);
        float horizontalTan = verticalTan * cam.aspect;
        float requiredDistance = cam.nearClipPlane + 0.01f;

        Vector3 center = bounds.center;
        Vector3 extents = bounds.extents;

        for (int x = -1; x <= 1; x += 2)
        {
            for (int y = -1; y <= 1; y += 2)
            {
                for (int z = -1; z <= 1; z += 2)
                {
                    Vector3 corner = center + Vector3.Scale(extents, new Vector3(x, y, z));
                    Vector3 fromCenter = corner - center;

                    float localX = Mathf.Abs(Vector3.Dot(fromCenter, right));
                    float localY = Mathf.Abs(Vector3.Dot(fromCenter, up));
                    float localZ = Vector3.Dot(fromCenter, forward);

                    requiredDistance = Mathf.Max(requiredDistance, localX / horizontalTan - localZ);
                    requiredDistance = Mathf.Max(requiredDistance, localY / verticalTan - localZ);
                }
            }
        }

        requiredDistance *= Mathf.Max(1f, perspectivePadding);
        cam.transform.position = center - forward * requiredDistance;
    }

    public void ActiveGameWinUI(bool isActive)
    {
        winUI.SetActive(isActive);
    }
    public void ActiveGameLoseUI(bool isActive)
    {
        loseUI.SetActive(isActive);
    }
    public void ActiveTutorialUI(bool isActive)
    {
        tutorial.SetActive(isActive);
    }

    public void ZoomInCamera()
    {
        if (cam == null)
        {
            cam = Camera.main;
        }

        if (cam == null || !cam.orthographic)
        {
            return;
        }

        if (!hasDefaultOrthographicSize)
        {
            CacheDefaultOrthographicSize(cam.orthographicSize);
        }

        isIntroZoomedOut = false;
        cam.DOKill();

        if (Mathf.Abs(cam.orthographicSize - defaultOrthographicSize) > 0.01f)
        {
            DOTween.To(() => cam.orthographicSize, x => cam.orthographicSize = x, defaultOrthographicSize, cameraZoomDuration)
                .SetTarget(cam);
        }
    }

    private void CacheDefaultOrthographicSize(float size)
    {
        defaultOrthographicSize = size;
        hasDefaultOrthographicSize = true;
    }

    public void SetupProgressBar(int total)
    {
        totalItems = total;
        placedItems = 0;

        if (progressSlider != null)
        {
            progressSlider.maxValue = maxProgressItems;
            progressSlider.value = startProgressItems;
        }
        UpdateProgressText();
    }

    public void UpdateProgress()
    {
        placedItems++;

        if (progressSlider != null)
        {
            progressSlider.DOValue(startProgressItems + placedItems, 0.3f);
        }

        UpdateProgressText();

        if (progressText != null)
        {
            progressText.transform.DOKill();
            var sequence = DOTween.Sequence();
            sequence.Append(progressText.transform.DOScale(1.2f, 0.1f).SetEase(Ease.OutBack));
            // sequence.Join(progressText.DOColor(Color.green, 0.1f));
            sequence.AppendInterval(0.3f);
            sequence.Append(progressText.transform.DOScale(1f, 0.1f));
            // sequence.Join(progressText.DOColor(originalTextColor, 0.1f));
        }
    }

    private void UpdateProgressText()
    {
        if (progressText != null)
        {
            int currentProgress = startProgressItems + placedItems;
            progressText.text = $"{currentProgress}/{maxProgressItems}";
        }
    }
}
