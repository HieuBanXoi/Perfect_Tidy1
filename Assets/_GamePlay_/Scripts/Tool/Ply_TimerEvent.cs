using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

public class Ply_TimerEvent : MonoBehaviour
{
    [Header("--- TIMER ---")]
    public float duration = 1f;
    public bool playOnEnable = false;
    public bool ignoreTimeScale = false;
    public bool autoDisableOnComplete = false;

    [Header("--- EVENTS ---")]
    public UnityEvent onTimerStart;
    public UnityEvent onTimerComplete;
    public UnityEvent onTimerStop;

    private Tween timerTween;

    private void OnEnable()
    {
        if (playOnEnable)
        {
            StartTimer();
        }
    }

    private void OnDisable()
    {
        timerTween?.Kill();
        timerTween = null;
    }

    public void StartTimer()
    {
        StartTimer(duration);
    }

    public void StartTimer(float customDuration)
    {
        timerTween?.Kill();

        onTimerStart?.Invoke();
        timerTween = DOVirtual.DelayedCall(customDuration, CompleteTimer)
            .SetUpdate(ignoreTimeScale);
    }

    public void StopTimer()
    {
        if (timerTween == null) return;

        timerTween.Kill();
        timerTween = null;
        onTimerStop?.Invoke();
    }

    public void RestartTimer()
    {
        StartTimer(duration);
    }

    private void CompleteTimer()
    {
        timerTween = null;
        onTimerComplete?.Invoke();

        if (autoDisableOnComplete)
        {
            gameObject.SetActive(false);
        }
    }
}
