using UnityEngine;

public class YellowPiece : Ply_GameUnit
{
    public void DeSpawnByTime()
    {
        Invoke(nameof(DeSpawn), 1.5f);
    }
    public void DeSpawn()
    {
        Ply_Pool.Ins.Despawn(PoolType.YellowPiece, this);
    }
}
