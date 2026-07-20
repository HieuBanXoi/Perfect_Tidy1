using UnityEngine;
using DG.Tweening;

public enum MoveType { Smooth, Jump, Instant, ShakeThenMove }

public class ItemMoveToTarget : MonoBehaviour
{
    [Header("--- CẤU HÌNH ĐÍCH ---")]
    public Transform defaultTarget;
    public float duration = 0.5f;
    public bool useAnimationCurve = false;
    public AnimationCurve moveCurve = AnimationCurve.EaseInOut(0f, 0f, 1f, 1f);
    public Ease easeType = Ease.OutQuad;
    public MoveType moveType = MoveType.Smooth;

    [Header("--- THÔNG SỐ NHẢY (DÀNH CHO JUMP) ---")]
    public float jumpPower = 2.0f;
    public int numJumps = 1;
    public bool rotate360DuringJump = false;
    public bool flipRotate = false;
    public float angleRotate = -360;

    [Header("--- TÙY CHỌN SCALE KHI MOVE ---")]
    [Tooltip("Bật/tắt chức năng scale khi di chuyển.")]
    public bool scaleOnMove = false;
    [Tooltip("Hệ số nhân với scale hiện tại của vật thể khi di chuyển. Ví dụ: 0 để làm vật thể biến mất.")]
    public float endScaleMultiplier = 1f;

    [Header("--- SAU KHI TỚI NƠI ---")]
    public bool setParentToTarget = false;
    public UnityEngine.Events.UnityEvent onComplete;
    public bool lockInputWhileMoving = true;
    public bool resetParentBeforeMove = true;

    private Transform originalParent;
    private Item item;

    private void Awake()
    {
        originalParent = transform.parent;
        item = GetComponent<Item>();
    }

    public void ExecuteMove()
    {
        ExecuteMove3D(defaultTarget);
    }

    public void ExecuteMove3D(Transform customTarget)
    {
        Transform target = customTarget != null ? customTarget : defaultTarget;
        Item targetItem = ComponentCache<Item>.Get(defaultTarget);

        // defaultTarget = target;

        if (target == null)
        {
            Debug.LogWarning($"[MoveToTarget] {gameObject.name} không tìm thấy Target để di chuyển!");
            return;
        }

        Vector3 targetPos = target.position;
        if(targetItem.knifePos != null && target != null)
        {
            targetPos = targetItem.knifePos.position;
        }

        // Xóa các Tween cũ để tránh xung đột
        Vector3 worldPosition = transform.position;
        Quaternion worldRotation = transform.rotation;
        Vector3 worldScale = transform.lossyScale;

        transform.DOKill();
        if (resetParentBeforeMove)
        {
            transform.SetParent(originalParent, true);
            transform.SetPositionAndRotation(worldPosition, worldRotation);
            SetWorldScale(worldScale);
        }

        if (lockInputWhileMoving && GameManager.Ins != null)
        {
            GameManager.Ins.isPlaying = false;
        }

        if (scaleOnMove)
        {
            Vector3 targetScale = transform.localScale * endScaleMultiplier;
            if (useAnimationCurve)
            {
                transform.DOScale(targetScale, duration)
                    .SetEase(moveCurve);
            }
            else
            {
                transform.DOScale(targetScale, duration)
                    .SetEase(easeType);
            }
        }

        switch (moveType)
        {
            case MoveType.Smooth:
                if (useAnimationCurve)
                {
                    transform.DOMove(targetPos, duration)
                        .SetEase(moveCurve)
                        .OnComplete(FinishAction);
                }
                else
                {
                    transform.DOMove(targetPos, duration)
                        .SetEase(easeType)
                        .OnComplete(FinishAction);
                }
                break;

            case MoveType.Jump:
                // Kiểu nảy vào nồi cực đẹp
                if (useAnimationCurve)
                {
                    transform.DOJump(targetPos, jumpPower, numJumps, duration)
                        .SetEase(moveCurve)
                        .OnComplete(FinishAction);
                }
                else
                {
                    transform.DOJump(targetPos, jumpPower, numJumps, duration)
                        .SetEase(easeType)
                        .OnComplete(FinishAction);
                }

                if (rotate360DuringJump)
                {
                    if (flipRotate)
                    {
                        angleRotate = -angleRotate;
                    }

                    transform.DORotate(new Vector3(0, 0, angleRotate), duration, RotateMode.FastBeyond360).SetEase(easeType);
                }
                break;

            case MoveType.Instant:
                transform.position = targetPos;
                FinishAction();
                break;

            case MoveType.ShakeThenMove:
                // Rung nhẹ một cái rồi mới bay (tạo cảm giác dồn lực)
                transform.DOShakePosition(0.2f, 0.2f)
                    .OnComplete(() =>
                    {
                        if (useAnimationCurve)
                        {
                            transform.DOMove(targetPos, duration).SetEase(moveCurve).OnComplete(FinishAction);
                        }
                        else
                        {
                            transform.DOMove(targetPos, duration).SetEase(easeType).OnComplete(FinishAction);
                        }
                    });
                break;
        }
    }
    private void FinishAction()
    {
        if (setParentToTarget && defaultTarget != null)
        {
            Vector3 worldPosition = transform.position;
            Quaternion worldRotation = transform.rotation;
            Vector3 worldScale = transform.lossyScale;

            transform.SetParent(defaultTarget, true);
            transform.SetPositionAndRotation(worldPosition, worldRotation);
            SetWorldScale(worldScale);
        }

        if (lockInputWhileMoving && GameManager.Ins != null)
        {
            GameManager.Ins.isPlaying = true;
        }

        if (item != null)
        {
            item.PlayMoveToTargetFinishSound();
        }

        onComplete?.Invoke();
    }

    // Hàm bổ trợ để Reset vị trí về ban đầu nếu cần
    public void TeleportToTarget(Transform t)
    {
        transform.position = t.position;
    }
    public void SetDefaultTarget(Transform t)
    {
        defaultTarget = t;
    }

    private void SetWorldScale([Bridge.Ref] Vector3 worldScale)
    {
        if (transform.parent == null)
        {
            transform.localScale = worldScale;
            return;
        }

        Vector3 parentScale = transform.parent.lossyScale;
        transform.localScale = new Vector3(
            parentScale.x != 0f ? worldScale.x / parentScale.x : transform.localScale.x,
            parentScale.y != 0f ? worldScale.y / parentScale.y : transform.localScale.y,
            parentScale.z != 0f ? worldScale.z / parentScale.z : transform.localScale.z
        );
    }
    public void SetEndScale(float scale)
    {
        endScaleMultiplier = scale;
    }
}
