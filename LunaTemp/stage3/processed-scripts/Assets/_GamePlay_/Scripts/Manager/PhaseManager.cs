using UnityEngine;
using DG.Tweening;
using System.Collections.Generic;
using UnityEngine.Events;

[System.Serializable]
public class PhaseData
{
    [Tooltip("GameObject chứa toàn bộ môi trường/đồ vật của phase này")]
    public GameObject phaseObject;
    [Tooltip("Tổng số bước (step) cần hoàn thành để chuyển sang phase kế tiếp")]
    public int totalSteps;
    [Tooltip("Sự kiện được gọi khi phase này bay vào vị trí trung tâm xong")]
    public UnityEvent onPhaseReady;
}

public enum PhaseTransitionType
{
    HorizontalSlide,
    VerticalSlide,
    ObjectTransition
}

public class PhaseManager : Ply_Singleton<PhaseManager>
{
    [Header("--- CÀI ĐẶT CÁC PHASE ---")]
    public List<PhaseData> phases;

    [Header("--- HIỆU ỨNG CHUYỂN PHASE ---")]
    public PhaseTransitionType transitionType = PhaseTransitionType.HorizontalSlide;
    public float transitionDuration = 1.0f;
    public float delayBeforeNextPhase = 2.0f;
    public float offScreenLeftX = -15f;
    public float offScreenRightX = 15f;
    public float offScreenBottomY = -15f;
    public float offScreenTopY = 15f;
    public float centerScreenX = 0f;
    private float centerScreenY = 0f;
    public GameObject phaseTransitionObject;
    public float phaseTransitionObjectDuration = 1.5f;

    public int currentPhaseIndex = 0;
    public int currentStepCount = 0;
    [LunaPlaygroundField("EC PopUp", 0, "Build Settings")]
    public bool isECPopup = false;

    private bool isChangingPhase;
    private Tween phaseDelayTween;
    private Sequence phaseTransitionSequence;

    public Transform CurrentPhaseObject
    {
        get
        {
            if (currentPhaseIndex >= 0 && currentPhaseIndex < phases.Count)
                return phases[currentPhaseIndex].phaseObject.transform;
            return null;
        }
    }

    private void Start()
    {
        // Setup ban đầu: Chỉ bật phase đầu tiên (ở chính giữa), tắt tất cả các phase còn lại
        for (int i = 0; i < phases.Count; i++)
        {
            if (phases[i].phaseObject != null)
            {
                if (i == 0)
                {
                    phases[i].phaseObject.SetActive(true);
                    Vector3 pos = phases[i].phaseObject.transform.position;
                    pos.x = centerScreenX;
                    centerScreenY = pos.y;
                    phases[i].phaseObject.transform.position = pos;
                    phases[i].onPhaseReady?.Invoke();
                }
                else
                {
                    phases[i].phaseObject.SetActive(false);
                }
            }
        }

        if (phaseTransitionObject != null)
        {
            phaseTransitionObject.SetActive(false);
        }
    }

    private void OnDisable()
    {
        phaseDelayTween?.Kill();
        phaseTransitionSequence?.Kill();
    }

    [ContextMenu("Do One Step")]
    public bool DoOneStep()
    {
        if (isChangingPhase) return false;
        if (currentPhaseIndex >= phases.Count) return false; // Đã hoàn thành hết các phase

        currentStepCount++;

        // Nếu số lần DoOneStep đạt mức yêu cầu của phase hiện tại => Chuyển Phase
        if (currentStepCount >= phases[currentPhaseIndex].totalSteps)
        {
            return TryEndCurrentPhase();
        }

        return false;
    }

    public bool IsCurrentPhaseStepComplete()
    {
        if (currentPhaseIndex < 0 || currentPhaseIndex >= phases.Count) return false;

        return currentStepCount >= phases[currentPhaseIndex].totalSteps;
    }

    public bool TryEndCurrentPhase()
    {
        if (isChangingPhase) return false;
        if (!IsCurrentPhaseStepComplete()) return false;

        DelayGoToNextPhase();
        return true;
    }

