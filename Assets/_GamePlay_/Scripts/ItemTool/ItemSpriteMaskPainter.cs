using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

[RequireComponent(typeof(Collider))]
public class ItemSpriteMaskPainter : MonoBehaviour
{
    private struct BrushStamp
    {
        public SpriteMask mask;
        public BrushMaskUnit poolUnit;
        public PoolType poolType;
    }

    [Header("--- BRUSH MASK ---")]
    public SpriteMask brushMaskPrefab;
    [Tooltip("Prefab hình vuông/chữ nhật để vẽ nét nối. Nếu để trống sẽ dùng kiểu vẽ chấm bi cũ (nặng máy hơn).")]
    public SpriteMask brushLinePrefab;
    public bool useBrushMaskPool = true;
    public PoolType brushMaskPoolType = PoolType.BrushMask;
    
    [Header("--- BRUSH LINE POOL ---")]
    public bool useBrushLinePool = true;
    public PoolType brushLinePoolType = PoolType.BrushLineMask;

    public Transform brushParent;
    [Header("--- BRUSH CONFIG ---")]
    public float brushRadius = 0.5f;
    public float brushDiameterAtScaleOne = 1f;
    public bool scaleBrushFromRadius = true;
    public float brushSpacing = 0.1f;
    public float brushZOffset = 0.01f;
    
    public bool IsPlayingPaintFx => isPlayingPaintFx;

    [Header("--- MASK SORTING OVERRIDE ---")]
    public bool overrideMaskSorting = false;
    public string maskSortingLayerName = "Default";

    [Header("--- PAINT AREA ---")]
    public Collider paintAreaCollider;
    public Transform paintPlaneCenter;
    [Range(0.01f, 1f)] public float requiredPercent = 0.85f;
    [Range(4, 80)] public int sampleColumns = 24;
    [Range(4, 80)] public int sampleRows = 16;
    public bool resetOnEnable = true;

    [Header("--- EVENTS ---")]
    public UnityEvent onPaintBegin;
    public UnityEvent onPaint;
    public UnityEvent onPaintComplete;

    private readonly List<BrushStamp> spawnedBrushes = new List<BrushStamp>();
    public bool IsPainting => isPainting;
    private bool[] coveredSamples;
    private Bounds paintBounds;
    private Plane paintPlane;
    private Camera mainCam;
    private bool isPainting;
    private bool isComplete;
    private bool hasLastPoint;
    private Vector3 lastPaintPoint;
    private int coveredCount;
    private int totalSamples;
    private bool isPlayingPaintFx;

    private void Awake()
    {
        mainCam = Camera.main;
        if (paintAreaCollider == null) paintAreaCollider = GetComponent<Collider>();
        if (brushParent == null) brushParent = transform;
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

        for (int i = 0; i < spawnedBrushes.Count; i++)
        {
            ReleaseBrush(spawnedBrushes[i]);
        }

        spawnedBrushes.Clear();
        coveredCount = 0;
        isPainting = false;
        isComplete = false;
        hasLastPoint = false;

        CacheSamples();
    }

    public void BeginPaintAtWorldPoint(Vector3 worldPoint)
    {
        if (!enabled || isComplete || !HasBrushSource()) return;

        BeginPaintSession();
        PaintAtWorldPoint(worldPoint);
    }

    public void PaintAtWorldPoint(Vector3 worldPoint)
    {
        if (!isPainting || isComplete || !HasBrushSource()) return;

        PaintAtPoint(ProjectPointToPaintPlane(worldPoint));
    }

    private void BeginPaintSession()
    {
        if (coveredSamples == null || coveredSamples.Length == 0)
        {
            CacheSamples();
        }

        isPainting = true;
        hasLastPoint = false;
        paintPlane = CreatePaintPlane();

        onPaintBegin?.Invoke();
    }

