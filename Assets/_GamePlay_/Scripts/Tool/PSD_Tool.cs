using System.Collections.Generic;
using UnityEngine;

public class PSD_Tool : MonoBehaviour
{
    public List<Sprite> sprites;
    public GameObject holder;
    public List<GameObject> childGameObjects = new List<GameObject>();

    [ContextMenu("Find All Child GameObjects")]
    public void FindAllChildGameObjects()
    {
        childGameObjects.Clear();

        if (holder == null)
        {
            Debug.LogError("PSD_Tool: holder is missing.", this);
            return;
        }

        Transform[] childTransforms = holder.GetComponentsInChildren<Transform>(true);
        for (int i = 0; i < childTransforms.Length; i++)
        {
            Transform childTransform = childTransforms[i];
            if (childTransform.gameObject == holder)
            {
                continue;
            }

            childGameObjects.Add(childTransform.gameObject);
        }

        Debug.Log($"Found {childGameObjects.Count} child GameObject(s).", this);
    }

    [ContextMenu("FindNameAndChangeSpriteObjectPSD")]
    public void FindNameAndChangeSpriteObjectPSD()
    {
        if (holder == null && childGameObjects.Count == 0)
        {
            Debug.LogError("PSD_Tool: holder is missing and childGameObjects is empty.", this);
            return;
        }

        if (childGameObjects.Count == 0)
        {
            FindAllChildGameObjects();
        }

        int changedCount = 0;
        for (int i = 0; i < childGameObjects.Count; i++)
        {
            GameObject childGameObject = childGameObjects[i];
            if (childGameObject == null)
            {
                continue;
            }

            SpriteRenderer spriteRenderer = childGameObject.GetComponent<SpriteRenderer>();
            if (spriteRenderer == null)
            {
                continue;
            }

            string name = childGameObject.name;
            Sprite newSprite = sprites.Find(s => s.name == name);
            if (newSprite != null)
            {
                spriteRenderer.sprite = newSprite;
                changedCount++;
            }
        }

        Debug.Log($"Changed sprite for {changedCount} child GameObject(s).", this);
    }
    [ContextMenu("FindNameSpriteAndChangeSpriteObjectPSD")]
    public void FindNameSpriteAndChangeSpriteObjectPSD()
    {
        if (holder == null && childGameObjects.Count == 0)
        {
            Debug.LogError("PSD_Tool: holder is missing and childGameObjects is empty.", this);
            return;
        }

        if (childGameObjects.Count == 0)
        {
            FindAllChildGameObjects();
        }

        int changedCount = 0;
        for (int i = 0; i < childGameObjects.Count; i++)
        {
            GameObject childGameObject = childGameObjects[i];
            if (childGameObject == null)
            {
                continue;
            }

            SpriteRenderer spriteRenderer = childGameObject.GetComponent<SpriteRenderer>();
            if (spriteRenderer == null)
            {
                continue;
            }

            string name = spriteRenderer.sprite.name;
            Sprite newSprite = sprites.Find(s => s.name == name);
            if (newSprite != null)
            {
                spriteRenderer.sprite = newSprite;
                changedCount++;
            }
        }

        Debug.Log($"Changed sprite for {changedCount} child GameObject(s).", this);
    }

}