    private void DelayGoToNextPhase()
    {
        isChangingPhase = true;
        if (GameManager.Ins != null) GameManager.Ins.isPlaying = false;
        Ply_SoundManager.Ins.PlayFx(FxType.Complete);
        phaseDelayTween?.Kill();
        phaseTransitionSequence?.Kill();

        // Nếu isECPopup là true và phase 1 (index 0) vừa hoàn thành, gọi WinGame thay vì chuyển phase.
        if (isECPopup && currentPhaseIndex == 0)
        {
            phaseDelayTween = DOVirtual.DelayedCall(delayBeforeNextPhase, FinishGameByPhase);
            return;
        }

        if (!HasNextPhase())
        {
            phaseDelayTween = DOVirtual.DelayedCall(delayBeforeNextPhase, FinishGameByPhase);
            return;
        }

        if (transitionType == PhaseTransitionType.ObjectTransition && phaseTransitionObject != null)
        {
            phaseDelayTween = DOVirtual.DelayedCall(delayBeforeNextPhase, PlayPhaseObjectTransition);
            return;
        }

        phaseDelayTween = DOVirtual.DelayedCall(delayBeforeNextPhase, GoToNextPhase);
    }

    private bool HasNextPhase()
    {
        return currentPhaseIndex + 1 < phases.Count;
    }

    private void PlayPhaseObjectTransition()
    {
        ProgressSlider progressSlider = ProgressSlider.Ins;
        if(progressSlider != null)
        {
            progressSlider.gameObject.SetActive(false);
            progressSlider.ResetProgress();
        }
        phaseTransitionObject.SetActive(true);

        float safeDuration = Mathf.Max(0.01f, phaseTransitionObjectDuration);
        phaseTransitionSequence = DOTween.Sequence();
        phaseTransitionSequence.AppendInterval(safeDuration * 0.5f);
        phaseTransitionSequence.AppendCallback(SwitchToNextPhaseBehindTransition);
        phaseTransitionSequence.AppendInterval(safeDuration * 0.5f);
        phaseTransitionSequence.OnComplete(() =>
        {
            phaseTransitionSequence = null;
            phaseTransitionObject.SetActive(false);
            FinishPhaseTransition();
        });
    }

    private void SwitchToNextPhaseBehindTransition()
    {
        
        PhaseData oldPhase = phases[currentPhaseIndex];
        currentPhaseIndex++;
        currentStepCount = 0;

        if (oldPhase != null && oldPhase.phaseObject != null)
        {
            oldPhase.phaseObject.SetActive(false);
        }

        if (currentPhaseIndex < phases.Count)
        {
            PhaseData newPhase = phases[currentPhaseIndex];
            if (newPhase != null && newPhase.phaseObject != null)
            {
                GameObject newObj = newPhase.phaseObject;
                Vector3 pos = newObj.transform.position;
                pos.x = centerScreenX;
                pos.y = centerScreenY;
                newObj.transform.position = pos;
                newObj.SetActive(true);
                if (GameManager.Ins != null && !GameManager.Ins.isLoseGame)
                {
                    GameManager.Ins.isPlaying = true;
                }
                newPhase.onPhaseReady?.Invoke();
                StartHandTutAfterPhaseReady();
            }
        }
    }

    private void FinishPhaseTransition()
    {
        isChangingPhase = false;

        if (currentPhaseIndex < phases.Count)
        {
            return;
        }

        Debug.Log("Hoàn thành toàn bộ Phase!");
        FinishGameByPhase();
    }

