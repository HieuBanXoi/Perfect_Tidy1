using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

[System.Serializable]
public class ScreenScaleStep
{
    [Tooltip("Neu ty le Chieu cao / Chieu rong lon hon muc nay")]
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
    public Transform downloadBtn;
    public Transform horizontalDownloadBtn;
    public Animator textAnim;
    [LunaPlaygroundField("Google Build", 0, "Build Settings")]
    public bool isGoogleBuild = false;

    public float screenWidth;
    public float screenHeight;
    public float scaleHeightOnWidth;
    public bool isVertical;
    public bool isScreenVertical;
    public Camera cam;

    [Header("--- UI ORIENTATION SETTINGS ---")]
    [Tooltip("Neu ty le Chieu cao / Chieu rong >= muc nay thi dung verticalUI, nguoc lai dung horizontalUI. Mac dinh 1 = cao hon rong.")]
    public float verticalUIHeightOnWidthRatio = 0.6f;

    [Header("--- SCREEN SCALE SETTINGS ---")]
    [Tooltip("Bat de tu can lai camera khi thay doi thong so trong Inspector.")]
    public bool scaleCameraOnValidate = false;

    [Tooltip("Neu ty le Chieu cao / Chieu rong >= muc nay thi tinh la man doc khi scale camera, nguoc lai tinh la man ngang.")]
    public float screenVerticalHeightOnWidthRatio = 1f;

    [Tooltip("Bat de camera tang size lien tuc theo ty le man hinh. Tat de dung cac moc discrete ben duoi.")]
    public bool useContinuousScaling = false;

    [Header("- Continuous Scaling -")]
    [Tooltip("Orthographic size co ban, thuong dung cho man 16:9 doc.")]
    public float baseOrthographicSize = 6f;
    [Tooltip("Ty le Chieu cao / Chieu rong co ban. VD: 16:9 = 1.777")]
    public float baseAspect = 1.777f;

    [Header("- Discrete Scaling -")]
    [Tooltip("Ti le nhan voi baseOrthographicSize khi man hinh ngang.")]
    public float landscapeSizeRatio = 1f;
    [Tooltip("Ti le nhan voi baseOrthographicSize khi man hinh doc mac dinh.")]
    public float defaultPortraitSizeRatio = 1f;
    [Tooltip("Danh sach cac moc size theo ty le man hinh.")]
    public List<ScreenScaleStep> discreteScaleSteps = new List<ScreenScaleStep>
    {
        new ScreenScaleStep(1.4f, 6f),
        new ScreenScaleStep(1.9f, 6f),
        new ScreenScaleStep(2.0f, 6f),
        new ScreenScaleStep(2.1f, 6f),
        new ScreenScaleStep(2.3f, 6.75f)
    };

    [Header("--- PERSPECTIVE FIT SETTINGS ---")]
    [Tooltip("Bat de camera chay Perspective va fit bang khoang cach thay vi orthographicSize.")]
    public bool usePerspectiveCamera = true;
    [Tooltip("Tam man hinh can giu co dinh. Neu bo trong, he thong lay mot diem phia truoc camera luc Start.")]
    public Transform perspectiveFocus;
    [Tooltip("Khoang cach toi tam nhin khi khong gan perspectiveFocus. De 0 de tu tinh theo baseOrthographicSize va FOV.")]
    public float perspectiveFocusDistance = 0f;
    [Tooltip("He so du phong de noi dung khong sat mep man hinh.")]
    public float perspectivePadding = 1.05f;
    [Tooltip("Bat neu muon fit theo Renderer bounds that. Can gan boundsRoot hoac boundsRenderers.")]
    public bool fitRendererBounds = false;
    public Transform boundsRoot;
    public List<Renderer> boundsRenderers = new List<Renderer>();

    private Vector3 perspectiveFocusPoint;
    private bool hasPerspectiveCache;

