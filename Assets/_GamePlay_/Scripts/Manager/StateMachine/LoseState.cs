using UnityEngine;

public class LoseState : IGameState
{
    public void OnEnter(GameManager gameManager)
    {
        UIManager.Ins.ActiveGameLoseUI(true);
        gameManager.isGotoStore = true;

        CameraController cameraController = Object.FindObjectOfType<CameraController>();
        if (cameraController != null)
        {
            cameraController.SetInputEnabled(false);
        }
    }

    public void OnExecute(GameManager gameManager)
    {

    }

    public void OnExit(GameManager gameManager)
    {
    }
}