    private void PaintAtPoint(Vector3 point)
    {
        if (!IsPointInsidePaintArea(point))
        {
            StopPaintFx();
            return;
        }

        if (!hasLastPoint)
        {
            Stamp(point);
            lastPaintPoint = point;
            hasLastPoint = true;
            
            onPaint?.Invoke();
            CheckComplete();
        }
        else
        {
            float distance = Vector3.Distance(lastPaintPoint, point);
            if (distance >= brushSpacing)
            {
                StampLine(lastPaintPoint, point);
                lastPaintPoint = point;
                
                onPaint?.Invoke();
                CheckComplete();
            }
        }
    }

    public void EndPaint()
    {
        isPainting = false;
        hasLastPoint = false;
        StopPaintFx();
    }

    /// <summary>
    /// Hàm xử lý tổng quát được gọi từ bên ngoài (ví dụ: ItemDragSpriteMaskPainter).
    /// Tự động gọi BeginPaint hoặc Paint tùy theo trạng thái.
    /// </summary>
    /// <param name="worldPoint">Vị trí paint trong không gian thế giới.</param>
    public void ProcessPaint(Vector3 worldPoint)
    {
        if (!enabled || isComplete) return;

        if (!isPainting)
        {
            BeginPaintAtWorldPoint(worldPoint);
        }
        else
        {
            PaintAtWorldPoint(worldPoint);
        }
    }

    private void StampLine(Vector3 from, Vector3 to)
    {
        float distance = Vector3.Distance(from, to);
        int steps = Mathf.Max(1, Mathf.CeilToInt(distance / Mathf.Max(0.001f, brushSpacing)));

        if (brushLinePrefab != null && distance > 0.01f)
        {
            // 1. Sinh ra nét nối (Hình chữ nhật)
            Vector3 midPoint = (from + to) / 2f;
            Vector3 stampPos = midPoint + mainCam.transform.forward * brushZOffset;
            
            BrushStamp lineStamp = SpawnBrushLine(stampPos);
            SpriteMask lineMask = lineStamp.mask;

            if (lineMask != null)
            {
                float radiusScale = (brushRadius * 2f) / Mathf.Max(0.001f, brushDiameterAtScaleOne);
                
                // Đặt Scale: Trục X = độ dài nét kéo, Trục Y = độ dày nét vẽ (đường kính)
                lineMask.transform.localScale = new Vector3(distance, radiusScale, lineMask.transform.localScale.z);
                
                // Xoay nét nối theo hướng kéo (quanh trục Z)
                Vector3 direction = to - from;
                float angle = Mathf.Atan2(direction.y, direction.x) * Mathf.Rad2Deg;
                lineMask.transform.rotation = Quaternion.AngleAxis(angle, Vector3.forward);

                spawnedBrushes.Add(lineStamp);
            }
            
            // 2. Vẫn sinh ra 1 hình tròn ở điểm cuối để nét được bo tròn
            Stamp(to);

            // 3. Vẫn đánh dấu các điểm bên dưới (để tính % làm sạch) mà không cần sinh rác
            for (int i = 1; i <= steps; i++)
            {
                Vector3 pt = Vector3.Lerp(from, to, i / (float)steps);
                MarkCoveredSamples(pt);
            }
        }
        else
        {
            // Phương pháp cũ: Sinh ra hàng loạt hình tròn
            for (int i = 1; i <= steps; i++)
            {
                Vector3 point = Vector3.Lerp(from, to, i / (float)steps);
                Stamp(point);
            }
        }
    }

    private void Stamp(Vector3 point)
    {
        Vector3 stampPos = point + mainCam.transform.forward * brushZOffset;
        BrushStamp brushStamp = SpawnBrush(stampPos);
        SpriteMask mask = brushStamp.mask;
        if (mask == null)
        {
            StopPaintFx();
            return;
        }

        if (scaleBrushFromRadius)
        {
            float scale = (brushRadius * 2f) / Mathf.Max(0.001f, brushDiameterAtScaleOne);
            mask.transform.localScale = new Vector3(scale, scale, mask.transform.localScale.z);
        }

        StartPaintFx();
        spawnedBrushes.Add(brushStamp);
        MarkCoveredSamples(point);
    }

