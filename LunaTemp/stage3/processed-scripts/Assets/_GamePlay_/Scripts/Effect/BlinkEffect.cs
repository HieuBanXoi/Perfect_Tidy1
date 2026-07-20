using UnityEngine;

public class BlinkEffect : Ply_GameUnit
{
    private Vector3 defaultScale;
    private bool isDefaultScaleCached;

    public void SetScale(float scaleMultiplier)
    {
        CacheDefaultScale();
        tf.localScale = defaultScale * Mathf.Max(0f, scaleMultiplier);
    }

    public void DeSpawnByTime()
    {
        CancelInvoke(nameof(DeSpawn));
        Invoke(nameof(DeSpawn), 2f);
    }
    public void DeSpawn()
    {
        CancelInvoke(nameof(DeSpawn));
        tf.SetParent(null);
        ResetScale();
        Ply_Pool.Ins.Despawn(PoolType.BlinkFX, this);
    }

    private void CacheDefaultScale()
    {
        if (isDefaultScaleCached) return;

        defaultScale = tf.localScale;
        isDefaultScaleCached = true;
    }

    private void ResetScale()
    {
        if (!isDefaultScaleCached) return;

        tf.localScale = defaultScale;
    }
}
