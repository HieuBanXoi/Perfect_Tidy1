using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

public enum FlySide
{
    Left,
    Right
}

public class ToolObject : Item
{
    [Header("--- FLY ---")]
    public float flyDistance = 15f;
    public float flyYOffset = 0f;
    public float flyInDuration = 0.5f;
    public float flyOutDuration = 1f;
    public Ease flyEase = Ease.OutQuad;
    public FlySide flyInSide = FlySide.Left;
    public FlySide flyOutSide = FlySide.Left;
    public UnityEvent onFlyIn;
    public UnityEvent onFlyOut;

    private bool hasHomePosition;
    private Vector3 homePosition;

    public virtual void FlyIn()
    {
        if(gameObject.activeInHierarchy) return;
        EnsureHomePosition();
        PlaySoundFX(FxType.Swipe);
        transform.DOKill();
        transform.position = GetOutsidePosition(flyInSide);
        gameObject.SetActive(true);
        transform.DOMove(homePosition, flyInDuration).SetEase(flyEase).OnComplete(() =>
        {
            itemDraggable?.CacheOriginalPos();
            onFlyIn?.Invoke();
        });
    }

    public void MoveToTarget(Transform target)
    {
        EnsureHomePosition();

        Vector3 targetPosition = target != null ? target.position : homePosition;
        gameObject.SetActive(true);
        transform.DOKill();
        transform.DOMove(targetPosition, flyInDuration).SetEase(flyEase);
    }

    protected virtual void CallBackAfterMove()
    {
        gameObject.SetActive(false);
        transform.position = GetOutsidePosition(flyOutSide);
    }

    public void FlyOut()
    {
        EnsureHomePosition();
        PlaySoundFX(FxType.Swipe);

        transform.DOKill();
        transform.DOMove(GetOutsidePosition(flyOutSide), flyOutDuration).SetEase(flyEase).OnComplete(() =>
        {

            gameObject.SetActive(false);
            onFlyOut?.Invoke();
        });
    }

    protected Vector3 GetHomePosition()
    {
        EnsureHomePosition();
        return homePosition;
    }

    protected Vector3 GetOutsidePosition(FlySide side)
    {
        EnsureHomePosition();
        float direction = side == FlySide.Left ? -1f : 1f;
        return homePosition + new Vector3(direction * flyDistance, flyYOffset, 0f);
    }

    private void EnsureHomePosition()
    {
        if (hasHomePosition) return;

        homePosition = transform.position;
        hasHomePosition = true;
    }
    public void UnActiveItem()
    {
        gameObject.SetActive(false);
    }
    private void OnDrawGizmosSelected()
    {
        Vector3 previewHome = Application.isPlaying && hasHomePosition ? homePosition : transform.position;
        Vector3 leftPoint = previewHome + new Vector3(-flyDistance, flyYOffset, 0f);
        Vector3 rightPoint = previewHome + new Vector3(flyDistance, flyYOffset, 0f);

        // Fly In Gizmo
        Gizmos.color = Color.green; // Green for "In"
        Vector3 inPoint = flyInSide == FlySide.Left ? leftPoint : rightPoint;
        Gizmos.DrawLine(inPoint, previewHome);
        Gizmos.DrawWireSphere(inPoint, 0.3f);
#if UNITY_EDITOR
        UnityEditor.Handles.Label(inPoint + Vector3.up * 0.4f, "Fly In From " + flyInSide);
#endif

        // Fly Out Gizmo
        Gizmos.color = Color.red; // Red for "Out"
        Vector3 outPoint = flyOutSide == FlySide.Left ? leftPoint : rightPoint;
        Gizmos.DrawLine(previewHome, outPoint);
        Gizmos.DrawWireSphere(outPoint, 0.3f);
#if UNITY_EDITOR
        UnityEditor.Handles.Label(outPoint + Vector3.down * 0.4f, "Fly Out To " + flyOutSide);
#endif
    }
}
