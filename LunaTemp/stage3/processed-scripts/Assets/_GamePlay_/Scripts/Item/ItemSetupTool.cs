#if UNITY_EDITOR
using System;
using System.Collections.Generic;
using UnityEditor;
#endif
using UnityEngine;

public class ItemSetupTool : MonoBehaviour
{
    [Header("Bake Source")]
    [Tooltip("Parent containing item SpriteRenderers and their shadows. Shadows must be named <item name>_sd.")]
    public Transform spritesParent;

    [Tooltip("Parent where Holder_<item name> target objects will be created or updated.")]
    public Transform holdersParent;

    [Header("Naming")]
    public string shadowSuffix = "_sd";
    public string holderPrefix = "Holder_";
    public string holdersParentName = "ItemHolders";

    [Header("Collider")]
    public float colliderDepth = 0.2f;
    public float colliderSizeMultiplier = 1.2f;
    public Vector2 minColliderSize = new Vector2(0.1f, 0.1f);

    [Header("Generated Shadow")]
    public Color generatedShadowColor = new Color(0f, 0f, 0f, 0.25f);
    public Color fadedBlackShadowColor = new Color(0f, 0f, 0f, 0.18f);
    public Vector3 generatedShadowLocalOffset = Vector3.zero;

    [Header("Optional Layers")]
    [Tooltip("Leave empty to keep the item's current layer.")]
    public LayerMask itemLayer;

    [Tooltip("Leave empty to keep the holder's current layer.")]
    public LayerMask holderLayer;

#if UNITY_EDITOR
    [ContextMenu("Bake Item Data")]
    public void BakeItemData()
    {
        if (spritesParent == null)
        {
            spritesParent = transform;
            EditorUtility.SetDirty(this);
        }

        if (string.IsNullOrEmpty(shadowSuffix))
        {
            Debug.LogError("shadowSuffix cannot be empty.", this);
            return;
        }

        Undo.RecordObject(this, "Bake Item Data");
        EnsureHoldersParent();

        // Collect all shadows first, as they might be children of items or directly under spritesParent
        Dictionary<string, Transform> shadowsByItemName = CollectShadows(spritesParent.GetComponentsInChildren<SpriteRenderer>(true));

        int itemCount = 0;
        // Iterate only through direct children of spritesParent
        for (int i = 0; i < spritesParent.childCount; i++)
        {
            Transform itemTransform = spritesParent.GetChild(i);
            SpriteRenderer spriteRenderer = itemTransform.GetComponent<SpriteRenderer>();

            // Skip if it's a shadow itself or doesn't have a SpriteRenderer
            if (spriteRenderer == null || IsShadowName(itemTransform.name))
            {
                // If it's an item that has already been processed by ExtractSpriteToModel,
                // its SpriteRenderer will be on a child "Model" GameObject.
                // We should skip this parent GameObject as it's not the primary sprite.
                // The BakeItem method expects the SpriteRenderer to be on the itemTransform itself
                // for initial processing.
                continue;
        }

            BakeItem(itemTransform, spriteRenderer, shadowsByItemName);
            itemCount++;
        }

        Debug.Log($"Bake Item Data completed. Processed {itemCount} item(s).", this);
    }

    [ContextMenu("Refresh Holder Targets")]
    public void RefreshHolderTargets()
    {
        if (!ValidateBakeParents())
        {
            return;
        }

        HashSet<string> validHolderNames = CollectValidHolderNames();
        int removedCount = 0;

        for (int i = holdersParent.childCount - 1; i >= 0; i--)
        {
            Transform holder = holdersParent.GetChild(i);
            if (!holder.name.StartsWith(holderPrefix, StringComparison.OrdinalIgnoreCase))
            {
                continue;
            }

            if (validHolderNames.Contains(holder.name))
            {
                continue;
            }

            Undo.DestroyObjectImmediate(holder.gameObject);
            removedCount++;
        }

        Debug.Log($"Refresh Holder Targets completed. Removed {removedCount} unused holder target(s).", this);
    }

