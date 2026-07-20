using UnityEngine;
using UnityEngine.UI;
using DG.Tweening;
using TMPro;

public class ProgressSlider : Ply_Singleton<ProgressSlider>
{
    public Slider progressSlider;
    public int maxProgressItems = 100;
    public int startProgressItems = 0;
    public TextMeshProUGUI progressText;

    private int totalItems;
    private int placedItems;
    void Start()
    {
        SetupProgressBar(0);
    }

    public void SetupProgressBar(int total)
    {
        totalItems = total;
        placedItems = 0;

        if (progressSlider != null)
        {
            progressSlider.maxValue = maxProgressItems;
            progressSlider.value = startProgressItems;
        }
        UpdateProgressText();
    }

    public void AddProgressSlide()
    {
        placedItems++;

        if (progressSlider != null)
        {
            progressSlider.DOValue(startProgressItems + placedItems, 0.3f);
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
            int currentProgress = startProgressItems + placedItems;
            progressText.text = $"{currentProgress}/{maxProgressItems}";
        }
    }
    public void ResetProgress()
    {
        placedItems = 0;
        if (progressSlider != null)
        {
            progressSlider.value = startProgressItems;
        }
        UpdateProgressText();
    }
}