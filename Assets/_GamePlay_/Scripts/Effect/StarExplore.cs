using UnityEngine;

public class StarExploreFX : Ply_GameUnit
{
    public void DeSpawnByTime()
    {
        Invoke(nameof(DeSpawn),1f);
    }
    public void DeSpawn()
    {
        Ply_Pool.Ins.Despawn(PoolType.StarExploreFX,this);
    }
}