    [ContextMenu("Create Missing Target Shadows")]
    public void CreateMissingTargetShadows()
    {
        if (!ValidateBakeParents())
        {
            return;
        }

        Dictionary<string, Item> itemsByName = CollectItemRenderersByName();
        int createdCount = 0;

        for (int i = 0; i < holdersParent.childCount; i++)
        {
            Transform holder = holdersParent.GetChild(i);
            if (!holder.name.StartsWith(holderPrefix, StringComparison.OrdinalIgnoreCase))
            {
                continue;
            }

            string itemName = holder.name.Substring(holderPrefix.Length);
            if (!itemsByName.TryGetValue(itemName, out Item item))
            {
                Debug.LogWarning($"Cannot create shadow for '{holder.name}' because item '{itemName}' was not found in spritesParent.", holder);
                continue;
            }

            Undo.RecordObject(item, "Configure Item Shadow Reference");
            item.tf = item.transform; // Ensure tf is set
            // item.spriteRenderer should already be set by ExtractSpriteToModel
            item.id = item.spriteRenderer.sortingOrder;
            item.correctHolderTransform = holder;
            item.enabled = true;
            EditorUtility.SetDirty(item);

            Transform shadow = FindShadowOnHolder(holder, itemName);
            if (shadow != null)
            {
                if (item.shadowOnHolder == null)
                {
                    Undo.RecordObject(item, "Assign Existing Shadow");
                    item.shadowOnHolder = shadow;
                    EditorUtility.SetDirty(item);
                }

                continue;
            }

            Transform createdShadow = CreateShadowFromItem(holder, itemName, item.spriteRenderer);
            Undo.RecordObject(item, "Assign Generated Shadow");
            item.shadowOnHolder = createdShadow;
            EditorUtility.SetDirty(item);

            createdCount++;
        }

        Debug.Log($"Create Missing Target Shadows completed. Created {createdCount} shadow(s).", this);
    }

    [ContextMenu("Sort Sprite Parent Items By Order")]
    public void SortSpriteParentItemsByOrder()
    {
        if (spritesParent == null)
        {
            Debug.LogError("Assign spritesParent before sorting items.", this);
            return;
        }

        List<Item> itemRenderers = new List<Item>();
        Item[] items = spritesParent.GetComponentsInChildren<Item>(true);

        for (int i = 0; i < items.Length; i++)
        {
            Item item = items[i];
            if (item.transform.parent != spritesParent)
            {
                continue;
            }

            if (IsShadowName(item.gameObject.name))
            {
                continue;
            }

            itemRenderers.Add(item);
        }

        itemRenderers.Sort((left, right) => {
            int orderCompare = left.id.CompareTo(right.id);
            if (orderCompare != 0)
            {
                return orderCompare;
            }

            return string.CompareOrdinal(left.gameObject.name, right.gameObject.name);
        });

        for (int i = 0; i < itemRenderers.Count; i++)
        {
            Transform itemTransform = itemRenderers[i].transform;
            Undo.RecordObject(itemTransform, "Sort Sprite Parent Items");
            itemTransform.SetSiblingIndex(i);
            EditorUtility.SetDirty(itemTransform);
        }

        Debug.Log($"Sorted {itemRenderers.Count} item(s) in spritesParent by sortingOrder ascending.", this);
    }

    [ContextMenu("Scale Item And Holder Colliders")]
    public void ScaleItemAndHolderColliders()
    {
        if (colliderSizeMultiplier <= 0f)
        {
            Debug.LogError("colliderSizeMultiplier must be greater than 0.", this);
            return;
        }

        int scaledCount = 0;

        if (spritesParent != null)
        {
            scaledCount += ScaleBoxCollidersInChildren(spritesParent, false);
        }

        if (holdersParent != null)
        {
            scaledCount += ScaleBoxCollidersInChildren(holdersParent, true);
        }

        Debug.Log($"Scaled {scaledCount} BoxCollider(s) by multiplier {colliderSizeMultiplier}.", this);
    }

    [ContextMenu("Set All Shadows To Faded Black")]
    public void SetAllShadowsToFadedBlack()
    {
        if (string.IsNullOrEmpty(shadowSuffix))
        {
            Debug.LogError("shadowSuffix cannot be empty.", this);
            return;
        }

        HashSet<SpriteRenderer> shadowRenderers = new HashSet<SpriteRenderer>();
        CollectShadowRenderers(spritesParent, shadowRenderers);
        CollectShadowRenderers(holdersParent, shadowRenderers);

        int updatedCount = 0;
        foreach (SpriteRenderer shadowRenderer in shadowRenderers)
        {
            if (shadowRenderer == null)
            {
                continue;
            }

            Undo.RecordObject(shadowRenderer, "Set Shadow Color");
            shadowRenderer.color = fadedBlackShadowColor;
            EditorUtility.SetDirty(shadowRenderer);
            updatedCount++;
        }

        Debug.Log($"Set {updatedCount} shadow(s) to faded black.", this);
    }

