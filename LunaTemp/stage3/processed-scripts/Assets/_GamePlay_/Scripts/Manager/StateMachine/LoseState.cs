using UnityEngine;

public class LoseState : IGameState
{
    public void OnEnter(GameManager gameManager)
    {
        UIManager.Ins.ActiveGameLoseUI(true);
        gameManager.isGotoStore = true;
        gameManager.isPlaying = false;

    }

    public void OnExecute(GameManager gameManager)
    {

    }

    public void OnExit(GameManager gameManager)
    {
    }
}
