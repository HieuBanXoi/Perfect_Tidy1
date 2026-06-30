using UnityEngine;

public class BlinkEffect : Ply_GameUnit
{
    public void DeSpawnByTime()
    {
        Invoke(nameof(DeSpawn), 2f);
    }
    public void DeSpawn()
    {
        tf.SetParent(null);
        Ply_Pool.Ins.Despawn(PoolType.BlinkFX, this);
    }
}