    private Dictionary<string, Transform> CollectShadows(SpriteRenderer[] renderers)
    {
        Dictionary<string, Transform> shadowsByItemName = new Dictionary<string, Transform>();

        for (int i = 0; i < renderers.Length; i++)
        {
            Transform shadow = renderers[i].transform;
            if (!IsShadowName(shadow.name))
            {
                continue;
            }

            string itemName = GetItemNameFromShadow(shadow.name);
            if (shadowsByItemName.ContainsKey(itemName))
            {
                Debug.LogWarning($"Duplicate shadow for '{itemName}'. Keeping the first one.", shadow);
                continue;
            }

            shadowsByItemName.Add(itemName, shadow);
        }

        return shadowsByItemName;
    }

    private void CollectShadowRenderers(Transform parent, HashSet<SpriteRenderer> shadowRenderers)
    {
        if (parent == null)
        {
            return;
        }

        SpriteRenderer[] renderers = parent.GetComponentsInChildren<SpriteRenderer>(true);
        for (int i = 0; i < renderers.Length; i++)
        {
            SpriteRenderer renderer = renderers[i];
            if (renderer != null && IsShadowName(renderer.gameObject.name))
            {
                shadowRenderers.Add(renderer);
            }
        }
    }
    private HashSet<string> CollectValidHolderNames()
    {
        HashSet<string> validHolderNames = new HashSet<string>();
        Item[] items = spritesParent.GetComponentsInChildren<Item>(true);

        for (int i = 0; i < items.Length; i++)
        {
            Item item = items[i];
            if (item.transform.parent != spritesParent) // Only consider top-level items
            {
                continue;
            }

            string itemName = item.gameObject.name;
            if (IsShadowName(itemName)) // Skip if it's a shadow itself
            {
                continue;
            }

            validHolderNames.Add(holderPrefix + itemName);
        }

        return validHolderNames;
    }

    private Dictionary<string, Item> CollectItemRenderersByName()
    {
        Dictionary<string, Item> itemsByName = new Dictionary<string, Item>();
        Item[] items = spritesParent.GetComponentsInChildren<Item>(true);

        for (int i = 0; i < items.Length; i++)
        {
            Item item = items[i];
            if (item.transform.parent != spritesParent) // Only consider top-level items
            {
                continue;
            }

            string itemName = item.gameObject.name;
            if (IsShadowName(itemName)) // Skip if it's a shadow itself
            {
                continue;
            }

            if (itemsByName.ContainsKey(itemName))
            {
                Debug.LogWarning($"Duplicate item name '{itemName}' in spritesParent. Keeping the first one.", item);
                continue;
            }

            itemsByName.Add(itemName, item);
        }

        return itemsByName;
    }

    private void BakeItem(
        Transform itemTransform,
        SpriteRenderer spriteRenderer,
        Dictionary<string, Transform> shadowsByItemName)
    {
        Item item = GetOrAddComponent<Item>(itemTransform.gameObject);
        BoxCollider itemCollider = GetOrAddComponent<BoxCollider>(itemTransform.gameObject);
        ConfigureColliderFromSprite(itemCollider, spriteRenderer, false);

        Transform holderTransform = GetOrCreateHolder(itemTransform);
        ItemHolder holder = GetOrAddComponent<ItemHolder>(holderTransform.gameObject);
        BoxCollider holderCollider = GetOrAddComponent<BoxCollider>(holderTransform.gameObject);

        int id = spriteRenderer.sortingOrder;

        Undo.RecordObject(item, "Configure Item");
        item.tf = itemTransform;
        item.id = id;
        item.correctHolderTransform = holderTransform;
        item.currentState = ItemState.Waitting;
        item.enabled = true;
        EditorUtility.SetDirty(item);

        Undo.RecordObject(holder, "Configure ItemHolder");
        holder.id = id;
        EditorUtility.SetDirty(holder);

        CopyCollider(itemCollider, holderCollider);

        SetLayerIfConfigured(itemTransform.gameObject, itemLayer);
        SetLayerIfConfigured(holderTransform.gameObject, holderLayer);

        if (shadowsByItemName.TryGetValue(itemTransform.name, out Transform shadow))
        {
            MoveShadowToHolder(item, shadow, holderTransform);
        }
        else
        {
            Undo.RecordObject(item, "Clear Missing Shadow");
            item.shadowOnHolder = null;
            EditorUtility.SetDirty(item);
            Debug.LogWarning($"No shadow named '{itemTransform.name}{shadowSuffix}' found for item '{itemTransform.name}'.", itemTransform);
        }

        Debug.Log($"Baked '{itemTransform.name}' -> holder '{holderTransform.name}', id {id}.", itemTransform);
    }

