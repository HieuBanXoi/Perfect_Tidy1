using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class HandTutManager : Ply_Singleton<HandTutManager>
{
    [Header("--- HAND TUTORIAL ---")]
    public List<Item> items;
    public GameObject handTutObject;

    [Header("--- TIMING ---")]
    public float idleDelay = 5f;
    [Min(0f)] public float firstHandTutDelay = 5f;
    public float moveDuration = 1.2f;
    public float dragFadeDuration = 0.2f;
    public float clickScaleDuration = 0.35f;
    public float waitAtEndDuration = 0.2f;

    [Header("--- DISPLAY ---")]
    public float handZPosition = -9f;
    public float clickScaleMultiplier = 1.25f;
    public Ease moveEase = Ease.InOutSine;
    [Header("--- Painter ---")]
    public List<ItemDragSpriteMaskPainter> itemDragSpriteMaskPainters;
    [Header("--- SockStep ---")]
    public int sockCount = 0;
    public ToolObject[] toolObjects;
    public Sock[] socks;
    [Header("--- EndLogic ---")]
    public int brushedShoeCount = 0;
    public GameObject lastHandTut;

    private float idleTimer;
    private Vector3 defaultHandScale = Vector3.one;
    private SpriteRenderer handSpriteRenderer;
    private float defaultHandAlpha = 1f;
    private Sequence handSequence;
    private bool hasShownFirstHandTut;

    public bool ShouldBlockGameplayInput => false; // Không còn block input

    public override void Awake()
    {
        base.Awake();

        if (handTutObject != null)
        {
            defaultHandScale = handTutObject.transform.localScale;
            handSpriteRenderer = handTutObject.GetComponentInChildren<SpriteRenderer>();
            if (handSpriteRenderer != null)
            {
                defaultHandAlpha = handSpriteRenderer.color.a;
            }

            handTutObject.SetActive(false);
        }
    }

    private void Start()
    {
        RemoveDoneAndNullItems();
    }

    private void Update()
    {
        if (handTutObject == null) return;

        if (HasPlayerInput())
        {
            ResetIdleTimer();
            HideHandTut();
            return;
        }

        if (GameManager.Ins != null && !GameManager.Ins.isPlaying && !GameManager.Ins.isLoseGame)
        {
            HideHandTut();
            return;
        }

        idleTimer += Time.deltaTime;
        float currentIdleDelay = hasShownFirstHandTut ? idleDelay : firstHandTutDelay;
        if (idleTimer >= currentIdleDelay && handSequence == null)
        {
            idleTimer = 0f;
            ShowNextHandTut();
        }
    }

    private static bool HasPlayerInput()
    {
        if (Input.GetMouseButtonDown(0) || Input.GetMouseButton(0) || Input.GetMouseButtonUp(0)) return true;
        if (Input.touchCount == 0) return false;
        for (int i = 0; i < Input.touchCount; i++)
        {
            TouchPhase phase = Input.GetTouch(i).phase;
            if (phase == TouchPhase.Began || phase == TouchPhase.Moved || phase == TouchPhase.Stationary || phase == TouchPhase.Ended)
            {
                return true;
            }
        }

        return false;
    }

    private void ShowNextHandTut()
    {
        RemoveDoneAndNullItems();

        Item targetItem = GetFirstTutorialReadyItem();
        if (targetItem == null)
        {
            return;
        }

        Sock sock = targetItem.GetComponent<Sock>();
        if (sock != null && sock.enabled && !sock.IsDetached)
        {
            PlaySockHint(sock);
            return;
        }


        if (IsClickableReady(targetItem))
        {
            PlayClickHint(targetItem.transform);
            return;
        }

        if (IsDraggableReady(targetItem) && targetItem.itemMoveToTarget != null && targetItem.itemMoveToTarget.defaultTarget != null)
        {
            PlayMoveHint(targetItem.transform, targetItem.itemMoveToTarget.defaultTarget);
            return;
        }

        if (IsKnifeSpriteMaskCutterReady(targetItem))
        {
            PlayClickHint(targetItem.transform);
            return;
        }

        if (IsStirringReady(targetItem))
        {
            PlayStirringHint(targetItem.itemStirring);
            return;
        }

        if (IsDragSpriteMaskPainterReady(targetItem))
        {
            // Lấy target hợp lệ tiếp theo thay vì luôn lấy target đầu tiên
            Transform validTarget = GetNextValidPainterTarget(targetItem.itemDragSpriteMaskPainter);
            if (validTarget != null)
            {
                PlayMoveHint(targetItem.tf, validTarget);
            }
        }
    }

    private Item GetFirstTutorialReadyItem()
    {
        // 1. Ưu tiên tất (socks)
        if (socks != null)
        {
            for (int i = 0; i < socks.Length; i++)
            {
                Sock sock = socks[i];
                if (sock != null && !sock.isDone && CanShowTutorialForItem(sock))
                {
                    return sock;
                }
            }
        }

        // 2. Tiếp theo là các itemDragSpriteMaskPainters
        if (itemDragSpriteMaskPainters != null)
        {
            for (int i = 0; i < itemDragSpriteMaskPainters.Count; i++)
            {
                ItemDragSpriteMaskPainter painter = itemDragSpriteMaskPainters[i];
                if (painter != null)
                {
                    Item item = painter.GetComponent<Item>();
                    if (item != null && !item.isDone && CanShowTutorialForItem(item))
                    {
                        return item;
                    }
                }
            }
        }

        for (int i = 0; i < items.Count; i++)
        {
            Item item = items[i];
            if (item != null && item.onProcess && !item.isDone && CanShowTutorialForItem(item))
            {
                return item;
            }
        }

        for (int i = 0; i < items.Count; i++)
        {
            Item item = items[i];
            if (item != null && !item.isDone && CanShowTutorialForItem(item))
            {
                return item;
            }
        }

        return null;
    }

    private bool CanShowTutorialForItem(Item item)
    {
        if (item == null || item.isDone) return false;
        if (!item.gameObject.activeInHierarchy) return false;
        if (DOTween.IsTweening(item.transform))
        {

            // Cho phép hand-tut nếu chuyển động có khả năng là từ Ply_BobEffect.
            // Giả định rằng nếu một item có BobEffect đang bật, mọi tween không xác định khác là từ nó.
            Ply_BobEffect bobEffect = ComponentCache<Ply_BobEffect>.Get(item.transform);
            if (bobEffect == null || !bobEffect.enabled)
            {
                return false;
            }
        }

        Sock sock = item.GetComponent<Sock>();
        if (sock != null && sock.enabled && !sock.IsDetached)
        {
            return true;
        }

        if (IsClickableReady(item)) return true;
        if (IsKnifeSpriteMaskCutterReady(item)) return true;
        if (IsStirringReady(item)) return true;
        if (IsDragSpriteMaskPainterReady(item)) return true;

        if (IsDraggableReady(item))
        {
            if (item.itemMoveToTarget == null || item.itemMoveToTarget.defaultTarget == null)
            {
                return false;
            }

            return true;
        }

        return false;
    }

    private bool IsClickableReady(Item item)
    {
        return item != null
            && item.gameObject.activeInHierarchy
            && item.itemClickable != null
            && item.itemClickable.enabled
            && item.itemClickable.canClick;
    }

    private bool IsDraggableReady(Item item)
    {
        return item != null
            && item.gameObject.activeInHierarchy
            && item.itemDraggable != null
            && item.itemDraggable.CanDrag();
    }

    private bool IsKnifeSpriteMaskCutterReady(Item item)
    {
        return item != null
            && item.gameObject.activeInHierarchy
            && item.itemKnifeSpriteMaskCutter != null
            && item.itemKnifeSpriteMaskCutter.enabled;
    }

    private bool IsStirringReady(Item item)
    {
        return item != null
            && item.gameObject.activeInHierarchy
            && item.itemStirring != null
            && item.itemStirring.enabled
            && item.itemStirring.gameObject.activeInHierarchy
            && !item.itemStirring.IsDone;
    }

    private bool IsDragSpriteMaskPainterReady(Item item)
    {
        if (item == null || !item.gameObject.activeInHierarchy) return false;

        var dragPainter = item.itemDragSpriteMaskPainter;
        if (dragPainter == null || !dragPainter.enabled || !dragPainter.gameObject.activeInHierarchy || dragPainter.IsPaintComplete)
        {
            return false;
        }

        if (!IsDraggableReady(item)) return false;

        // Thay vì chỉ kiểm tra target đầu tiên, hãy tìm bất kỳ target nào hợp lệ.
        return GetNextValidPainterTarget(dragPainter) != null;
    }

    /// <summary>
    /// Lấy target hợp lệ tiếp theo cho một tool.
    /// Một target được coi là hợp lệ nếu nó chưa hoàn thành và tool có thể "vẽ" lên nó (đúng state).
    /// </summary>
    private Transform GetNextValidPainterTarget(ItemDragSpriteMaskPainter dragPainter)
    {
        if (dragPainter == null || dragPainter.targetPainters == null) return null;

        foreach (var targetPainterComponent in dragPainter.targetPainters)
        {
            if (targetPainterComponent == null || !targetPainterComponent.gameObject.activeInHierarchy) continue;

            Item targetItem = targetPainterComponent.GetComponent<Item>();
            if (targetItem != null && targetItem.isDone) continue;

            if (dragPainter.CanPaint(targetPainterComponent))
            {
                return targetPainterComponent.transform;
            }
        }

        return null;
    }

    private void PlayClickHint(Transform target)
    {
        if (target == null) return;

        PrepareHand(target.position);

        handSequence = DOTween.Sequence();
        handSequence.Append(handTutObject.transform.DOScale(defaultHandScale * clickScaleMultiplier, clickScaleDuration).SetEase(Ease.OutSine));
        handSequence.Append(handTutObject.transform.DOScale(defaultHandScale, clickScaleDuration).SetEase(Ease.InSine));
        handSequence.AppendInterval(waitAtEndDuration);
        handSequence.SetLoops(-1, LoopType.Restart);
    }

    private void PlayMoveHint(Transform start, Transform end)
    {
        if (start == null || end == null) return;

        PrepareHand(start.position);
        Vector3 endPosition = Get2DHandPosition(end.position);

        handSequence = DOTween.Sequence();
        handSequence.Append(handTutObject.transform.DOMove(endPosition, moveDuration).SetEase(moveEase));
        if (handSpriteRenderer != null)
        {
            handSequence.Append(handSpriteRenderer.DOFade(0f, dragFadeDuration));
        }
        handSequence.AppendInterval(waitAtEndDuration);
        handSequence.SetLoops(-1, LoopType.Restart);
    }

    private void PlayStirringHint(ItemStirring itemStirring)
    {
        if (itemStirring == null) return;

        if (itemStirring.movementMode == StirMovementMode.Line)
        {
            PlayMoveHint(itemStirring.GetTutorialLineStartPosition(), itemStirring.GetTutorialLineEndPosition());
            return;
        }

        PlayCircleHint(itemStirring.GetTutorialCenterPosition(), itemStirring.GetTutorialRadius());
    }

    private void PlayMoveHint([Bridge.Ref] Vector3 start, [Bridge.Ref] Vector3 end)
    {
        PrepareHand(start);
        Vector3 endPosition = Get2DHandPosition(end);

        handSequence = DOTween.Sequence();
        handSequence.Append(handTutObject.transform.DOMove(endPosition, moveDuration).SetEase(moveEase));
        if (handSpriteRenderer != null)
        {
            handSequence.Append(handSpriteRenderer.DOFade(0f, dragFadeDuration));
        }
        handSequence.AppendInterval(waitAtEndDuration);
        handSequence.SetLoops(-1, LoopType.Restart);
    }

    private void PlayCircleHint([Bridge.Ref] Vector3 center, float radius)
    {
        float angle = 0f;
        float safeRadius = Mathf.Max(0.01f, radius);
        Vector3 startPosition = center + new Vector3(safeRadius, 0f, 0f);

        PrepareHand(startPosition);

        handSequence = DOTween.Sequence();
        handSequence.Append(DOTween.To(() => angle, value =>
        {
            angle = value;
            Vector3 position = center + new Vector3(Mathf.Cos(angle), Mathf.Sin(angle), 0f) * safeRadius;
            handTutObject.transform.position = Get2DHandPosition(position);
        }, Mathf.PI * 2f, moveDuration).SetEase(Ease.Linear));
        handSequence.AppendInterval(waitAtEndDuration);
        handSequence.SetLoops(-1, LoopType.Restart);
    }

    private void PlaySockHint(Sock sock)
    {
        if (sock == null) return;

        Vector3 startPos = sock.transform.position;
        Vector3 endPos = startPos + Vector3.down * sock.detachDistance;

        PlayMoveHint(startPos, endPos);
    }

    private void PrepareHand([Bridge.Ref] Vector3 position)
    {
        hasShownFirstHandTut = true;

        handTutObject.transform.DOKill();
        handTutObject.transform.position = Get2DHandPosition(position);
        handTutObject.transform.localScale = defaultHandScale;
        SetHandAlpha(defaultHandAlpha);
        handTutObject.SetActive(true);
    }

    private Vector3 Get2DHandPosition([Bridge.Ref] Vector3 position)
    {
        return new Vector3(position.x, position.y, handZPosition);
    }

    private void HideHandTut()
    {
        if (handSequence != null)
        {
            handSequence.Kill();
            handSequence = null;
        }

        if (handTutObject == null) return;

        handTutObject.transform.DOKill();
        handTutObject.transform.localScale = defaultHandScale;
        SetHandAlpha(defaultHandAlpha);
        handTutObject.SetActive(false);
    }

    private void SetHandAlpha(float alpha)
    {
        if (handSpriteRenderer == null) return;

        Color color = handSpriteRenderer.color;
        color.a = alpha;
        handSpriteRenderer.color = color;
    }

    private void ResetIdleTimer()
    {
        idleTimer = 1f;
    }

    private void RemoveDoneAndNullItems()
    {
        for (int i = items.Count - 1; i >= 0; i--)
        {
            if (items[i] == null || items[i].isDone)
            {
                items.RemoveAt(i);
            }
        }
    }

    public void ItemDone(Item item)
    {
        if (item == null) return;

        item.isDone = true;
        items.Remove(item);

        HideHandTut();
        ResetIdleTimer();
    }

    public void ItemDone(Transform itemTransform)
    {
        if (itemTransform == null) return;

        Item item = ComponentCache<Item>.Get(itemTransform);
        ItemDone(item);
    }

    public void ItemDone(GameObject itemObject)
    {
        if (itemObject == null) return;

        Item item = ComponentCache<Item>.Get(itemObject.transform);
        ItemDone(item);
    }
    public void OneSockDone()
    {
        sockCount++;
        if(sockCount >= 2)
        {
            for(int i = 0; i < toolObjects.Length; i++)
            {
                if(toolObjects[i] != null)
                {
                    toolObjects[i].FlyIn();
                }
            }
        }
    }
    public void OneShoeBrushed()
    {
        brushedShoeCount++;
        if (brushedShoeCount >= 4)
        {
            if(lastHandTut != null)
            {
                lastHandTut.SetActive(true);
                GameManager.Ins.LoseGame();
            }
        }
    }
}
