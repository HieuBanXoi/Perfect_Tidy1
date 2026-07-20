using DG.Tweening;
using UnityEngine;
using UnityEngine.Events;

public class Item : Ply_GameUnit
{
    [Header("--- HAND TUTORIAL ---")]
    public bool isDone = false;
    public bool onProcess = false;
    [Tooltip("Nếu bật, hand-tut kéo thả chỉ hiển thị khi ItemType của defaultTarget khớp với targetItemType của ItemDraggable.")]
    public bool requireMatchingTargetTypeForHandTut = false;

    [HideInInspector] public ItemDraggable itemDraggable;
    [HideInInspector] public ItemClickable itemClickable;
    [HideInInspector] public ItemStirring itemStirring;
    [HideInInspector] public ItemKnifeSpriteMaskCutter itemKnifeSpriteMaskCutter;
    [HideInInspector] public ItemSpriteMaskPainter itemSpriteMaskPainter;
    [HideInInspector] public ItemDragSpriteMaskPainter itemDragSpriteMaskPainter;
    [HideInInspector] public ItemMoveToTarget itemMoveToTarget;
    [HideInInspector] public Animator animator;
    public ItemType itemType;
    public SpriteRenderer spriteRenderer;
    public UnityEvent onKnifeIn;
    public Transform knifePos;

    [Header("--- EFFECT SCALE ---")]
    [Min(0f)] public float heartEffectScale = 1f;
    [Min(0f)] public float breakHeartEffectScale = 1f;
    [Min(0f)] public float blinkEffectScale = 1f;
    [Min(0f)] public float mergeEffectScale = 1f;

    [Header("--- MOVE TO TARGET SOUND ---")]
    public bool playMoveToTargetFinishSound = false;
    public FxType moveToTargetFinishFxType = FxType.Complete;

    private Ply_GameUnit activeEffect;
    private PoolType activeEffectPoolType;
    private Tween activeEffectClearTween;
    public float fxSpawnZPos=0;

    public override void Awake()
    {
        base.Awake();
        CacheComponents(true);
    }

    void Reset()
    {
        CacheComponents(true);
    }

    private void OnValidate()
    {
        CacheComponents(true);
        
    }

    private void CacheComponents(bool refreshHiddenReferences = false)
    {
        if (spriteRenderer == null) spriteRenderer = GetComponentInChildren<SpriteRenderer>();
        if (refreshHiddenReferences || animator == null) animator = GetComponent<Animator>();
        if (refreshHiddenReferences || itemMoveToTarget == null) itemMoveToTarget = GetComponent<ItemMoveToTarget>();
        if (refreshHiddenReferences || itemClickable == null) itemClickable = GetComponent<ItemClickable>();
        if (refreshHiddenReferences || itemDraggable == null) itemDraggable = GetComponent<ItemDraggable>();
        if (refreshHiddenReferences || itemStirring == null) itemStirring = GetComponent<ItemStirring>();
        if (refreshHiddenReferences || itemKnifeSpriteMaskCutter == null) itemKnifeSpriteMaskCutter = GetComponent<ItemKnifeSpriteMaskCutter>();
        if (refreshHiddenReferences || itemSpriteMaskPainter == null) itemSpriteMaskPainter = GetComponent<ItemSpriteMaskPainter>();
        if (refreshHiddenReferences || itemDragSpriteMaskPainter == null) itemDragSpriteMaskPainter = GetComponent<ItemDragSpriteMaskPainter>();
    }
    
    public virtual void ChangeItemType(ItemType itemType)
    {
        this.itemType = itemType;
    }
    public virtual void ChangeAnim(string animName)
    {
        animator.SetTrigger(animName);
    }
    public void ChangeSprite(Sprite sprite)
    {
        spriteRenderer.sprite = sprite;
    }
    public virtual void GetInPlate(Transform plate)
    {
        if (GameManager.Ins != null) GameManager.Ins.isPlaying = false;

        float time = 0.5f;
        transform.DOJump(plate.position, 1f, 1, time);
        // transform.DOScale(new Vector3(0.7f, 0.7f, 0.7f), time);
        transform.DORotate(new Vector3(0, 0, 360), time, RotateMode.FastBeyond360).OnComplete(() =>
        {
            Ply_SoundManager.Ins.PlayFx(FxType.Drop);
            transform.SetParent(plate);
            plate.DOPunchScale(new Vector3(0.1f, -0.1f, 0), time);
        });
    }
    public void KnifeIn()
    {
        onKnifeIn?.Invoke();
    }