    private Transform GetOrCreateHolder(Transform itemTransform)
    {
        string holderName = holderPrefix + itemTransform.name;
        Transform holderTransform = holdersParent.Find(holderName);

        if (holderTransform == null)
        {
            GameObject holderObject = new GameObject(holderName);
            Undo.RegisterCreatedObjectUndo(holderObject, "Create Item Holder");
            holderTransform = holderObject.transform;
            Undo.SetTransformParent(holderTransform, holdersParent, "Parent Item Holder");
        }

        Undo.RecordObject(holderTransform, "Configure Holder Transform");
        holderTransform.position = itemTransform.position;
        holderTransform.rotation = itemTransform.rotation;
        holderTransform.localScale = Vector3.one;
        EditorUtility.SetDirty(holderTransform);

        return holderTransform;
    }

    private void MoveShadowToHolder(Item item, Transform shadow, Transform holderTransform)
    {
        Vector3 worldPosition = shadow.position;
        Quaternion worldRotation = shadow.rotation;
        Vector3 localScale = shadow.localScale;

        Undo.SetTransformParent(shadow, holderTransform, "Move Shadow To Holder");
        Undo.RecordObject(shadow, "Configure Shadow Transform");
        shadow.position = worldPosition;
        shadow.rotation = worldRotation;
        shadow.localScale = localScale;
        EditorUtility.SetDirty(shadow);

        Undo.RecordObject(item, "Assign Shadow");
        item.shadowOnHolder = shadow;
        EditorUtility.SetDirty(item);

        if (shadow.gameObject.activeSelf)
        {
            Undo.RecordObject(shadow.gameObject, "Deactivate Shadow");
            shadow.gameObject.SetActive(false);
            EditorUtility.SetDirty(shadow.gameObject);
        }
    }

    private void ConfigureColliderFromSprite(BoxCollider collider, SpriteRenderer spriteRenderer, bool isTrigger)
    {
        Undo.RecordObject(collider, "Configure BoxCollider");

        if (spriteRenderer.sprite != null)
        {
            Bounds spriteBounds = spriteRenderer.sprite.bounds;
            collider.center = new Vector3(spriteBounds.center.x, spriteBounds.center.y, 0f);
            collider.size = new Vector3(spriteBounds.size.x, spriteBounds.size.y, colliderDepth);
        }
        else
        {
            Bounds rendererBounds = spriteRenderer.bounds;
            collider.center = Vector3.zero;
            collider.size = new Vector3(rendererBounds.size.x, rendererBounds.size.y, colliderDepth);
        }

        // Enforce min size
        Vector3 size = collider.size;
        size.x = Mathf.Max(size.x, minColliderSize.x);
        size.y = Mathf.Max(size.y, minColliderSize.y);
        collider.size = size;

        collider.isTrigger = isTrigger;
        collider.enabled = true;
        EditorUtility.SetDirty(collider);
    }

    private int ScaleBoxCollidersInChildren(Transform parent, bool includeInactive)
    {
        int scaledCount = 0;
        BoxCollider[] colliders = parent.GetComponentsInChildren<BoxCollider>(includeInactive);

        for (int i = 0; i < colliders.Length; i++)
        {
            BoxCollider boxCollider = colliders[i];
            if (boxCollider == null)
            {
                continue;
            }

            Undo.RecordObject(boxCollider, "Scale BoxCollider");
            Vector3 size = boxCollider.size;
            boxCollider.size = new Vector3(
                size.x * colliderSizeMultiplier,
                size.y * colliderSizeMultiplier,
                size.z);
            EditorUtility.SetDirty(boxCollider);
            scaledCount++;
        }

        return scaledCount;
    }

