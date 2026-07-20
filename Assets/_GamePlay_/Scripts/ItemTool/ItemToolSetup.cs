using UnityEngine;
using System.Collections.Generic;
using UnityEngine.Events;

#if UNITY_EDITOR
using UnityEditor.Events;
using UnityEditor;


/// <summary>
/// Một cửa sổ công cụ editor để tự động thiết lập các đối tượng Item từ SpriteRenderers.
/// Cách sử dụng:
/// 1. Mở cửa sổ từ menu Tools > Item Setup Tool.
/// 2. Kéo SpriteRenderer của Pan, Stove Button và các item khác vào các trường tương ứng.
/// 3. Nhấn nút "Setup All Items".
/// 5. Script sẽ tự động tạo cấu trúc, gán component và kết nối các sự kiện.
/// </summary>
public class ItemToolSetup : EditorWindow
{
    [Header("--- CORE ITEMS ---")]
    [Tooltip("Kéo SpriteRenderer của Pan vào đây.")]
    public SpriteRenderer panSprite;
    [Tooltip("Kéo SpriteRenderer của nút bếp (Stove Button) vào đây.")]
    public SpriteRenderer stoveBtnSprite;

    [Header("--- OTHER ITEMS ---")]
    [Tooltip("Danh sách các SpriteRenderer của các item khác cần được thiết lập.")]
    public List<SpriteRenderer> otherItemSprites = new List<SpriteRenderer>();

    private Vector2 scrollPosition;

    // Thêm một menu item để mở cửa sổ này
    [MenuItem("Tools/Item Setup Tool")]
    public static void ShowWindow()
    {
        // Lấy cửa sổ đang có hoặc tạo mới
        GetWindow<ItemToolSetup>("Item Setup Tool");
    }

    // Hàm vẽ giao diện cho cửa sổ
    void OnGUI()
    {
        GUILayout.Label("Thiết lập Item tự động", EditorStyles.boldLabel);
        scrollPosition = EditorGUILayout.BeginScrollView(scrollPosition);

        SerializedObject serializedObject = new SerializedObject(this);
        EditorGUILayout.PropertyField(serializedObject.FindProperty("panSprite"));
        EditorGUILayout.PropertyField(serializedObject.FindProperty("stoveBtnSprite"));
        EditorGUILayout.PropertyField(serializedObject.FindProperty("otherItemSprites"), true);

        serializedObject.ApplyModifiedProperties();

        EditorGUILayout.Space();

        if (GUILayout.Button("Setup All Items"))
        {
            SetupAllItems();
        }

        EditorGUILayout.EndScrollView();
    }

    public void SetupAllItems()
    {
        if (otherItemSprites != null && otherItemSprites.Count > 0)
        {
            foreach (var spriteRenderer in otherItemSprites)
            {
                if (spriteRenderer != null)
                {
                    SetupGenericItem(spriteRenderer);
                }
            }
        }


        Debug.Log("Thiết lập hoàn tất!");
    }

    private void SetupGenericItem(SpriteRenderer spriteRenderer)
    {
        
        if (spriteRenderer.transform.parent != null && spriteRenderer.transform.parent.GetComponent<Item>() != null)
        {
            Debug.Log($"Item '{spriteRenderer.name}' có vẻ đã được thiết lập. Bỏ qua.");
            return;
        }

        GameObject originalGO = spriteRenderer.gameObject;
        string itemName = originalGO.name;

        // Tạo GameObject cha
        GameObject parentGO = new GameObject(itemName);
        parentGO.transform.position = originalGO.transform.position;
        parentGO.transform.rotation = originalGO.transform.rotation;

        // Đặt SpriteRenderer làm con
        originalGO.transform.SetParent(parentGO.transform, true);

        // Thêm các component cần thiết vào cha
        parentGO.AddComponent<Item>();
        parentGO.AddComponent<ItemDraggable>();
        parentGO.AddComponent<ItemMoveToTarget>();
        parentGO.AddComponent<Animator>();

        // Thêm và cấu hình Collider
        AddCollider(parentGO, spriteRenderer);
    }


    private void AddCollider(GameObject targetGO, SpriteRenderer spriteRenderer)
    {
        Bounds spriteBounds = spriteRenderer.bounds;
        float colliderPadding = 1.2f; // Lớn hơn sprite 20% để dễ bấm

        float aspectRatio = spriteBounds.size.y > 0.01f ? spriteBounds.size.x / spriteBounds.size.y : 1f;

        if (aspectRatio > 1.5f || aspectRatio < (1f / 1.5f)) // Nếu item dài theo chiều ngang hoặc dọc
        {
            var collider = targetGO.AddComponent<CapsuleCollider>();
            collider.center = Vector3.zero;
            if (spriteBounds.size.x > spriteBounds.size.y) // Ngang
            {
                collider.direction = 0; // X-axis
                collider.height = spriteBounds.size.x * colliderPadding;
                collider.radius = spriteBounds.size.y / 2f * colliderPadding;
            }
            else // Dọc
            {
                collider.direction = 1; // Y-axis
                collider.height = spriteBounds.size.y * colliderPadding;
                collider.radius = spriteBounds.size.x / 2f * colliderPadding;
            }
        }
        else // Nếu item gần vuông/tròn
        {
            var collider = targetGO.AddComponent<SphereCollider>();
            collider.center = Vector3.zero;
            collider.radius = Mathf.Max(spriteBounds.size.x, spriteBounds.size.y) / 2f * colliderPadding;
        }
    }

}
#endif
