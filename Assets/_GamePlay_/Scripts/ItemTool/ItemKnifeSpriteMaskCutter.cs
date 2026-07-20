using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.Serialization;

[RequireComponent(typeof(Collider))]
public class ItemKnifeSpriteMaskCutter : MonoBehaviour
{
    public enum CutPieceColor
    {
        Green,
        Yellow
    }

    [Header("--- KNIFE ---")]
    public Transform knifeTransform;
    [Tooltip("Khoang cach tu pivot cua dao den mep luoi dao tren truc X local.")]
    public float bladeLocalXOffset = 0f;
    public float leftX = -2f;
    public float rightX = 2f;
    public float cutStep = 0.35f;
    public Vector3 knifeDownLocalOffset = new Vector3(0f, -0.6f, 0f);
    public float chopDuration = 0.12f;
    public float slideDuration = 0.16f;
    public Ease chopEase = Ease.InQuad;
    public Ease slideEase = Ease.OutQuad;

    [Header("--- SPRITE MASKS ---")]
    [FormerlySerializedAs("slicedMask")]
    [Tooltip("Mask con cua dao, reveal phan do an da cat trong luc dao di chuyen.")]
    public Transform knifeChildMask;
    [FormerlySerializedAs("doneMask")]
    [Tooltip("Object do an da cat xong, khong dung SpriteMaskInteraction. Se bat len khi cat xong.")]
    public GameObject itemDone;
    [Tooltip("GameObject chua cac sprite cu dang dung SpriteMaskInteraction. Se tat khi cat xong.")]
    public GameObject maskInteractionSpritesObject;
    [Tooltip("Chieu rong cua sprite mask khi scale X = 1.")]
    public float maskWidthAtScaleOne = 1f;
    public bool resetOnEnable = true;

    [Header("--- DONE MOVE ---")]
    [Tooltip("Target localPosition de dao di toi sau khi cat xong.")]
    public Transform knifeDoneTarget;
    public float knifeDoneMoveDuration = 0.25f;
    public Ease knifeDoneMoveEase = Ease.InBack;

    [Header("--- PIECE FX ---")]
    public CutPieceColor cutPieceColor = CutPieceColor.Green;

    [Header("--- GIZMOS ---")]
    public bool drawGizmos = true;
    [Tooltip("Transform dung lam he toa do local de ve gizmos. De trong se dung transform hien tai.")]
    public Transform gizmoLocalRoot;
    public float gizmoHeight = 0.8f;
    public float gizmoTickHeight = 0.12f;
    public float gizmoLocalY = 0f;
    public float gizmoLocalZ = 0f;
    public Color rangeGizmoColor = Color.yellow;
    public Color leftGizmoColor = Color.red;
    public Color rightGizmoColor = Color.green;
    public Color currentCutGizmoColor = Color.cyan;
    public Color bladeGizmoColor = Color.magenta;

    [Header("--- EVENTS ---")]
    public UnityEvent onCut;
    public UnityEvent onCutComplete;
    public UnityEvent onKnifeArriveDoneTarget;

    private bool isCutting;
    private bool isComplete;
    private float currentX;
    private Vector3 knifeBaseLocalPos;
    private Sequence cutSequence;
    private Item item;

    private void Awake()
    {
        item = GetComponent<Item>();
        if (knifeTransform == null) knifeTransform = transform;
        knifeBaseLocalPos = knifeTransform.localPosition;
    }

    private void OnEnable()
    {
        if (resetOnEnable)
        {
            ResetCut();
        }
    }

    private void OnDisable()
    {
        cutSequence?.Kill();
    }

    public void ResetCut()
    {
        isCutting = false;
        isComplete = false;
        currentX = leftX;
        if (maskInteractionSpritesObject != null) maskInteractionSpritesObject.SetActive(true);
        if (itemDone != null) itemDone.SetActive(false);

        if (knifeTransform != null)
        {
            knifeTransform.gameObject.SetActive(true);
            knifeTransform.DOKill();
            knifeBaseLocalPos.x = leftX - bladeLocalXOffset;
            knifeTransform.localPosition = knifeBaseLocalPos;
        }

        UpdateMasks();
    }

    public void PerformCut()
    {
        if (!enabled || isCutting || isComplete || knifeTransform == null) return;

        isCutting = true;
        onCut?.Invoke();
        SpawnCutPiece();

        Vector3 startPos = knifeTransform.localPosition;
        Vector3 downPos = startPos + knifeDownLocalOffset;
        float targetCutLineX = Mathf.Min(currentX + cutStep, rightX);
        float targetKnifeX = targetCutLineX - bladeLocalXOffset;

        cutSequence?.Kill();
        cutSequence = DOTween.Sequence();
        cutSequence.Append(knifeTransform.DOLocalMove(downPos, chopDuration).SetEase(chopEase));
        cutSequence.Append(knifeTransform.DOLocalMove(startPos, chopDuration).SetEase(Ease.OutQuad));
        cutSequence.Append(knifeTransform.DOLocalMoveX(targetKnifeX, slideDuration).SetEase(slideEase));
        cutSequence.OnUpdate(() =>
        {
            currentX = Mathf.Clamp(knifeTransform.localPosition.x + bladeLocalXOffset, leftX, rightX);
            UpdateMasks();
        });
        cutSequence.OnComplete(() =>
        {
            currentX = targetCutLineX;
            knifeBaseLocalPos = knifeTransform.localPosition;
            UpdateMasks();

            isCutting = false;
            if (currentX >= rightX)
            {
                CompleteCut();
            }
        });
    }

    private void SpawnCutPiece()
    {
        if (item == null) return;

        if (cutPieceColor == CutPieceColor.Green)
        {
            item.SpawnGreenPiece();
            return;
        }

        item.SpawnYellowPiece();
    }