    public void SpawnHeart(bool isBreak)
    {
        if (Ply_Pool.Ins == null) return;
        TurnOffActiveEffect();
        Vector3 spawnPosition = GetEffectSpawnPosition();
        if (isBreak)
        {
            HeartBreakEffect heartEffect = Ply_Pool.Ins.Spawn<HeartBreakEffect>(PoolType.HeartBreakFX, spawnPosition, transform.rotation);
            if (heartEffect == null) return;
            CacheActiveEffect(heartEffect, PoolType.HeartBreakFX, heartEffect.defaultLifeTime);
            heartEffect.transform.localRotation = Quaternion.identity;
            heartEffect.PlaySpawnWithScale(breakHeartEffectScale);
        }
        else
        {
            HeartEffect heartEffect = Ply_Pool.Ins.Spawn<HeartEffect>(PoolType.HeartFX, spawnPosition, transform.rotation);
            if (heartEffect == null) return;
            CacheActiveEffect(heartEffect, PoolType.HeartFX, heartEffect.defaultLifeTime);
            heartEffect.transform.localRotation = Quaternion.identity;
            heartEffect.PlaySpawnWithScale(heartEffectScale);
        }

    }

    public virtual void OnDragFailReturnComplete()
    {
        SpawnHeart(true);
    }

    public virtual bool ShouldPlayBobEffectAfterReturn()
    {
        return true;
    }

    public void TeleportToStart()
    {
        if (itemDraggable != null)
        {
            itemDraggable.TeleportToStart();
        }
    }
    public virtual void DoneAnimation()
    {
        if (itemDraggable == null) return;
        itemDraggable.targetItemType = ItemType.None;
        itemDraggable.enabled = true;
        if (itemClickable != null)  itemClickable.enabled = false;
        animator.enabled = false;
        itemMoveToTarget.defaultTarget = null;
    }
    public void SpawnHeartDone()
    {
        SpawnHeart(false);
        
    }
    public void ItemDone()
    {
        // SpawnHeart(false);
        ItemTypeDoneManager.Ins?.ItemDone(this);

        if (itemDraggable != null)
        {
            itemDraggable.enabled = false;

        }
        if (itemClickable != null)
        {
            itemClickable.enabled = false;

        }
        if (HandTutManager.Ins != null)
        {
            HandTutManager.Ins.ItemDone(this);
            return;
        }
        isDone = true;

    }
    public void SpawnGreenPiece()
    {
        TurnOffActiveEffect();
        GreenPiece greenPiece = Ply_Pool.Ins.Spawn<GreenPiece>(PoolType.GreenPiece, GetEffectSpawnPosition(), transform.rotation);
        if (greenPiece == null) return;
        CacheActiveEffect(greenPiece, PoolType.GreenPiece, 1.5f);
        greenPiece.DeSpawnByTime();
    }
    public void SpawnYellowPiece()
    {
        TurnOffActiveEffect();
        YellowPiece yellowPiece = Ply_Pool.Ins.Spawn<YellowPiece>(PoolType.YellowPiece, GetEffectSpawnPosition(), transform.rotation);
        if (yellowPiece == null) return;
        CacheActiveEffect(yellowPiece, PoolType.YellowPiece, 1.5f);
        yellowPiece.DeSpawnByTime();
    }
    public void SpawnWaterSplash(Vector3 position)
    {
        Ply_SoundManager.Ins.PlayFx(FxType.FoodToWater);
        TurnOffActiveEffect();
        
        WaterSplash waterSplash = Ply_Pool.Ins.Spawn<WaterSplash>(PoolType.WaterSplash, position, transform.rotation);
        if (waterSplash == null) return;
        CacheActiveEffect(waterSplash, PoolType.WaterSplash, 1f);
        waterSplash.DeSpawnByTime();
    }
    public void SpawnBlinkEffect()
    {
        Ply_SoundManager.Ins.PlayFx(FxType.Blink);
        TurnOffActiveEffect();
        BlinkEffect blinkEffect = Ply_Pool.Ins.Spawn<BlinkEffect>(PoolType.BlinkFX, GetEffectSpawnPosition(), transform.rotation);
        if (blinkEffect == null) return;
        CacheActiveEffect(blinkEffect, PoolType.BlinkFX, 2f);
        blinkEffect.tf.SetParent(this.transform);
        blinkEffect.SetScale(blinkEffectScale);
        blinkEffect.DeSpawnByTime();
    }
    public void SpawnMergeEffect()
    {
        TurnOffActiveEffect();
        MergeEffect mergeEffect = Ply_Pool.Ins.Spawn<MergeEffect>(PoolType.MergeVFX, GetEffectSpawnPosition(), transform.rotation);
        if (mergeEffect == null) return;
        CacheActiveEffect(mergeEffect, PoolType.MergeVFX, 3f);
        mergeEffect.SetScale(mergeEffectScale);
        mergeEffect.DeSpawnByTime();
    }

