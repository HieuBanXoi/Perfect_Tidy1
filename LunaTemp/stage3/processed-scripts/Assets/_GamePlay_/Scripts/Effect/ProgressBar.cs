using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;
using System;

public class ProgressBar : Ply_GameUnit
{
    [Header("--- UI COMPONENTS ---")]
    [Tooltip("Keo object chua anh fill cua Progress Bar vao day")]
    public Transform fillTransform;

    private Tween fillTween;

    public override void Awake()
    {
        base.Awake();
        if (tf == null)
        {
            tf = transform;
        }
    }

    private void OnEnable()
    {
        SetProgress(0f);
    }

    public void StartProgress(float duration, Action onComplete = null)
    {
        if (fillTransform == null) return;

        SetProgress(0f);
        fillTween?.Kill();

        fillTween = fillTransform.DOScaleX(1f, duration).SetEase(Ease.Linear).OnComplete(() =>
        {
            onComplete?.Invoke();
            DeSpawn();
        });
    }

    public void StopProgress()
    {
        fillTween?.Kill();
        DeSpawn();
    }

    public void SetProgress(float progress)
    {
        if (fillTransform == null) return;

        Vector3 scale = fillTransform.localScale;
        scale.x = Mathf.Clamp01(progress);
        fillTransform.localScale = scale;
    }

    private void DeSpawn()
    {
        if (Ply_Pool.Ins != null)
        {
            Ply_Pool.Ins.Despawn(PoolType.ProgressBar, this);
        }
    }

    private void OnDisable()
    {
        fillTween?.Kill();
    }
}
