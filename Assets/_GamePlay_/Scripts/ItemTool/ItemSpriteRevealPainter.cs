using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

/// <summary>
/// Loại paint không spawn brush mask mà thay vào đó có các target SpriteRenderer.
/// Khi paint trúng một target sprite → fade alpha của sprite đó lên 1.
/// Khi TẤT CẢ target sprites đã đạt alpha = 1 → gọi onPaintComplete.
/// </summary>

public class ItemSpriteRevealPainter : MonoBehaviour
{
    [System.Serializable]
    public class RevealTarget
    {
        [Tooltip("Sprite cần được reveal (paint trúng sẽ fade alpha lên 1)")]
        public SpriteRenderer targetSprite;

        [Tooltip("Bán kính kiểm tra khoảng cách 2D (XY) giữa điểm paint và vị trí sprite")]
        [Min(0.01f)] public float hitRadius = 0.5f;

        [Tooltip("Tốc độ fade (alpha / giây)")]
        [Min(0.01f)] public float fadeSpeed = 2f;

        [Tooltip("Ngưỡng alpha để coi là 'complete' (0..1)")]
        [Range(0.9f, 1f)] public float completeThreshold = 0.98f;

        [HideInInspector] public bool isRevealed = false;
    }

    [Header("--- REVEAL TARGETS ---")]
    [Tooltip("Danh sách các sprite sẽ được reveal khi paint trúng")]
    public List<RevealTarget> revealTargets = new List<RevealTarget>();

    [Tooltip("Alpha ban đầu của các target sprite (trước khi reveal)")]
    [Range(0f, 1f)] public float initialAlpha = 0f;

    [Header("--- PAINT AREA ---")]
    public Collider paintAreaCollider;
    public bool resetOnEnable = true;

    [Header("--- EVENTS ---")]
    public UnityEvent onPaintBegin;
    public UnityEvent onPaint;
    public UnityEvent onPaintComplete;

    public bool IsPlayingPaintFx => isPlayingPaintFx;

    private Camera mainCam;
    private bool isPainting;
    private bool isComplete;
    private bool isPlayingPaintFx;
    private Plane paintPlane;
    private Vector3 paintPlaneCenter;

    private void Awake()
    {
        mainCam = Camera.main;
        if (paintAreaCollider == null) paintAreaCollider = GetComponent<Collider>();
    }

    private void OnEnable()
    {
        if (resetOnEnable)
        {
            ResetPaint();
        }
    }

    private void OnDisable()
    {
        StopPaintFx();
    }

    public void ResetPaint()
    {
        StopPaintFx();
        isPainting = false;
        isComplete = false;

        for (int i = 0; i < revealTargets.Count; i++)
        {
            var target = revealTargets[i];
            if (target == null || target.targetSprite == null) continue;

            target.isRevealed = false;
            Color c = target.targetSprite.color;
            c.a = initialAlpha;
            target.targetSprite.color = c;
        }
    }

    public void BeginPaint()
    {
        if (!enabled || isComplete) return;
        BeginPaintSession();
        Paint();
    }

    public void BeginPaintAtWorldPoint(Vector3 worldPoint)
    {
        if (!enabled || isComplete) return;
        BeginPaintSession();
        PaintAtWorldPoint(worldPoint);
    }

    public void Paint()
    {
        if (!isPainting || isComplete) return;

        Vector3 point = GetMouseOnPaintPlane();
        PaintAtPoint(point);
    }

    public void PaintAtWorldPoint(Vector3 worldPoint)
    {
        if (!isPainting || isComplete) return;

        Vector3 point = ProjectPointToPaintPlane(worldPoint);
        PaintAtPoint(point);
    }

    private void BeginPaintSession()
    {
        isPainting = true;
        paintPlaneCenter = paintAreaCollider != null ? paintAreaCollider.bounds.center : transform.position;
        paintPlane = new Plane(-mainCam.transform.forward, paintPlaneCenter);

        onPaintBegin?.Invoke();
    }

