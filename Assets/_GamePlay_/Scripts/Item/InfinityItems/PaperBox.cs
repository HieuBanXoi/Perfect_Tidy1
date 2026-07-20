using DG.Tweening;
using UnityEngine;

public class PaperBox : MonoBehaviour
{
    public void SpawnPaper()
    {
        DOVirtual.DelayedCall(0.5f, () =>
        {
            Paper paper = Ply_Pool.Ins.Spawn<Paper>(PoolType.Paper, transform.position, transform.rotation);
            paper.tf.SetParent(PhaseManager.Ins.CurrentPhaseObject);
            paper.itemMoveToTarget.defaultTarget = GameManager.Ins.trashCan;
        });
        
    }
}