    private BrushStamp SpawnBrush(Vector3 stampPos)
    {
        if (useBrushMaskPool && Ply_Pool.Ins != null)
        {
            BrushMaskUnit brushMaskUnit = Ply_Pool.Ins.Spawn<BrushMaskUnit>(brushMaskPoolType, stampPos, Quaternion.identity);
            if (brushMaskUnit != null)
            {
                Transform brushTransform = brushMaskUnit.transform;
                brushTransform.SetParent(brushParent, true);
                
                SpriteMask unitMask = brushMaskUnit.spriteMask != null ? brushMaskUnit.spriteMask : brushMaskUnit.GetComponent<SpriteMask>();
                ApplyMaskSortingOverride(unitMask);

                return new BrushStamp
                {
                    mask = unitMask,
                    poolUnit = brushMaskUnit,
                    poolType = brushMaskPoolType
                };
            }
        }

        if (brushMaskPrefab == null) return default;

        SpriteMask prefabMask = Instantiate(brushMaskPrefab, stampPos, Quaternion.identity, brushParent);
        ApplyMaskSortingOverride(prefabMask);
        return new BrushStamp { mask = prefabMask, poolUnit = null };
    }

    private BrushStamp SpawnBrushLine(Vector3 stampPos)
    {
        if (useBrushLinePool && Ply_Pool.Ins != null)
        {
            BrushMaskUnit lineUnit = Ply_Pool.Ins.Spawn<BrushMaskUnit>(brushLinePoolType, stampPos, Quaternion.identity);
            if (lineUnit != null)
            {
                Transform lineTransform = lineUnit.transform;
                lineTransform.SetParent(brushParent, true);
                
                SpriteMask unitMask = lineUnit.spriteMask != null ? lineUnit.spriteMask : lineUnit.GetComponent<SpriteMask>();
                ApplyMaskSortingOverride(unitMask);

                return new BrushStamp
                {
                    mask = unitMask,
                    poolUnit = lineUnit,
                    poolType = brushLinePoolType
                };
            }
        }

        if (brushLinePrefab == null) return default;

        SpriteMask prefabMask = Instantiate(brushLinePrefab, stampPos, Quaternion.identity, brushParent);
        ApplyMaskSortingOverride(prefabMask);
        return new BrushStamp { mask = prefabMask, poolUnit = null };
    }

    private void ApplyMaskSortingOverride(SpriteMask mask)
    {
        if (mask != null && overrideMaskSorting)
        {
            mask.isCustomRangeActive = true;
            
            int layerId = SortingLayer.NameToID(maskSortingLayerName);
            mask.frontSortingLayerID = layerId;
            mask.backSortingLayerID = layerId;
        
        }
    }

    private bool HasBrushSource()
    {
        return brushMaskPrefab != null || useBrushMaskPool && Ply_Pool.Ins != null && Ply_Pool.Ins.GetPrefab(brushMaskPoolType) != null;
    }

    private void ReleaseBrush(BrushStamp brushStamp)
    {
        if (brushStamp.poolUnit != null && Ply_Pool.Ins != null)
        {
            Ply_Pool.Ins.Despawn(brushStamp.poolType, brushStamp.poolUnit);
            return;
        }

        if (brushStamp.mask != null)
        {
            Destroy(brushStamp.mask.gameObject);
        }
    }

    private void CacheSamples()
    {
        if (paintAreaCollider == null) paintAreaCollider = GetComponent<Collider>();
        paintBounds = paintAreaCollider != null ? paintAreaCollider.bounds : new Bounds(transform.position, Vector3.one);

        totalSamples = sampleColumns * sampleRows;
        coveredSamples = new bool[totalSamples];
    }

    private void MarkCoveredSamples(Vector3 brushCenter)
    {
        if (coveredSamples == null) return;

        float radiusSqr = brushRadius * brushRadius;

        for (int y = 0; y < sampleRows; y++)
        {
            for (int x = 0; x < sampleColumns; x++)
            {
                int index = y * sampleColumns + x;
                if (coveredSamples[index]) continue;

                Vector3 sample = GetSamplePoint(x, y);
                if ((sample - brushCenter).sqrMagnitude <= radiusSqr)
                {
                    coveredSamples[index] = true;
                    coveredCount++;
                }
            }
        }
    }

