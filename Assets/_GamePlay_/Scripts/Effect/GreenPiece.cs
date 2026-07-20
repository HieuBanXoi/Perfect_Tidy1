using UnityEngine;

public class GreenPiece : Ply_GameUnit
{
    public void DeSpawnByTime()
    {
        Invoke(nameof(DeSpawn), 1.5f);
    }
    public void DeSpawn()
    {
        Ply_Pool.Ins.Despawn(PoolType.GreenPiece, this);
    }
}
