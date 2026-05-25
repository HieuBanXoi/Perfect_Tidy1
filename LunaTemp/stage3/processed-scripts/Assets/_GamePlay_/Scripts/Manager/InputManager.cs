using UnityEngine;
using DG.Tweening;

public class InputManager : Ply_Singleton<InputManager>
{
    [Header("Components")]
    [SerializeField] private Camera mainCamera;

    [Header("Layer Settings")]
    public LayerMask itemLayer;
    public LayerMask targetLayer;
    public LayerMask defaultLayer;
    public LayerMask boxLayer;
    
    public bool isDragging = false;

    public override void Awake()
    {
        base.Awake();
        if (mainCamera == null)
        {
            mainCamera = Camera.main;
        }

        if (mainCamera == null) 
            Debug.LogError("InputManager: Main Camera is not assigned and could not be found. Please assign it in the Inspector or ensure a camera is tagged 'MainCamera'.", this);
    }

    private void Update()
    {
        if (!GameManager.Ins.isPlaying) return;

        if (Input.GetMouseButtonDown(0) && !isDragging)
        {
            HandleClick();
        }
    }

    private void HandleClick()
    {
        if (mainCamera == null) return;

        GameManager.Ins.ResetInactivityTimer();

        Ray ray = mainCamera.ScreenPointToRay(Input.mousePosition);
        RaycastHit hit;

        // Ưu tiên click vào Box trước
        if (Physics.Raycast(ray, out hit, 100f, boxLayer))
        {
            Box clickedBox = ComponentCache<Box>.Get(hit.collider);
            if (clickedBox != null)
            {
                clickedBox.OnClicked();
                return; // Đã click vào box, không xử lý thêm
            }
        }

        // Dùng RaycastAll để quét tất cả các item bị click trúng
        RaycastHit[] hits = Physics.RaycastAll(ray, 100f, itemLayer);
        
        if (hits.Length > 0)
        {
            
            Item topItem = null;
            int highestSortingOrder = int.MinValue;

            // Lọc ra Item có sortingOrder cao nhất (nằm trên cùng)
            for (int i = 0; i < hits.Length; i++)
            {
                Item clickedItem = ComponentCache<Item>.Get(hits[i].collider);
                
                if (clickedItem != null && clickedItem.currentState == ItemState.Waitting)
                {
                    // Lấy sorting order hiện tại của item
                    int currentOrder = clickedItem.spriteRenderer != null ? clickedItem.spriteRenderer.sortingOrder : 0;

                    // So sánh để tìm ra item nằm trên cùng
                    if (currentOrder > highestSortingOrder)
                    {
                        highestSortingOrder = currentOrder;
                        topItem = clickedItem;
                    }
                }
            }

            // Thực hiện kéo thả với Item trên cùng đã tìm được
            if (topItem != null)
            {
                // Đưa orderLayer của item lên mức currentLayer hiện tại
                topItem.SetSortingOrder(GameManager.Ins.currentLayer);
                
                // Cộng currentLayer lên 1 để lần click vào vật khác sau đó sẽ đè lên vật này
                GameManager.Ins.currentLayer++; 

                topItem.StartDrag();
                isDragging = true;
            }
        }
    }
}