    private void UpdateMasks()
    {
        float clampedX = Mathf.Clamp(currentX, leftX, rightX);
        float slicedWidth = clampedX - leftX;

        ApplyKnifeChildMask(slicedWidth);
    }

    private void CompleteCut()
    {
        isComplete = true;
        if (maskInteractionSpritesObject != null) maskInteractionSpritesObject.SetActive(false);
        if (itemDone != null) itemDone.SetActive(true);
        if (knifeChildMask != null) knifeChildMask.gameObject.SetActive(false);

        if (knifeTransform == null)
        {
            onCutComplete?.Invoke();
            return;
        }

        if (knifeDoneTarget == null)
        {
            knifeTransform.gameObject.SetActive(false);
            onCutComplete?.Invoke();
            return;
        }

        cutSequence = DOTween.Sequence();
        cutSequence.Append(knifeTransform.DOLocalMove(knifeDoneTarget.localPosition, knifeDoneMoveDuration).SetEase(knifeDoneMoveEase));
        cutSequence.OnComplete(() =>
        {
            onKnifeArriveDoneTarget?.Invoke();
            knifeTransform.gameObject.SetActive(false);
            onCutComplete?.Invoke();
        });
    }

    private void ApplyKnifeChildMask(float width)
    {
        if (knifeChildMask == null) return;

        bool hasWidth = width > 0.001f;
        knifeChildMask.gameObject.SetActive(hasWidth);
        if (!hasWidth) return;

        Vector3 pos = knifeChildMask.localPosition;
        pos.x = bladeLocalXOffset - width * 0.5f;
        knifeChildMask.localPosition = pos;

        Vector3 scale = knifeChildMask.localScale;
        scale.x = width / Mathf.Max(0.001f, maskWidthAtScaleOne);
        knifeChildMask.localScale = scale;
    }

    public float GetProgress01()
    {
        return Mathf.InverseLerp(leftX, rightX, currentX);
    }

    private void OnDrawGizmos()
    {
        if (!drawGizmos) return;

        Transform root = gizmoLocalRoot != null ? gizmoLocalRoot : transform;
        float previewCutX = GetPreviewCutX();
        float previewBladeX = previewCutX - bladeLocalXOffset;

        DrawLocalVerticalLine(root, leftX, gizmoHeight, leftGizmoColor);
        DrawLocalVerticalLine(root, rightX, gizmoHeight, rightGizmoColor);
        DrawLocalHorizontalLine(root, leftX, rightX, rangeGizmoColor);

        float safeStep = Mathf.Abs(cutStep);
        if (safeStep > 0.001f)
        {
            for (float x = leftX + safeStep; x < rightX - 0.001f; x += safeStep)
            {
                DrawLocalVerticalLine(root, x, gizmoTickHeight, rangeGizmoColor);
            }
        }

        DrawLocalVerticalLine(root, previewCutX, gizmoHeight, currentCutGizmoColor);
        DrawLocalVerticalLine(root, previewBladeX, gizmoHeight * 0.7f, bladeGizmoColor);

        if (knifeTransform != null)
        {
            Vector3 knifeLocal = GetLocalPointInRoot(root, knifeTransform);
            Vector3 downLocal = knifeLocal + knifeDownLocalOffset;
            Gizmos.color = bladeGizmoColor;
            Gizmos.DrawLine(root.TransformPoint(knifeLocal), root.TransformPoint(downLocal));
            Gizmos.DrawWireSphere(root.TransformPoint(downLocal), 0.04f);
        }

#if UNITY_EDITOR
        DrawLocalLabel(root, leftX, gizmoHeight, "leftX");
        DrawLocalLabel(root, rightX, gizmoHeight, "rightX");
        DrawLocalLabel(root, previewCutX, gizmoHeight, "cut localX");
        DrawLocalLabel(root, previewBladeX, gizmoHeight * 0.7f, "blade localX");
#endif
    }

    private float GetPreviewCutX()
    {
        if (Application.isPlaying)
        {
            return Mathf.Clamp(currentX, leftX, rightX);
        }

        if (knifeTransform != null)
        {
            return Mathf.Clamp(knifeTransform.localPosition.x + bladeLocalXOffset, leftX, rightX);
        }

        return leftX;
    }

    private Vector3 GetLocalPointInRoot(Transform root, Transform target)
    {
        return root.InverseTransformPoint(target.position);
    }

    private Vector3 GetLocalPoint(float localX)
    {
        return new Vector3(localX, gizmoLocalY, gizmoLocalZ);
    }

    private void DrawLocalVerticalLine(Transform root, float localX, float halfHeight, Color color)
    {
        Vector3 bottom = GetLocalPoint(localX) + Vector3.down * halfHeight;
        Vector3 top = GetLocalPoint(localX) + Vector3.up * halfHeight;
        Gizmos.color = color;
        Gizmos.DrawLine(root.TransformPoint(bottom), root.TransformPoint(top));
    }

    private void DrawLocalHorizontalLine(Transform root, float fromLocalX, float toLocalX, Color color)
    {
        Gizmos.color = color;
        Gizmos.DrawLine(root.TransformPoint(GetLocalPoint(fromLocalX)), root.TransformPoint(GetLocalPoint(toLocalX)));
    }

#if UNITY_EDITOR
    private void DrawLocalLabel(Transform root, float localX, float halfHeight, string label)
    {
        Vector3 localPos = GetLocalPoint(localX) + Vector3.up * (halfHeight + 0.08f);
        UnityEditor.Handles.Label(root.TransformPoint(localPos), $"{label}: {localX:0.###}");
    }
#endif
}