    public void TurnOffActiveEffect()
    {
        if (activeEffect == null) return;

        activeEffectClearTween?.Kill();
        activeEffectClearTween = null;

        if (!activeEffect.gameObject.activeSelf)
        {
            activeEffect = null;
            return;
        }

        if (activeEffect is HeartEffect heartEffect)
        {
            heartEffect.DeSpawn();
        }
        else if (activeEffect is HeartBreakEffect heartBreakEffect)
        {
            heartBreakEffect.DeSpawn();
        }
        else if (activeEffect is BlinkEffect blinkEffect)
        {
            blinkEffect.DeSpawn();
        }
        else if (activeEffect is MergeEffect mergeEffect)
        {
            mergeEffect.DeSpawn();
        }
        else if (activeEffect is GreenPiece greenPiece)
        {
            greenPiece.DeSpawn();
        }
        else if (activeEffect is YellowPiece yellowPiece)
        {
            yellowPiece.DeSpawn();
        }
        else if (activeEffect is WaterSplash waterSplash)
        {
            waterSplash.DeSpawn();
        }
        else if (Ply_Pool.Ins != null)
        {
            Ply_Pool.Ins.Despawn(activeEffectPoolType, activeEffect);
        }

        activeEffect = null;
    }

    private void CacheActiveEffect(Ply_GameUnit effect, PoolType poolType, float lifeTime)
    {
        TurnOffActiveEffect();
        activeEffect = effect;
        activeEffectPoolType = poolType;
        activeEffectClearTween = DOVirtual.DelayedCall(lifeTime, () =>
        {
            if (activeEffect == effect)
            {
                activeEffect = null;
                activeEffectClearTween = null;
            }
        });
    }

    protected virtual Vector3 GetEffectSpawnPosition()
    {
        Vector3 spawnPosition = transform.position;
        spawnPosition.z = fxSpawnZPos;
        return spawnPosition;
    }
    [ContextMenu("GetMinChildZ")]
    public void GetMinChildZ()
    {
        float minZ = transform.position.z;
        Transform[] children = GetComponentsInChildren<Transform>();

        for (int i = 0; i < children.Length; i++)
        {
            Transform child = children[i];
            if (child == transform || !child.gameObject.activeInHierarchy) continue;

            minZ = Mathf.Min(minZ, child.position.z);
        }

        fxSpawnZPos = minZ;
    }

    public void ResetFxSpawnZPos()
    {
        fxSpawnZPos = -1.5f;
    }

    public void PlayMoveToTargetFinishSound()
    {
        if (!playMoveToTargetFinishSound || Ply_SoundManager.Ins == null) return;

        Ply_SoundManager.Ins.PlayFx(moveToTargetFinishFxType);
    }
    public void DoOneStep()
    {
        PhaseManager.Ins.DoOneStep();


    }
}