    private void CopyCollider(BoxCollider source, BoxCollider target)
    {
        Undo.RecordObject(target, "Copy Holder Collider");
        target.center = source.center;
        target.size = source.size;
        target.isTrigger = true;
        target.enabled = true;
        EditorUtility.SetDirty(target);
    }

    private void EnsureHoldersParent()
    {
        if (holdersParent != null)
        {
            return;
        }

        Transform existing = transform.Find(holdersParentName);
        if (existing != null)
        {
            holdersParent = existing;
            EditorUtility.SetDirty(this);
            return;
        }

        GameObject holderParentObject = new GameObject(holdersParentName);
        Undo.RegisterCreatedObjectUndo(holderParentObject, "Create Holders Parent");
        holdersParent = holderParentObject.transform;
        Undo.SetTransformParent(holdersParent, transform, "Parent Holders Parent");
        EditorUtility.SetDirty(this);
    }

    private Transform FindShadowOnHolder(Transform holder, string itemName)
    {
        string shadowName = itemName + shadowSuffix;
        Transform exactShadow = holder.Find(shadowName);
        if (exactShadow != null)
        {
            return exactShadow;
        }

        for (int i = 0; i < holder.childCount; i++)
        {
            Transform child = holder.GetChild(i);
            if (IsShadowName(child.name))
            {
                return child;
            }
        }

        return null;
    }

    private Transform CreateShadowFromItem(Transform holder, string itemName, SpriteRenderer itemRenderer)
    {
        GameObject shadowObject = new GameObject(itemName + shadowSuffix);
        Undo.RegisterCreatedObjectUndo(shadowObject, "Create Target Shadow");

        Transform shadowTransform = shadowObject.transform;
        Undo.SetTransformParent(shadowTransform, holder, "Parent Target Shadow");

        Undo.RecordObject(shadowTransform, "Configure Target Shadow Transform");
        shadowTransform.localPosition = generatedShadowLocalOffset;
        shadowTransform.localRotation = Quaternion.identity;
        shadowTransform.localScale = Vector3.one;
        EditorUtility.SetDirty(shadowTransform);

        SpriteRenderer shadowRenderer = Undo.AddComponent<SpriteRenderer>(shadowObject);
        Undo.RecordObject(shadowRenderer, "Configure Target Shadow Renderer");
        shadowRenderer.sprite = itemRenderer.sprite;
        shadowRenderer.color = generatedShadowColor;
        shadowRenderer.flipX = itemRenderer.flipX;
        shadowRenderer.flipY = itemRenderer.flipY;
        shadowRenderer.drawMode = itemRenderer.drawMode;
        shadowRenderer.size = itemRenderer.size;
        shadowRenderer.sortingLayerID = itemRenderer.sortingLayerID;
        shadowRenderer.sortingOrder = itemRenderer.sortingOrder - 1;
        EditorUtility.SetDirty(shadowRenderer);

        shadowObject.SetActive(false);
        EditorUtility.SetDirty(shadowObject);

        return shadowTransform;
    }

    private bool ValidateBakeParents()
    {
        if (spritesParent == null)
        {
            Debug.LogError("Assign spritesParent before refreshing holder targets.", this);
            return false;
        }

        if (holdersParent == null)
        {
            Debug.LogError("Assign holdersParent before refreshing holder targets.", this);
            return false;
        }

        if (string.IsNullOrEmpty(shadowSuffix))
        {
            Debug.LogError("shadowSuffix cannot be empty.", this);
            return false;
        }

        return true;
    }

    private T GetOrAddComponent<T>(GameObject target) where T : Component
    {
        T component = target.GetComponent<T>();
        if (component != null)
        {
            return component;
        }

        return Undo.AddComponent<T>(target);
    }

    private bool IsShadowName(string objectName)
    {
        return objectName.EndsWith(shadowSuffix, StringComparison.OrdinalIgnoreCase);
    }

    private string GetItemNameFromShadow(string shadowName)
    {
        return shadowName.Substring(0, shadowName.Length - shadowSuffix.Length);
    }

