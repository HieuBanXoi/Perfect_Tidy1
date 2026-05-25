#if UNITY_EDITOR
using UnityEditor;
#endif
using UnityEngine;

/// <summary>
/// Cung cấp một context menu để tự động hóa việc thiết lập vật phẩm.
/// Đặt component này lên một đối tượng quản lý trong scene của bạn.
/// </summary>
public class ItemSetupTool : MonoBehaviour
{
    [Header("Holder Parents")]
    [Tooltip("GameObject cha chứa tất cả các vật phẩm tĩnh (static).")]
    public Transform staticItemsParent;

    [Tooltip("GameObject cha chứa tất cả các vật phẩm động (dynamic), có thể tương tác.")]
    public Transform dynamicItemsParent;

    [Tooltip("GameObject cha chứa các vị trí đúng (holder). Tên holder phải theo dạng 'Holder_<TênVậtPhẩm>'.")]
    public Transform correctPositionsParent;

#if UNITY_EDITOR
    [ContextMenu("Bake Item Data")]
    public void BakeItemData()
    {
        if (staticItemsParent == null || dynamicItemsParent == null || correctPositionsParent == null)
        {
            Debug.LogError("Vui lòng gán tất cả các transform cha trong inspector trước khi bake.", this);
            return;
        }

        // Ghi nhận các thay đổi để có thể Undo
        Undo.RecordObject(this, "Bake Item Data");

        Debug.Log("--- Bắt đầu quá trình Bake dữ liệu Item ---");

        // Xử lý các item động trước để thiết lập ID từ sortingOrder của chúng.
        ProcessDynamicItems();

        // Xử lý các item tĩnh, di chuyển chúng đến vị trí cuối cùng.
        ProcessStaticItems();

        Debug.Log("--- Quá trình Bake dữ liệu Item đã hoàn tất ---");
    }

