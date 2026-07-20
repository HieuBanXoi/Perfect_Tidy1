using UnityEngine;

public class DirtFX : Ply_GameUnit
{
    void OnEnable()
    {
        DeSpawnByTime();
    }
    public void DeSpawnByTime()
    {
        Invoke(nameof(DeSpawn), 1.5f);
    }
    public void DeSpawn()
    {
        Ply_Pool.Ins.Despawn(PoolType.DirtFX, this);
    }
}