    private void SetLayerIfConfigured(GameObject target, LayerMask layerMask)
    {
        // If the LayerMask is set to "Nothing" (value -1), skip.
        // This is the equivalent of leaving the string empty in the old system.
        if (layerMask.value == -1)
        {
            return;
        }

        int layerIndex = -1;
        // Find the first layer index that is set in the LayerMask.
        // This assumes the user intends to select a single layer for GameObject.layer.
        for (int i = 0; i < 32; i++)
        {
            if (((1 << i) & layerMask.value) != 0)
            {
                layerIndex = i;
                break;
            }
        }

        // If a valid layer index was found (or if layerMask.value is 0, which implies "Default" layer 0)
        if (layerIndex != -1 || layerMask.value == 0)
        {
            // If layerMask.value is 0, layerIndex will still be -1, so we explicitly set to 0 (Default).
            int finalLayer = (layerIndex != -1) ? layerIndex : 0;
            Undo.RecordObject(target, "Set Layer");
            target.layer = finalLayer;
            EditorUtility.SetDirty(target);
        }
    }    
    [ContextMenu("Extract Sprite To Model")]
    public void ExtractSpriteToModel()
    {
        if (spritesParent == null)
        {
            Debug.LogError("spritesParent chưa được gán.", this);
            return;
        }

        // Lấy tất cả các component Item nằm trong spritesParent
        Item[] items = spritesParent.GetComponentsInChildren<Item>(true);
        int processedCount = 0;

        for (int i = 0; i < items.Length; i++)
        {
            Item item = items[i];
            GameObject itemObj = item.gameObject;
            SpriteRenderer originalRenderer = itemObj.GetComponent<SpriteRenderer>();

            // Bỏ qua nếu GameObject không có SpriteRenderer
            if (originalRenderer == null)
            {
                continue;
            }

            // 1. Tạo GameObject con tên là "Model"
            GameObject modelObj = new GameObject("Model");
            Undo.RegisterCreatedObjectUndo(modelObj, "Create Model GameObject");
            
            Transform modelTransform = modelObj.transform;
            Undo.SetTransformParent(modelTransform, itemObj.transform, "Parent Model");
            
            // Reset Transform của Model về mặc định
            Undo.RecordObject(modelTransform, "Reset Model Transform");
            modelTransform.localPosition = Vector3.zero;
            modelTransform.localRotation = Quaternion.identity;
            modelTransform.localScale = Vector3.one;

            // 2. Chuyển các object con hiện tại sang làm con của Model
            // Dùng List để lưu trữ tạm các child, tránh lỗi do thay đổi hierarchy khi đang lặp
            List<Transform> childrenToMove = new List<Transform>();
            for (int j = 0; j < itemObj.transform.childCount; j++)
            {
                Transform child = itemObj.transform.GetChild(j);
                if (child != modelTransform) // Bỏ qua chính object Model vừa tạo
                {
                    childrenToMove.Add(child);
                }
            }

            foreach (Transform child in childrenToMove)
            {
                Undo.SetTransformParent(child, modelTransform, "Move Child To Model");
            }

            // 3. Thêm SpriteRenderer vào Model và copy các thuộc tính từ originalRenderer
            SpriteRenderer modelRenderer = Undo.AddComponent<SpriteRenderer>(modelObj);
            Undo.RecordObject(modelRenderer, "Copy SpriteRenderer Properties");
            modelRenderer.sprite = originalRenderer.sprite;
            modelRenderer.color = originalRenderer.color;
            modelRenderer.flipX = originalRenderer.flipX;
            modelRenderer.flipY = originalRenderer.flipY;
            modelRenderer.drawMode = originalRenderer.drawMode;
            modelRenderer.size = originalRenderer.size;
            modelRenderer.sortingLayerID = originalRenderer.sortingLayerID;
            modelRenderer.sortingOrder = originalRenderer.sortingOrder;
            modelRenderer.sharedMaterial = originalRenderer.sharedMaterial;
            EditorUtility.SetDirty(modelRenderer);

            // 4. Cập nhật lại reference spriteRenderer trong script Item để không bị null
            Undo.RecordObject(item, "Update Item SpriteRenderer Reference");
            item.spriteRenderer = modelRenderer;
            EditorUtility.SetDirty(item);

            // 5. Xóa SpriteRenderer ở object cha (chứa Item)
            Undo.DestroyObjectImmediate(originalRenderer);
            
            processedCount++;
        }

        Debug.Log($"Extract Sprite To Model hoàn tất. Đã xử lý {processedCount} object.", this);
    }

