using UnityEngine;

public class FlourSmoke : Ply_GameUnit
{

    public void DeSpawnByTime()
    {
        Invoke(nameof(DeSpawn), 1f);
    }
    public void DeSpawn()
    {
        tf.SetParent(null);
        Ply_Pool.Ins.Despawn(PoolType.FlourSmoke, this);
    }
}

