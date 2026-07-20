using UnityEngine;

public class WinState : IGameState
{
    public void OnEnter(GameManager gameManager)
    {
        UIManager.Ins.ActiveGameWinUI(true);
        UIManager.Ins.ActiveDownloadButtons(false);
        gameManager.isGotoStore = true;
    }

    public void OnExecute(GameManager gameManager)
    {

    }

    public void OnExit(GameManager gameManager)
    {
    }
}
