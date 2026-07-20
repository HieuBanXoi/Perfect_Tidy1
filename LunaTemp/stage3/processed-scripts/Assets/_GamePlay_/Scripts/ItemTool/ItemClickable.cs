using UnityEngine;
using UnityEngine.Events;
using System.Collections.Generic;

[RequireComponent(typeof(Collider))] // Chuyển sang 3D
public class ItemClickable : MonoBehaviour
{
    [Header("--- CÀI ĐẶT CLICK ---")]
    public int requiredClicks = 1;
    public bool infiniteClick = false;
    public bool canClick = true;
    [Tooltip("Vô hiệu hóa click sau khi nhấn. Dùng Animation Event gọi hàm EnableClick() ở cuối animation để mở lại.")]
    public bool disableAfterClick = false;

    [Header("--- SỰ KIỆN ---")]
    [Tooltip("Sự kiện chung, được gọi mỗi khi click. Sẽ bị bỏ qua nếu 'Sự Kiện Theo Thứ Tự' được sử dụng.")]
    public UnityEvent onClick;
    [Tooltip("Danh sách các sự kiện cho từng lần click cụ thể. Nếu danh sách này có phần tử, nó sẽ được ưu tiên sử dụng thay cho sự kiện 'onClick' ở trên. Phần tử 0 là cho click #1, phần tử 1 cho click #2...")]
    public List<UnityEvent> sequentialOnClicks;
    [Tooltip("Sự kiện được gọi khi đã đạt đủ số lần click yêu cầu.")]
    public UnityEvent onClickComplete;

    private int currentClicks = 0;

    public void PerformClick()
    {
        if (!canClick) return;

        if (disableAfterClick)
        {
            canClick = false;
        }

        currentClicks++;

        // Nếu danh sách sự kiện theo thứ tự được sử dụng, nó sẽ thay thế hoàn toàn cho onClick chung.
        if (sequentialOnClicks != null && sequentialOnClicks.Count > 0)
        {
            int eventIndex = currentClicks - 1;
            if (eventIndex < sequentialOnClicks.Count)
            {
                sequentialOnClicks[eventIndex]?.Invoke();
            }
        }
        else
        {
            // Nếu không, sử dụng sự kiện onClick chung.
            onClick?.Invoke();
        }

        if (infiniteClick) return;

        if (currentClicks >= requiredClicks)
        {
            onClickComplete?.Invoke();
            currentClicks = 0; // Reset lại số lần click
        }
    }

    public void CanClick(bool canClick)
    {
        this.canClick = canClick;
    }
    public void EnableClick()
    {
        canClick = true;
    }
    public void PlayPopSound()
    {
        if (Ply_SoundManager.Ins == null) return;

        Ply_SoundManager.Ins.PlayFx(FxType.Click);
    }
}
