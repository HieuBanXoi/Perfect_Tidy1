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

    [Header("Optional Layers")]
    [Tooltip("Leave empty to keep the item's current layer.")]
    public string itemLayerName = "";

    [Tooltip("Leave empty to keep the holder's current layer.")]
    public string holderLayerName = "";

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

        SpriteRenderer[] renderers = spritesParent.GetComponentsInChildren<SpriteRenderer>(true);
        Dictionary<string, Transform> shadowsByItemName = CollectShadows(renderers);

        int itemCount = 0;
        for (int i = 0; i < renderers.Length; i++)
        {
            SpriteRenderer spriteRenderer = renderers[i];
            Transform itemTransform = spriteRenderer.transform;

            if (IsShadowName(itemTransform.name))
            {
                continue;
            }

            BakeItem(itemTransform, spriteRenderer, shadowsByItemName);
            itemCount++;
        }

        Debug.Log($"Bake Item Data completed. Processed {itemCount} item(s).", this);
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
        item.spriteRenderer = spriteRenderer;
        item.id = id;
        item.correctHolderTransform = holderTransform;
        item.currentState = ItemState.Waitting;
        item.enabled = true;
        EditorUtility.SetDirty(item);

        Undo.RecordObject(holder, "Configure ItemHolder");
        holder.id = id;
        EditorUtility.SetDirty(holder);

        CopyCollider(itemCollider, holderCollider);

        SetLayerIfConfigured(itemTransform.gameObject, itemLayerName);
        SetLayerIfConfigured(holderTransform.gameObject, holderLayerName);

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

        collider.isTrigger = isTrigger;
        collider.enabled = true;
        EditorUtility.SetDirty(collider);
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

    private void SetLayerIfConfigured(GameObject target, string layerName)
    {
        if (string.IsNullOrWhiteSpace(layerName))
        {
            return;
        }

        int layer = LayerMask.NameToLayer(layerName);
        if (layer < 0)
        {
            Debug.LogWarning($"Layer '{layerName}' does not exist. Skipping layer assignment.", target);
            return;
        }

        Undo.RecordObject(target, "Set Layer");
        target.layer = layer;
        EditorUtility.SetDirty(target);
    }
#endif
}
