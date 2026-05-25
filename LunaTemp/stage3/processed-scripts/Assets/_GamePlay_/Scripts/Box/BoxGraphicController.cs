using Spine.Unity;
using Spine;
using System;
using UnityEngine;
using DG.Tweening; // Thêm thư viện DOTween

public class BoxGraphicController : MonoBehaviour
{
    public SkeletonAnimation skeletonAnimation;

    private void Awake()
    {
        if (skeletonAnimation == null)
        {
            skeletonAnimation = ComponentCache<SkeletonAnimation>.Get(transform);
        }
    }

    public void ChangeAnim(string animString, bool loop, Action onComplete = null)
    {
        if (skeletonAnimation == null || skeletonAnimation.state == null)
        {
            Debug.LogError("SkeletonAnimation hoặc State chưa được thiết lập!", this);
            return;
        }

        var trackEntry = skeletonAnimation.state.SetAnimation(0, animString, loop);

        if (!loop && onComplete != null)
        {
            float animDuration = trackEntry.Animation.Duration;

            DOVirtual.DelayedCall(animDuration, () => 
            {
                onComplete.Invoke();
            });
        }
    }
}