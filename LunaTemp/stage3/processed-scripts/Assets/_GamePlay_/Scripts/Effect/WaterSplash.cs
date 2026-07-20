using UnityEngine;

public class WaterSplash : Ply_GameUnit
{
    public void DeSpawnByTime()
    {
        Invoke(nameof(DeSpawn),1f);
    }
    public void DeSpawn()
    {
        Ply_Pool.Ins.Despawn(PoolType.WaterSplash,this);
    }
}
