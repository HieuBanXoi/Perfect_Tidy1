using DG.Tweening;
using UnityEngine;

public class ToolObject : Item
{
    public Transform waittingPoint;
    public Transform targetPoint;
    public Ply_TransformConveyor transformConveyor;
    public virtual void FlyIn()
    {
        MoveToTarget(targetPoint);
    }
    public void MoveToTarget(Transform target)
    {
        gameObject.SetActive(true);
        transform.DOMove(target.position, 0.5f);
    }
    public void MoveAndCallBack(Transform target)
    {
        gameObject.SetActive(true);
        // itemMoveToTarget.ExecuteMove(target);
    }

    public void MoveAndCallBack()
    {
        gameObject.SetActive(true);
        // Đăng ký sự kiện lắng nghe khi di chuyển xong
        itemMoveToTarget.onComplete.AddListener(CallBackAfterMove);
        // itemMoveToTarget.ExecuteMove(itemMoveToTarget.defaultTarget);
    }

    protected virtual void CallBackAfterMove()
    {
        // Xóa lắng nghe sự kiện để tránh gọi chồng chéo ở các lần sau
        itemMoveToTarget.onComplete.RemoveListener(CallBackAfterMove);
        gameObject.SetActive(false);
        transform.position = waittingPoint.position;
        transformConveyor.MoveIn();
    }
    public void FlyOut()
    {
        transform.DOMove(waittingPoint.position, 1f).OnComplete(() =>
        {
            gameObject.SetActive(false);
        });
    }

}