    [ContextMenu("Reorder Sprite Layers")]
    public void ReOrderLayer()
    {
        if (spritesParent == null)
        {
            Debug.LogError("spritesParent chưa được gán.", this);
            return;
        }

        // Lấy tất cả SpriteRenderer trong spritesParent, bao gồm cả các con của con
        SpriteRenderer[] allRenderers = spritesParent.GetComponentsInChildren<SpriteRenderer>(true);

        // Lọc ra các SpriteRenderer không phải là shadow và không phải là con của một Item khác
        List<SpriteRenderer> renderersToReorder = new List<SpriteRenderer>();
        foreach (SpriteRenderer renderer in allRenderers)
        {
            // Bỏ qua nếu là shadow hoặc là SpriteRenderer của một "Model" con
            if (IsShadowName(renderer.gameObject.name) || (renderer.transform.parent != null && renderer.transform.parent.name == "Model"))
            {
                continue;
            }
            renderersToReorder.Add(renderer);
        }

        // Sắp xếp các SpriteRenderer theo sortingOrder hiện tại của chúng
        renderersToReorder.Sort((a, b) => a.sortingOrder.CompareTo(b.sortingOrder));

        for (int i = 0; i < renderersToReorder.Count; i++)
        {
            Undo.RecordObject(renderersToReorder[i], "Reorder Sprite Layer");
            renderersToReorder[i].sortingOrder = i; // Gán lại sortingOrder liên tiếp
            EditorUtility.SetDirty(renderersToReorder[i]);
        }
        Debug.Log($"Reordered {renderersToReorder.Count} sprite layers in spritesParent.", this);
    }

    [ContextMenu("Remove Missing Scripts")]
    public void RemoveMissingScripts()
    {
        int removedCount = 0;
        // Duyệt qua chính GameObject chứa ItemSetupTool
        removedCount += GameObjectUtility.RemoveMonoBehavioursWithMissingScript(gameObject);

        // Duyệt qua tất cả các GameObject con
        Transform[] allChildren = GetComponentsInChildren<Transform>(true);
        foreach (Transform child in allChildren)
        {
            // Bỏ qua chính GameObject chứa ItemSetupTool vì đã xử lý ở trên
            if (child.gameObject == gameObject)
            {
                continue;
            }
            removedCount += GameObjectUtility.RemoveMonoBehavioursWithMissingScript(child.gameObject);
        }

        if (removedCount > 0)
        {
            Debug.Log($"Đã xóa {removedCount} script bị thiếu từ GameObject này và các con của nó.", this);
        }
        else
        {
            Debug.Log("Không tìm thấy script bị thiếu nào trên GameObject này và các con của nó.", this);
        }
    }

    [ContextMenu("Refresh Collider Sizes")]
    public void RefreshColliderSizes()
    {
        if (minColliderSize.x <= 0 || minColliderSize.y <= 0)
        {
            Debug.LogWarning("minColliderSize components must be positive.", this);
            return;
        }

        int refreshedCount = 0;
        if (spritesParent != null)
        {
            refreshedCount += EnforceMinColliderSizeInChildren(spritesParent);
        }
        if (holdersParent != null)
        {
            refreshedCount += EnforceMinColliderSizeInChildren(holdersParent);
        }

        Debug.Log($"Refreshed {refreshedCount} colliders to meet min size ({minColliderSize.x}, {minColliderSize.y}).", this);
    }

    private int EnforceMinColliderSizeInChildren(Transform parent)
    {
        if (parent == null) return 0;

        int count = 0;
        BoxCollider[] colliders = parent.GetComponentsInChildren<BoxCollider>(true);
        foreach (BoxCollider boxCollider in colliders)
        {
            Vector3 currentSize = boxCollider.size;
            Vector3 newSize = currentSize;

            newSize.x = Mathf.Max(currentSize.x, minColliderSize.x);
            newSize.y = Mathf.Max(currentSize.y, minColliderSize.y);

            if (newSize != currentSize)
            {
                Undo.RecordObject(boxCollider, "Enforce Min Collider Size");
                boxCollider.size = newSize;
                EditorUtility.SetDirty(boxCollider);
                count++;
            }
        }
        return count;
    }
#endif
}
