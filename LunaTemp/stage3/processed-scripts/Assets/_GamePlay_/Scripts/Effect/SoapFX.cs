using UnityEngine;

public class SoapFX : Ply_GameUnit
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
        Ply_Pool.Ins.Despawn(PoolType.SoapFX, this);
    }
}
