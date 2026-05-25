using System.Collections;
using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class UIManager : Ply_Singleton<UIManager>
{
    public GameObject winUI;
    public GameObject loseUI;
    public GameObject tutorial;
    public GameObject verticalUI;
    public GameObject horizontalUI;
    public Button downloadBtnVertical;
    public Button dowloadBtnHorizontal;
    public Slider progressSlider;
    public TextMeshProUGUI progressText;
    public float screenWidth;
    public float screenHeight;
    public float scaleHeightOnWidth;
    private float originalFov;
    private int totalItems;
    private int placedItems;
    private Color originalTextColor;
    public bool isVertical;
    public Camera cam;


    protected void Start()
    {
        // downloadBtnVertical.onClick.AddListener(GoToStore);
        // dowloadBtnHorizontal.onClick.AddListener(GoToStore);

        winUI.SetActive(false);
        loseUI.SetActive(false);
        tutorial.SetActive(false);
        UpdateUI();
        if (cam != null)
        {
            originalFov = cam.fieldOfView;
            cam.fieldOfView *= 1.1f;
        }
        if (progressText != null)
        {
            originalTextColor = progressText.color;
        }
    }

    private void Update()
    {
        // Kiểm tra xem kích thước màn hình có thay đổi không (ví dụ: người chơi xoay thiết bị)
        if (Screen.width != screenWidth || Screen.height != screenHeight)
        {
            // Cập nhật ngay biến tạm để tránh việc gọi Coroutine liên tục trong các frame tiếp theo
            screenWidth = Screen.width;
            screenHeight = Screen.height;
            StartCoroutine(DelayUpdateUIRoutine());
        }
    }

    private IEnumerator DelayUpdateUIRoutine()
    {
        yield return null; // Đợi 1 frame để Luna Engine và Canvas cập nhật xong tỷ lệ nội bộ
        UpdateUI();
    }

    public void UpdateUI()
    {
        winUI.SetActive(false);
        loseUI.SetActive(false);
        // tutorial.SetActive(true);
        GetScreenSize();
        GetSreenType();
        ScreenScale();
    }

    private void GetScreenSize()
    {
        screenHeight = Screen.height;
        screenWidth = Screen.width;
    }
    private void GetSreenType()
    {
        isVertical = (screenHeight > screenWidth * 0.8f);
        scaleHeightOnWidth = screenHeight / screenWidth;
    }


    private void ScreenScale()
    {
        if (!isVertical)
        {
            // cam.orthographicSize = 1.65f;
            cam.fieldOfView = 116;
            verticalUI.SetActive(false);
            horizontalUI.SetActive(true);
            return;
        }
        // cam.orthographicSize = 1.65f;
        verticalUI.SetActive(true);
        horizontalUI.SetActive(false);
        cam.fieldOfView = 116;
        if (scaleHeightOnWidth > 1.9)
        {
            cam.fieldOfView = 120;

            // cam.orthographicSize = 1.8f;
        }
        if (scaleHeightOnWidth > 2)
        {
            cam.fieldOfView = 123;

            // cam.orthographicSize = 1.9f;
        }
        if (scaleHeightOnWidth > 2.1f)
        {
            cam.fieldOfView = 127;

            // cam.orthographicSize = 2f;
        }
        if (scaleHeightOnWidth > 2.3f)
        {
            cam.fieldOfView = 130;

            // cam.orthographicSize = 2.3f;
        }


    }

    public void ActiveGameWinUI(bool isActive)
    {
        winUI.SetActive(isActive);
    }
    public void ActiveGameLoseUI(bool isActive)
    {
        loseUI.SetActive(isActive);
    }
    public void ActiveTutorialUI(bool isActive)
    {
        tutorial.SetActive(isActive);
    }

    public void ZoomInCamera()
    {
        if (cam != null && Mathf.Abs(cam.fieldOfView - originalFov) > 0.01f)
        {
            DOTween.To(() => cam.fieldOfView, x => cam.fieldOfView = x, originalFov, 1f);
        }
    }

    public void SetupProgressBar(int total)
    {
        totalItems = total;
        placedItems = 0;

        if (progressSlider != null)
        {
            progressSlider.maxValue = 100;
            progressSlider.value = 100 - totalItems;
        }
        UpdateProgressText();
    }

    public void UpdateProgress()
    {
        placedItems++;

        if (progressSlider != null)
        {
            progressSlider.DOValue(100 - (totalItems - placedItems), 0.3f);
        }

        UpdateProgressText();

        if (progressText != null)
        {
            progressText.transform.DOKill();
            var sequence = DOTween.Sequence();
            sequence.Append(progressText.transform.DOScale(1.2f, 0.1f).SetEase(Ease.OutBack));
            // sequence.Join(progressText.DOColor(Color.green, 0.1f));
            sequence.AppendInterval(0.3f);
            sequence.Append(progressText.transform.DOScale(1f, 0.1f));
            // sequence.Join(progressText.DOColor(originalTextColor, 0.1f));
        }
    }

    private void UpdateProgressText()
    {
        if (progressText != null)
        {
            int currentProgress = 100 - (totalItems - placedItems);
            progressText.text = $"{currentProgress}/100";
        }
    }
}