    private void PaintAtPoint(Vector3 point)
    {
        if (!IsPointInsidePaintArea(point))
        {
            StopPaintFx();
            return;
        }

        bool hitAny = false;
        for (int i = 0; i < revealTargets.Count; i++)
        {
            var target = revealTargets[i];
            if (target == null || target.targetSprite == null || target.isRevealed) continue;

            if (IsHittingTarget(target, point))
            {
                hitAny = true;
                RevealTargets(target);
            }
        }

        if (hitAny)
        {
            StartPaintFx();
            onPaint?.Invoke();
            CheckComplete();
        }
        else
        {
            StopPaintFx();
        }
    }

    private bool IsHittingTarget(RevealTarget target, Vector3 paintPoint)
    {
        if (target.targetSprite == null) return false;

        // Kiểm tra khoảng cách 2D (XY) giữa điểm paint và vị trí sprite
        Vector2 spritePos2D = target.targetSprite.transform.position;
        Vector2 paintPos2D  = paintPoint;
        float distSqr = (spritePos2D - paintPos2D).sqrMagnitude;
        return distSqr <= target.hitRadius * target.hitRadius;
    }

    private void RevealTargets(RevealTarget target)
    {
        if (target.targetSprite == null) return;

        Color c = target.targetSprite.color;
        c.a = Mathf.MoveTowards(c.a, 1f, target.fadeSpeed * Time.deltaTime);
        target.targetSprite.color = c;

        if (c.a >= target.completeThreshold)
        {
            // Đảm bảo alpha = 1 chính xác
            c.a = 1f;
            target.targetSprite.color = c;
            target.isRevealed = true;
        }
    }

    public void EndPaint()
    {
        isPainting = false;
        StopPaintFx();
    }

    private void CheckComplete()
    {
        if (isComplete) return;

        for (int i = 0; i < revealTargets.Count; i++)
        {
            var target = revealTargets[i];
            if (target == null || target.targetSprite == null) continue;
            if (!target.isRevealed) return;
        }

        isComplete = true;
        isPainting = false;
        StopPaintFx();
        onPaintComplete?.Invoke();
    }

    private void StartPaintFx()
    {
        if (isPlayingPaintFx) return;
        isPlayingPaintFx = true;
    }

    private void StopPaintFx()
    {
        if (!isPlayingPaintFx) return;
        isPlayingPaintFx = false;
    }

    private Vector3 GetMouseOnPaintPlane()
    {
        Ray ray = mainCam.ScreenPointToRay(Input.mousePosition);
        if (paintPlane.Raycast(ray, out float enter))
        {
            return ray.GetPoint(enter);
        }
        return paintPlaneCenter;
    }

    private Vector3 ProjectPointToPaintPlane(Vector3 worldPoint)
    {
        return worldPoint - paintPlane.normal * paintPlane.GetDistanceToPoint(worldPoint);
    }

    private bool IsPointInsidePaintArea(Vector3 point)
    {
        if (paintAreaCollider == null) return true;

        Vector3 closest = paintAreaCollider.ClosestPoint(point);
        return (closest - point).sqrMagnitude <= 0.0001f;
    }

    public float GetProgress01()
    {
        if (revealTargets == null || revealTargets.Count == 0) return 0f;

        int revealedCount = 0;
        for (int i = 0; i < revealTargets.Count; i++)
        {
            if (revealTargets[i] != null && revealTargets[i].isRevealed)
                revealedCount++;
        }
        return revealedCount / (float)revealTargets.Count;
    }

#if UNITY_EDITOR
    private void OnDrawGizmosSelected()
    {
        // Vẽ vùng paint area
        if (paintAreaCollider != null)
        {
            Gizmos.color = Color.cyan;
            Gizmos.DrawWireCube(paintAreaCollider.bounds.center, paintAreaCollider.bounds.size);
        }

        // Vẽ hit collider của từng target
        for (int i = 0; i < revealTargets.Count; i++)
        {
            var target = revealTargets[i];
            if (target == null || target.targetSprite == null) continue;

            
            
                // Dùng sprite bounds
                Gizmos.color = target.isRevealed ? Color.green : Color.yellow;
                Gizmos.DrawSphere(target.targetSprite.transform.position, target.hitRadius);
            
        }
    }
#endif
}
