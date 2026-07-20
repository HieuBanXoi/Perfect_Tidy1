using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;
using System;

public class ClockTimer : Ply_GameUnit
{
    [Header("--- UI COMPONENTS ---")]
    [Tooltip("Image dang de Filled. Fill Amount se chay tu 1 ve 0.")]
    public Image fillImage;

    [Header("--- ZOOM ANIMATION ---")]
    [SerializeField] private float spawnZoomDuration = 0.25f;
    [SerializeField] private float despawnZoomDuration = 0.2f;

    private float duration;
    private float elapsedTime;
    private bool isCounting;
    private bool isDespawning;
    private bool usePool;
    private Action onComplete;
    private Vector3 defaultScale;
    private Tween scaleTween;
    private bool isPlayingClockFx;

    private static int activeClockFxCount;

    public override void Awake()
    {
        base.Awake();
        if (tf == null)
        {
            tf = transform;
        }

        if (fillImage == null)
        {
            fillImage = GetComponentInChildren<Image>(true);
        }

        defaultScale = transform.localScale;
    }

    private void OnEnable()
    {
        isDespawning = false;
        ResetFill();
    }

    private void Update()
    {
        if (!isCounting)
        {
            return;
        }

        elapsedTime += Time.deltaTime;
        float progress = duration <= 0f ? 1f : Mathf.Clamp01(elapsedTime / duration);

        if (fillImage != null)
        {
            fillImage.fillAmount = 1f - progress;
        }

        if (progress >= 1f)
        {
            CompleteCountdown();
        }
    }

    public static ClockTimer Spawn(Vector3 position, Quaternion rotation, float countdownDuration, Action onComplete = null)
    {
        if (Ply_Pool.Ins == null)
        {
            return null;
        }

        ClockTimer clockTimer = Ply_Pool.Ins.Spawn<ClockTimer>(PoolType.ClockTimer, position, rotation);
        if (clockTimer != null)
        {
            clockTimer.usePool = true;
            clockTimer.StartCountdown(countdownDuration, onComplete);
        }

        return clockTimer;
    }

    public static ClockTimer SpawnUI(
        ClockTimer prefab,
        RectTransform spawnPoint,
        float countdownDuration,
        Action onComplete = null)
    {
        if (prefab == null || spawnPoint == null)
        {
            return null;
        }

        ClockTimer clockTimer = Instantiate(prefab, spawnPoint);
        clockTimer.usePool = false;

        RectTransform rectTransform = clockTimer.transform as RectTransform;
        if (rectTransform != null)
        {
            rectTransform.anchorMin = new Vector2(0.5f, 0.5f);
            rectTransform.anchorMax = new Vector2(0.5f, 0.5f);
            rectTransform.anchoredPosition = Vector2.zero;
            rectTransform.localRotation = Quaternion.identity;
            rectTransform.localScale = Vector3.one;
        }

        clockTimer.StartCountdown(countdownDuration, onComplete);
        return clockTimer;
    }

    public void StartCountdown(float countdownDuration, Action onComplete = null)
    {
        scaleTween?.Kill();
        transform.localScale = Vector3.zero;
        scaleTween = transform
            .DOScale(defaultScale, spawnZoomDuration)
            .SetEase(Ease.OutBack);

        duration = Mathf.Max(0f, countdownDuration);
        elapsedTime = 0f;
        isCounting = true;
        isDespawning = false;
        this.onComplete = onComplete;
        ResetFill();
        StartClockFx();

        if (duration <= 0f)
        {
            CompleteCountdown();
        }
    }

    public void StopCountdown()
    {
        isCounting = false;
        onComplete = null;
        StopClockFx();
        PlayDespawn();
    }

    private void CompleteCountdown()
    {
        isCounting = false;
        StopClockFx();
                Ply_SoundManager.Ins.PlayFx(FxType.Complete);
        
        Action completeAction = onComplete;
        onComplete = null;
        completeAction?.Invoke();

        PlayDespawn();
    }

    private void ResetFill()
    {
        if (fillImage != null)
        {
            fillImage.fillAmount = 1f;
        }
    }

    private void PlayDespawn()
    {
        if (isDespawning)
        {
            return;
        }

        isDespawning = true;
        scaleTween?.Kill();
        scaleTween = transform
            .DOScale(Vector3.zero, despawnZoomDuration)
            .SetEase(Ease.InBack)
            .OnComplete(DeSpawn);
    }

    private void DeSpawn()
    {
        scaleTween = null;
        transform.localScale = defaultScale;

        if (usePool && Ply_Pool.Ins != null)
        {
            Ply_Pool.Ins.Despawn(PoolType.ClockTimer, this);
        }
        else
        {
            Destroy(gameObject);
        }
    }

    private void StartClockFx()
    {
        if (isPlayingClockFx) return;

        isPlayingClockFx = true;
        activeClockFxCount++;

        if (activeClockFxCount == 1 && Ply_SoundManager.Ins != null)
        {
            Ply_SoundManager.Ins.PlayFxLoop(FxType.Clock);
        }
    }

    private void StopClockFx()
    {
        if (!isPlayingClockFx) return;

        isPlayingClockFx = false;
        activeClockFxCount = Mathf.Max(0, activeClockFxCount - 1);

        if (activeClockFxCount == 0 && Ply_SoundManager.Ins != null)
        {
            Ply_SoundManager.Ins.StopFxLoop(FxType.Clock);
        }
    }

    private void OnDisable()
    {
        StopClockFx();
        scaleTween?.Kill();
        scaleTween = null;
        transform.localScale = defaultScale;
        isCounting = false;
        isDespawning = false;
        onComplete = null;
    }
}