    private Vector3 GetSamplePoint(int x, int y)
    {
        float u = sampleColumns <= 1 ? 0.5f : x / (float)(sampleColumns - 1);
        float v = sampleRows <= 1 ? 0.5f : y / (float)(sampleRows - 1);
        return new Vector3(
            Mathf.Lerp(paintBounds.min.x, paintBounds.max.x, u),
            Mathf.Lerp(paintBounds.min.y, paintBounds.max.y, v),
            paintBounds.center.z
        );
    }

    private void CheckComplete()
    {
        if (isComplete || totalSamples <= 0) return;

        if (GetProgress01() >= requiredPercent)
        {
            isComplete = true;
            isPainting = false;
            StopPaintFx();
            onPaintComplete?.Invoke();
        }
    }

    private void StartPaintFx()
    {
        if (isPlayingPaintFx || Ply_SoundManager.Ins == null) return;

        isPlayingPaintFx = true;
        // Ply_SoundManager.Ins.PlayFxLoop(FxType.PaintSauce);
    }

    private void StopPaintFx()
    {
        if (!isPlayingPaintFx) return;

        isPlayingPaintFx = false;
        if (Ply_SoundManager.Ins != null)
        {
            // Ply_SoundManager.Ins.StopFxLoop(FxType.PaintSauce);
        }
    }

    private Plane CreatePaintPlane()
    {
        Vector3 center = paintPlaneCenter != null ? paintPlaneCenter.position : transform.position;
        return new Plane(-mainCam.transform.forward, center);
    }

    private Vector3 GetMouseOnPaintPlane()
    {
        Ray ray = mainCam.ScreenPointToRay(Input.mousePosition);
        if (paintPlane.Raycast(ray, out float enter))
        {
            return ray.GetPoint(enter);
        }

        return paintPlaneCenter != null ? paintPlaneCenter.position : transform.position;
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
        if (totalSamples <= 0) return 0f;
        return coveredCount / (float)totalSamples;
    }

#if UNITY_EDITOR
    private void OnDrawGizmosSelected()
    {
        var collider = paintAreaCollider;
        if (collider == null)
        {
            collider = GetComponent<Collider>();
            if (collider == null) return;
        }

        Bounds currentBounds = collider.bounds;

        // Draw the outline of the paint area
        Gizmos.color = Color.cyan;
        Gizmos.DrawWireCube(currentBounds.center, currentBounds.size);

        if (sampleColumns <= 0 || sampleRows <= 0) return;

        // Determine a reasonable size for the sample point gizmos
        float gizmoRadius = Mathf.Min(currentBounds.size.x / sampleColumns, currentBounds.size.y / sampleRows) * 0.15f;

        for (int y = 0; y < sampleRows; y++)
        {
            for (int x = 0; x < sampleColumns; x++)
            {
                // This logic is duplicated from GetSamplePoint to work in the editor without needing instance state
                float u = sampleColumns <= 1 ? 0.5f : x / (float)(sampleColumns - 1);
                float v = sampleRows <= 1 ? 0.5f : y / (float)(sampleRows - 1);
                Vector3 samplePoint = new Vector3(
                    Mathf.Lerp(currentBounds.min.x, currentBounds.max.x, u),
                    Mathf.Lerp(currentBounds.min.y, currentBounds.max.y, v),
                    currentBounds.center.z
                );

                // In play mode, color the gizmos based on whether they are covered
                if (Application.isPlaying && coveredSamples != null && totalSamples > 0 && coveredSamples.Length == totalSamples)
                {
                    int index = y * sampleColumns + x;
                    Gizmos.color = coveredSamples[index] ? Color.green : Color.red;
                }
                else
                {
                    Gizmos.color = Color.yellow;
                }
                Gizmos.DrawSphere(samplePoint, gizmoRadius);
            }
        }
    }
#endif
}
