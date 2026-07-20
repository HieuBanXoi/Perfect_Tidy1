using DG.Tweening;
using UnityEngine;

public class HeartBreakEffect : Ply_GameUnit
{
    public float defaultLifeTime = 1f;

    private Vector3 defaultScale = Vector3.one;
    private Vector3 defaultLocalEulerAngles = Vector3.zero;
    private bool isDefaultStateCached;
    private Sequence spawnSequence;
    private Tween despawnTween;

    public void DeSpawnByTime()
    {
        Invoke(nameof(DeSpawn), 3f);
    }

    public void PlaySpawn()
    {
        PlaySpawn(defaultLifeTime);
    }

    public void PlaySpawnWithScale(float scaleMultiplier)
    {
        PlaySpawn(defaultLifeTime, scaleMultiplier);
    }

    public void PlaySpawn(float lifeTime)
    {
        PlaySpawn(lifeTime, 1f);
    }

    public void PlaySpawn(float lifeTime, float scaleMultiplier)
    {
        CacheDefaultState();
        ResetState();
        Ply_SoundManager.Ins.PlayFx(FxType.Failed);
        transform.localScale = Vector3.zero;

        spawnSequence = DOTween.Sequence();
        spawnSequence.Append(transform.DOScale(defaultScale * Mathf.Max(0f, scaleMultiplier), 0.25f).SetEase(Ease.OutBack));
        spawnSequence.Append(transform.DOLocalRotate(new Vector3(0f, 0f, 3f), 0.12f).SetEase(Ease.OutSine));
        spawnSequence.Append(transform.DOLocalRotate(new Vector3(0f, 0f, -3f), 0.18f).SetEase(Ease.InOutSine));
        spawnSequence.Append(transform.DOLocalRotate(defaultLocalEulerAngles, 0.12f).SetEase(Ease.InSine));

        despawnTween = DOVirtual.DelayedCall(lifeTime, DeSpawn);
    }

    public void DeSpawn()
    {
        ResetState();
        Ply_Pool.Ins.Despawn(PoolType.HeartBreakFX, this);
    }

    private void CacheDefaultState()
    {
        if (isDefaultStateCached) return;

        defaultScale = transform.localScale;
        defaultLocalEulerAngles = transform.localEulerAngles;
        isDefaultStateCached = true;
    }

    private void ResetState()
    {
        CancelInvoke(nameof(DeSpawn));
        transform.DOKill();
        spawnSequence?.Kill();
        despawnTween?.Kill();
        spawnSequence = null;
        despawnTween = null;
        transform.localScale = defaultScale;
        transform.localEulerAngles = defaultLocalEulerAngles;
    }
}