    private void GoToNextPhase()
    {
        PhaseData oldPhase = phases[currentPhaseIndex];
        currentPhaseIndex++;
        currentStepCount = 0; // Reset số đếm step cho phase mới

        if (GameManager.Ins != null) GameManager.Ins.isPlaying = false;

        // 1. Chuyển Phase cũ sang phía bên trái màn hình và ẩn đi
        if (oldPhase != null && oldPhase.phaseObject != null)
        {
            Ply_SoundManager.Ins.PlayFx(FxType.Swipe);
            GameObject oldObj = oldPhase.phaseObject;

            if (transitionType == PhaseTransitionType.VerticalSlide)
            {
                oldObj.transform.DOMoveY(offScreenBottomY, transitionDuration)
                    .SetEase(Ease.InOutQuad)
                    .OnComplete(() => oldObj.SetActive(false));
            }
            else // Mặc định là HorizontalSlide
            {
                oldObj.transform.DOMoveX(offScreenLeftX, transitionDuration)
                    .SetEase(Ease.InOutQuad)
                    .OnComplete(() => oldObj.SetActive(false));
            }
        }

        // 2. Kiểm tra xem còn phase tiếp theo hay không
        if (currentPhaseIndex < phases.Count)
        {
            PhaseData newPhase = phases[currentPhaseIndex];
            if (newPhase != null && newPhase.phaseObject != null)
            {
                GameObject newObj = newPhase.phaseObject;

                Vector3 startPos = newObj.transform.position;
                Vector3 targetPos = startPos;
                targetPos.x = centerScreenX;
                targetPos.y = centerScreenY;

                if (transitionType == PhaseTransitionType.VerticalSlide)
                {
                    // Đưa phase mới ra chờ ở trên màn hình
                    startPos.x = centerScreenX;
                    startPos.y = offScreenBottomY;
                }
                else // Mặc định là HorizontalSlide
                {
                    // Đưa phase mới ra chờ ở bên phải màn hình
                    startPos.x = offScreenRightX;
                    startPos.y = centerScreenY;
                }

                newObj.transform.position = startPos;
                newObj.SetActive(true);

                Tweener moveTween;
                if (transitionType == PhaseTransitionType.VerticalSlide)
                {
                    moveTween = newObj.transform.DOMoveY(targetPos.y, transitionDuration);
                }
                else
                {
                    moveTween = newObj.transform.DOMoveX(targetPos.x, transitionDuration);
                }

                moveTween.SetEase(Ease.InOutQuad).OnComplete(() =>
                        {
                            isChangingPhase = false;
                            if (GameManager.Ins != null && !GameManager.Ins.isLoseGame)
                            {
                                GameManager.Ins.isPlaying = true;
                            }
                            newPhase.onPhaseReady?.Invoke();
                            StartHandTutAfterPhaseReady();
                        });
            }
            else
            {
                isChangingPhase = false;
                if (GameManager.Ins != null && !GameManager.Ins.isLoseGame)
                {
                    GameManager.Ins.isPlaying = true;
                }
            }
        }
        else
        {
            isChangingPhase = false;
            // Đã đi qua hết tất cả các Phase trong danh sách, kết thúc game win
            Debug.Log("Hoàn thành toàn bộ Phase!");
            FinishGameByPhase();
        }
    }

    private void FinishGameByPhase()
    {
        isChangingPhase = false;
        currentStepCount = 0;
        if (GameManager.Ins != null)
        {
            GameManager.Ins.WinGame();
        }
    }

    private void StartHandTutAfterPhaseReady()
    {
        if (GameManager.Ins != null)
        {
            if (!GameManager.Ins.isLoseGame)
            {
                GameManager.Ins.isPlaying = true;
            }
        }

    }

    private void OnDrawGizmosSelected()
    {
        Gizmos.color = Color.yellow;
        // Horizontal
        Vector3 leftPos = new Vector3(offScreenLeftX, centerScreenY, 0);
        Vector3 rightPos = new Vector3(offScreenRightX, centerScreenY, 0);
        Vector3 centerHPos = new Vector3(centerScreenX, centerScreenY, 0);
        Gizmos.DrawWireSphere(leftPos, 0.5f);
        Gizmos.DrawWireSphere(rightPos, 0.5f);
        Gizmos.DrawLine(leftPos, centerHPos);
        Gizmos.DrawLine(rightPos, centerHPos);

        // Vertical
        Vector3 topPos = new Vector3(centerScreenX, offScreenTopY, 0);
        Vector3 bottomPos = new Vector3(centerScreenX, offScreenBottomY, 0);
        Vector3 centerVPos = new Vector3(centerScreenX, centerScreenY, 0);
        Gizmos.DrawWireSphere(topPos, 0.5f);
        Gizmos.DrawWireSphere(bottomPos, 0.5f);
        Gizmos.DrawLine(topPos, centerVPos);
        Gizmos.DrawLine(bottomPos, centerVPos);

#if UNITY_EDITOR
        UnityEditor.Handles.Label(leftPos + Vector3.up, "Off-screen Left");
        UnityEditor.Handles.Label(rightPos + Vector3.up, "Off-screen Right");
        UnityEditor.Handles.Label(topPos + Vector3.right, "Off-screen Top");
        UnityEditor.Handles.Label(bottomPos + Vector3.right, "Off-screen Bottom");
#endif
    }
}