    private void OnValidate()
    {
        verticalUIHeightOnWidthRatio = Mathf.Max(0.01f, verticalUIHeightOnWidthRatio);
        screenVerticalHeightOnWidthRatio = Mathf.Max(0.01f, screenVerticalHeightOnWidthRatio);
        baseAspect = Mathf.Max(0.01f, baseAspect);
        baseOrthographicSize = Mathf.Max(0.01f, baseOrthographicSize);
        landscapeSizeRatio = Mathf.Max(0.01f, landscapeSizeRatio);
        defaultPortraitSizeRatio = Mathf.Max(0.01f, defaultPortraitSizeRatio);
        perspectivePadding = Mathf.Max(1f, perspectivePadding);

        if (!scaleCameraOnValidate)
        {
            return;
        }

        GetScreenSize();
        GetSreenType();
        hasPerspectiveCache = false;

        float targetOrthographicSize = Mathf.Max(GetTargetOrthographicSize(), 0.01f);
        ApplyCameraScale(targetOrthographicSize);
    }

    protected void Start()
    {
        winUI.SetActive(false);
        loseUI.SetActive(false);
        ActiveDownloadButtons(!isGoogleBuild);
        CachePerspectiveCamera();
        UpdateUI();
    }

    private void Update()
    {
        if (Screen.width != screenWidth || Screen.height != screenHeight)
        {
            screenWidth = Screen.width;
            screenHeight = Screen.height;
            StartCoroutine(DelayUpdateUIRoutine());
        }
    }

    private IEnumerator DelayUpdateUIRoutine()
    {
        yield return null;
        UpdateUI();
    }

    public void UpdateUI()
    {
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
        scaleHeightOnWidth = GetScreenHeightOnWidthRatio();
        isVertical = scaleHeightOnWidth >= verticalUIHeightOnWidthRatio;
        isScreenVertical = scaleHeightOnWidth >= screenVerticalHeightOnWidthRatio;
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

        float targetOrthographicSize = Mathf.Max(GetTargetOrthographicSize(), 0.01f);
        ApplyCameraScale(targetOrthographicSize);
    }

    private float GetTargetOrthographicSize()
    {
        if (useContinuousScaling)
        {
            if (!isScreenVertical)
            {
                return GetLandscapeSize();
            }

            return GetDefaultPortraitSize() * (scaleHeightOnWidth / baseAspect);
        }

        if (!isScreenVertical)
        {
            return GetLandscapeSize();
        }

        float matchedSize = GetDefaultPortraitSize();
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

    private float GetScreenHeightOnWidthRatio()
    {
        return screenWidth > 0f ? screenHeight / screenWidth : 1f;
    }

    private float GetLandscapeSize()
    {
        return baseOrthographicSize * landscapeSizeRatio;
    }

    private float GetDefaultPortraitSize()
    {
        return baseOrthographicSize * defaultPortraitSizeRatio;
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

    private void FitPerspectiveCameraToBounds(Bounds bounds)
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

    public void ActiveDownloadButtons(bool isActive)
    {
        if (isGoogleBuild)
        {
            isActive = false;
        }

        if (downloadBtn != null)
        {
            downloadBtn.gameObject.SetActive(isActive);
        }

        if (horizontalDownloadBtn == null && horizontalUI != null)
        {
            horizontalDownloadBtn = FindChildByName(horizontalUI.transform, "DownloadBtn");
        }

        if (horizontalDownloadBtn != null && horizontalDownloadBtn != downloadBtn)
        {
            horizontalDownloadBtn.gameObject.SetActive(isActive);
        }
        textAnim.enabled = isActive;
    }

    private Transform FindChildByName(Transform root, string childName)
    {
        if (root == null)
        {
            return null;
        }

        foreach (Transform child in root.GetComponentsInChildren<Transform>(true))
        {
            if (child.name == childName)
            {
                return child;
            }
        }

        return null;
    }
}
