using UnityEngine;
using Luna.Unity;
using System;
public class GameManager : Ply_Singleton<GameManager>
{
    private IGameState currentState;
    public bool isPlaying = false;
    public bool isTutorial = true;
    public bool isGotoStore = false;
    public bool isLoseGame = false;
    public int countMove = 0;
    public int currentLayer;
    public Transform trashCan;
    public Transform step1;
    public PaperBox paperBox;

    private void Start()
    {
        ChangeState(new OnPlayState());
    }
    private void Update()
    {
        if (isGotoStore && Input.GetMouseButtonUp(0))
        {
            GotoStore();
        }
        if (currentState != null)
        {
            currentState.OnExecute(this);
        }
    }
    public void ChangeState(IGameState newState)
    {
        currentState?.OnExit(this);

        currentState = newState;

        currentState?.OnEnter(this);
    }
    public bool IsPlaying()
    {
        return isPlaying;
    }
    public void SetIsPlaying(bool isPlaying)
    {
        this.isPlaying = isPlaying;
    }
    public void GotoStore()
    {
        LifeCycle.GameEnded();
        Playable.InstallFullGame();
    }
    public void MoveOne()
    {
        countMove++;
        if (countMove == 100)
        {
            isPlaying = false;
            isGotoStore = true;
        }
    }
    public void TurnOffTut()
    {
        if (isTutorial)
        {
            UIManager.Ins.ActiveTutorialUI(false);
            isTutorial = false;
        }
    }
    public void WinGame()
    {
        isLoseGame = false;
        isPlaying = false;
        ChangeState(new WinState());
    }
    public void LoseGame()
    {
        isLoseGame = true;
        isPlaying = false;
        ChangeState(new LoseState());
    }
    public void ChangeTrashTarget(Transform newTarget)
    {
        trashCan = newTarget;
    }
    public void ChangePaperBoxTarget(PaperBox newTarget)
    {
        paperBox = newTarget;
    }
}