    private void ProcessDynamicItems()
    {
        Debug.Log("Đang xử lý các Item động...");
        if (dynamicItemsParent.childCount == 0)
        {
            Debug.Log("Không có item động nào để xử lý.");
            return;
        }

        for (int i = 0; i < dynamicItemsParent.childCount; i++)
        {
            Transform itemTransform = dynamicItemsParent.GetChild(i);
            Item item = itemTransform.GetComponent<Item>();
            if (item == null)
            {
                Debug.LogWarning($"Bỏ qua item động '{itemTransform.name}' vì thiếu script Item.", itemTransform);
                continue;
            }

            // Cache transform
            Undo.RecordObject(item, "Cache Transform");
            item.tf = itemTransform;
            EditorUtility.SetDirty(item);

            // Tự động gán SpriteRenderer nếu nó chưa được gán
            if (item.spriteRenderer == null)
            {
                item.spriteRenderer = itemTransform.GetComponent<SpriteRenderer>();
                if (item.spriteRenderer != null)
                {
                    Undo.RecordObject(item, "Assign SpriteRenderer");
                    EditorUtility.SetDirty(item);
                    Debug.Log($"Đã tự động gán SpriteRenderer cho item động '{item.name}'.");
                }
            }

            if (item.spriteRenderer == null)
            {
                Debug.LogWarning($"Bỏ qua item động '{itemTransform.name}' vì thiếu component SpriteRenderer.", itemTransform);
                continue;
            }

            // 1. Gán ID cho item động dựa trên sortingOrder.
            int newId = item.spriteRenderer.sortingOrder;
            if (item.id != newId)
            {
                Undo.RecordObject(item, "Set Item ID");
                item.id = newId;
                EditorUtility.SetDirty(item);
            }
            Debug.Log($"Item động '{item.name}' -> ID được gán là {item.id} (từ sortingOrder).");

            // 2. Tìm holder tương ứng và gán cùng một ID.
            string holderName = "Holder_" + item.name;
            Transform holderTransform = correctPositionsParent.Find(holderName);

            if (holderTransform != null)
            {
                ItemHolder holder = holderTransform.GetComponent<ItemHolder>();
                if (holder != null)
                {
                    if (holder.id != item.id)
                    {
                        Undo.RecordObject(holder, "Set Holder ID");
                        holder.id = item.id;
                        EditorUtility.SetDirty(holder);
                    }
                    Debug.Log($"...Holder tương ứng '{holderName}' -> ID được gán là {holder.id}.");
                }
                else
                {
                    Debug.LogWarning($"Holder '{holderName}' thiếu component ItemHolder.", holderTransform);
                }

                // 3. Sao chép BoxCollider từ item động sang holder của nó.
                BoxCollider sourceCollider = itemTransform.GetComponent<BoxCollider>();
                if (sourceCollider != null)
                {
                    BoxCollider targetCollider = holderTransform.GetComponent<BoxCollider>();
                    if (targetCollider == null)
                    {
                        targetCollider = Undo.AddComponent<BoxCollider>(holderTransform.gameObject);
                        Debug.Log($"...Đã thêm BoxCollider vào holder '{holderName}'.");
                    }

                    Undo.RecordObject(targetCollider, "Copy Collider Properties");

                    targetCollider.center = sourceCollider.center;
                    targetCollider.size = sourceCollider.size;
                    targetCollider.isTrigger = true; // Holder nên là trigger để bắt sự kiện va chạm

                    EditorUtility.SetDirty(targetCollider);
                    Debug.Log($"...Đã sao chép thuộc tính BoxCollider từ '{item.name}' sang '{holderName}'.");
                }

                // 4. Gán rotation Z ngẫu nhiên
                float randomZ = UnityEngine.Random.Range(15f, 45f) * (UnityEngine.Random.value > 0.5f ? 1f : -1f);
                Undo.RecordObject(itemTransform, "Set Random Rotation");
                itemTransform.rotation = Quaternion.Euler(0, 0, randomZ);
                EditorUtility.SetDirty(itemTransform);
                Debug.Log($"...Đã gán rotation ngẫu nhiên (Z={randomZ}) cho item động '{item.name}'.");

                // 5. Tìm, gán và vô hiệu hóa shadow
                string shadowName = "Shadow";
                Transform shadow = itemTransform.Find(shadowName);
                if (shadow != null)
                {
                    Vector3 originalLocalPosition = shadow.localPosition;

                    Undo.SetTransformParent(shadow, holderTransform, "Move Shadow to Holder");

                    Undo.RecordObject(shadow, "Adjust Shadow Transform");
                    shadow.localPosition = originalLocalPosition;
                    shadow.localRotation = Quaternion.identity;
                    shadow.localScale = Vector3.one;

                    // Gán transform shadow vào item
                    Undo.RecordObject(item, "Assign Shadow on Holder");
                    item.shadowOnHolder = shadow;

                    if (shadow.gameObject.activeSelf)
                    {
                        Undo.RecordObject(shadow.gameObject, "Deactivate Shadow");
                        shadow.gameObject.SetActive(false);
                        EditorUtility.SetDirty(shadow.gameObject);
                    }
                    Debug.Log($"...Đã di chuyển, gán và vô hiệu hóa shadow '{shadowName}' vào holder '{holderName}'.");
                }
                else
                {
                    Debug.LogWarning($"...Không tìm thấy shadow có tên '{shadowName}' cho item động '{item.name}'.", itemTransform);
                }

                // 6. Gán transform target cho tutorial
                Undo.RecordObject(item, "Assign Correct Holder");
                item.correctHolderTransform = holderTransform;
                EditorUtility.SetDirty(item);
                Debug.Log($"...Đã gán correct holder cho item động '{item.name}'.");
            }
            else
            {
                Debug.LogWarning($"Không thể tìm thấy holder có tên '{holderName}' cho item động '{item.name}'.", item);
            }
        }
    }

