using DG.Tweening;
using UnityEngine;

public class Ply_BobEffect : MonoBehaviour
{
    [Header("--- BOB EFFECT ---")]
    public bool playOnEnable = true;
    public bool useLocalMove = true;
    public Vector3 bobOffset = new Vector3(0f, 0.25f, 0f);
    public float duration = 0.6f;
    public Ease ease = Ease.InOutSine;

    private Vector3 startLocalPosition;
    private Vector3 startWorldPosition;
    private Tween bobTween;

    public bool IsPlaying => bobTween != null && bobTween.IsActive();

    private void Awake()
    {
        CacheStartPosition();
    }

    private void OnEnable()
    {
        CacheStartPosition();
        if (playOnEnable)
        {
            Play();
        }
    }

    private void OnDisable()
    {
        Stop(false);
    }

    public void CacheStartPosition()
    {
        startLocalPosition = transform.localPosition;
        startWorldPosition = transform.position;
    }

    public void Play()
    {
        Stop(false);

        Vector3 target = useLocalMove ? startLocalPosition + bobOffset : startWorldPosition + bobOffset;

        if (useLocalMove)
        {
            transform.localPosition = startLocalPosition;
            bobTween = transform.DOLocalMove(target, duration)
                .SetEase(ease)
                .SetLoops(-1, LoopType.Yoyo);
        }
        else
        {
            transform.position = startWorldPosition;
            bobTween = transform.DOMove(target, duration)
                .SetEase(ease)
                .SetLoops(-1, LoopType.Yoyo);
        }
    }

    public void Stop()
    {
        Stop(true);
    }

    public void Stop(bool resetPosition)
    {
        bobTween?.Kill();
        bobTween = null;

        if (!resetPosition) return;

        if (useLocalMove)
        {
            transform.localPosition = startLocalPosition;
        }
        else
        {
            transform.position = startWorldPosition;
        }
    }
}
