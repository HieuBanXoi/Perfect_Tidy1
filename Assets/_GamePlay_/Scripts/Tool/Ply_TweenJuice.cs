using UnityEngine;
using DG.Tweening;

public class Ply_TweenJuice : MonoBehaviour
{
    [Header("--- CẤU HÌNH CHUNG ---")]
    public float duration = 0.3f;
    public bool ignoreTimeScale = false;

    [Header("--- THÔNG SỐ PUNCH (Nảy) ---")]
    public Vector3 punchAmount = new Vector3(0.2f, 0.2f, 0.2f);
    public int vibrato = 10;
    public float elasticity = 1f;

    [Header("--- THÔNG SỐ SHAKE (Rung) ---")]
    public float shakeStrength = 0.5f;
    public int shakeVibrato = 10;
    public float shakeRandomness = 90f;

    /// <summary>
    /// Hiệu ứng nảy Scale (Thường dùng khi click hoặc vật phẩm rơi vào nồi)
    /// </summary>
    public void PlayPunchScale()
    {
        transform.DOKill(true);
        transform.DOPunchScale(punchAmount, duration, vibrato, elasticity)
                 .SetUpdate(ignoreTimeScale);
    }

    /// <summary>
    /// Hiệu ứng nảy xoay (Thường dùng khi dao chém hoặc va chạm)
    /// </summary>
    public void PlayPunchRotation()
    {
        transform.DOKill(true);
        transform.DOPunchRotation(punchAmount * 45f, duration, vibrato, elasticity)
                 .SetUpdate(ignoreTimeScale);
    }

    /// <summary>
    /// Hiệu ứng rung vị trí (Thường dùng khi máy xay đang chạy hoặc nước sôi)
    /// </summary>
    public void PlayShakePosition()
    {
        transform.DOKill(true);
        transform.DOShakePosition(duration, shakeStrength, shakeVibrato, shakeRandomness)
                 .SetUpdate(ignoreTimeScale);
    }

    /// <summary>
    /// Hiệu ứng rung xoay (Thường dùng khi vật thể bị kẹt hoặc rung chuông)
    /// </summary>
    public void PlayShakeRotation()
    {
        transform.DOKill(true);
        transform.DOShakeRotation(duration, shakeStrength * 20f, shakeVibrato, shakeRandomness)
                 .SetUpdate(ignoreTimeScale);
    }

    /// <summary>
    /// Phóng to vật thể
    /// </summary>
    public void ScaleUp(float targetScale = 1.2f)
    {
        transform.DOScale(targetScale, duration).SetEase(Ease.OutBack);
    }

    /// <summary>
    /// Thu nhỏ vật thể về 0 (Biến mất)
    /// </summary>
    public void ScaleZero()
    {
        transform.DOScale(0, duration).SetEase(Ease.InBack);
    }
}