    private void ProcessStaticItems()
    {
        Debug.Log("Đang xử lý các Item tĩnh...");
        if (staticItemsParent.childCount == 0)
        {
            Debug.Log("Không có item tĩnh nào để xử lý.");
            return;
        }

        for (int i = 0; i < staticItemsParent.childCount; i++)
        {
            Transform itemTransform = staticItemsParent.GetChild(i);
            string holderName = "Holder_" + itemTransform.name;
            Transform holderTransform = correctPositionsParent.Find(holderName);

            if (holderTransform != null)
            {
                Undo.RecordObject(itemTransform, "Position Static Item");
                // 1. Di chuyển đến đúng vị trí và góc xoay.
                itemTransform.position = holderTransform.position;
                itemTransform.rotation = holderTransform.rotation;
                
                // 2. Đặt scale về (1, 1, 1).
                itemTransform.localScale = Vector3.one;

                EditorUtility.SetDirty(itemTransform);
                Debug.Log($"Item tĩnh '{itemTransform.name}' -> Đã được định vị và đặt lại scale.");

                // 3. Đảm bảo nó có component Item và đặt nó vào trạng thái 'OnGoal'.
                Item item = itemTransform.GetComponent<Item>();
                if (item == null)
                {
                    item = Undo.AddComponent<Item>(itemTransform.gameObject);
                    Debug.Log($"...Đã thêm component Item vào '{itemTransform.name}'.");
                }

                // Cache transform
                Undo.RecordObject(item, "Cache Transform");
                item.tf = itemTransform;
                EditorUtility.SetDirty(item);

                // Tự động gán SpriteRenderer nếu nó chưa được gán
                if (item.spriteRenderer == null)
                {
                    item.spriteRenderer = itemTransform.GetComponent<SpriteRenderer>();
                    if (item.spriteRenderer != null)
                    {
                        Undo.RecordObject(item, "Assign SpriteRenderer");
                        EditorUtility.SetDirty(item);
                        Debug.Log($"...Đã tự động gán SpriteRenderer cho item tĩnh '{item.name}'.");
                    }
                }
                
                // 4. Gán ID từ sortingOrder của item và gán cho holder tương ứng.
                if (item.spriteRenderer == null)
                {
                    Debug.LogWarning($"Không thể gán ID cho item tĩnh '{itemTransform.name}' vì thiếu SpriteRenderer.", itemTransform);
                }
                else
                {
                    int newId = item.spriteRenderer.sortingOrder;
                    if (item.id != newId)
                    {
                        Undo.RecordObject(item, "Set Static Item ID");
                        item.id = newId;
                    }
                    Debug.Log($"Item tĩnh '{itemTransform.name}' -> ID được gán là {item.id} (từ sortingOrder).");

                    ItemHolder holder = holderTransform.GetComponent<ItemHolder>();
                    if (holder != null)
                    {
                        if (holder.id != item.id)
                        {
                            Undo.RecordObject(holder, "Set Holder ID");
                            holder.id = item.id;
                            EditorUtility.SetDirty(holder);
                        }
                        Debug.Log($"...Holder tương ứng '{holderName}' -> ID được gán là {holder.id}.");
                    }
                    else
                    {
                        Debug.LogWarning($"Không tìm thấy ItemHolder trên '{holderName}' để gán ID cho item tĩnh '{itemTransform.name}'.", itemTransform);
                    }
                }

                // 5. Đặt về trạng thái cuối cùng, làm cho nó không thể tương tác.
                if (item.currentState != ItemState.OnGoal)
                {
                    Undo.RecordObject(item, "Set Item State to OnGoal");
                    item.ChangeState(ItemState.OnGoal);
                    item.gameObject.layer = LayerMask.NameToLayer("Default");
                    Collider col = itemTransform.GetComponent<Collider>();
                    if (col != null)
                    {
                        Undo.RecordObject(col, "Disable Collider");
                        col.enabled = false;
                    }
                    item.enabled = false; // Vô hiệu hóa vòng lặp Update của script Item.
                    Debug.Log($"...Đặt trạng thái thành OnGoal và vô hiệu hóa các component cho '{itemTransform.name}'.");
                }
                
                EditorUtility.SetDirty(item);

                // Also set correctHolderTransform for static items for consistency
                Undo.RecordObject(item, "Assign Correct Holder");
                item.correctHolderTransform = holderTransform;

                // 6. Kích hoạt shadow cho item tĩnh vì nó đã ở đúng vị trí
                string shadowName = "Shadow";
                Transform shadow = itemTransform.Find(shadowName);
                if (shadow != null)
                {
                    Undo.RecordObject(item, "Assign Shadow");
                    item.shadowOnHolder = shadow;

                    if (!shadow.gameObject.activeSelf)
                    {
                        Undo.RecordObject(shadow.gameObject, "Activate Shadow");
                        shadow.gameObject.SetActive(true);
                        EditorUtility.SetDirty(shadow.gameObject);
                    }
                    Debug.Log($"...Đã gán và kích hoạt shadow cho item tĩnh '{itemTransform.name}'.");
                }
                else
                {
                    Debug.LogWarning($"...Không tìm thấy shadow có tên '{shadowName}' cho item tĩnh '{itemTransform.name}'.");
                }
            }
            else
            {
                Debug.LogWarning($"Không thể tìm thấy holder có tên '{holderName}' cho item tĩnh '{itemTransform.name}'.", itemTransform);
            }
        }
    }
#endif
}