#if UNITY_EDITOR
using UnityEditor;
using System.IO;
#endif
using System.Collections.Generic;
using UnityEngine;

public class PSD_Tool : MonoBehaviour
{
    [Header("Source Data")]
    [Tooltip("A list of sprites to use for updating.")]
    public List<Sprite> sprites;
    [Tooltip("The parent GameObject whose children's sprites will be updated.")]
    public GameObject holder;

    [Header("Extraction Settings")]
    [Tooltip("A prefab or GameObject in the scene that contains the source sprites to be extracted.")]
    public GameObject psdPrefab;
    [Tooltip("The folder where the extracted sprites will be saved as new .png files.")]
    public Object targetFolder; // Using Object allows dragging a folder from the Project view.

    [Header("Internal Cache")]
    [Tooltip("A cached list of all child GameObjects under the 'holder'. Automatically populated.")]
    public List<GameObject> childGameObjects = new List<GameObject>();

#if UNITY_EDITOR
    private TextureImporter GetTextureImporterForAsset(string assetPath)
    {
        if (string.IsNullOrEmpty(assetPath))
        {
            return null;
        }

        AssetDatabase.ImportAsset(assetPath, ImportAssetOptions.ForceUpdate);
        return AssetImporter.GetAtPath(assetPath) as TextureImporter;
    }

    public void ExtractAndDuplicateSpritesFromPrefab()
    {
        if (psdPrefab == null)
        {
            Debug.LogError("PSD_Tool: 'psdPrefab' is not assigned. Please assign a prefab or GameObject to extract sprites from.", this);
            return;
        }

        if (targetFolder == null)
        {
            Debug.LogError("PSD_Tool: 'targetFolder' is not assigned. Please assign a destination folder for the extracted sprites.", this);
            return;
        }

        string folderPath = AssetDatabase.GetAssetPath(targetFolder);
        if (!Directory.Exists(folderPath))
        {
            Debug.LogError($"PSD_Tool: The assigned 'targetFolder' path '{folderPath}' does not exist or is not a folder.", this);
            return;
        }

        SpriteRenderer[] renderers = psdPrefab.GetComponentsInChildren<SpriteRenderer>(true);
        if (renderers.Length == 0)
        {
            Debug.LogWarning("PSD_Tool: No SpriteRenderers found in the 'psdPrefab'.", this);
            return;
        }

        Undo.RecordObject(this, "Extract and Duplicate Sprites");
        sprites.Clear();

        int extractedCount = 0;
        // Use a dictionary to handle cases where the source texture is the same for multiple sprites
        Dictionary<string, bool> textureReadabilityCache = new Dictionary<string, bool>();

        foreach (var renderer in renderers)
        {
            Sprite sprite = renderer.sprite;
            if (sprite == null) continue;

            // Ensure the source texture is readable
            string texturePath = AssetDatabase.GetAssetPath(sprite.texture);
            if (string.IsNullOrEmpty(texturePath))
            {
                Debug.LogWarning($"Could not find asset path for sprite '{sprite.name}'s texture. It might be a built-in resource. Skipping.", this);
                continue;
            }

            Texture2D sourceTexture = sprite.texture as Texture2D;
            if (sourceTexture == null)
            {
                Debug.LogWarning($"Sprite '{sprite.name}' does not reference a Texture2D. Skipping.", this);
                continue;
            }

            TextureImporter textureImporter = GetTextureImporterForAsset(texturePath);
            bool wasReadable = sourceTexture.isReadable;
            bool importerWasAvailable = textureImporter != null;
            if (!textureReadabilityCache.ContainsKey(texturePath))
            {
                textureReadabilityCache[texturePath] = wasReadable;
                if (!wasReadable && importerWasAvailable)
                {
                    textureImporter.isReadable = true;
                    AssetDatabase.ImportAsset(texturePath, ImportAssetOptions.ForceUpdate);
                    wasReadable = sourceTexture.isReadable;
                }
            }

            if (!sourceTexture.isReadable)
            {
                Debug.LogWarning($"The source texture for sprite '{sprite.name}' is still not readable after attempting to import it. Skipping.", this);
                continue;
            }

            // Create a new texture from the sprite's rect
            Texture2D newTex = new Texture2D((int)sprite.rect.width, (int)sprite.rect.height);
            var pixels = sourceTexture.GetPixels((int)sprite.rect.x, (int)sprite.rect.y, (int)sprite.rect.width, (int)sprite.rect.height);
            newTex.SetPixels(pixels);
            newTex.Apply();

            // Save the new texture as a PNG file
            byte[] pngBytes = newTex.EncodeToPNG();
            string newFilePath = Path.Combine(folderPath, sprite.name + ".png");
            File.WriteAllBytes(newFilePath, pngBytes);
            DestroyImmediate(newTex); // Clean up the temporary texture

            // Import the new PNG and configure it as a sprite
            AssetDatabase.ImportAsset(newFilePath);
            TextureImporter newTextureImporter = GetTextureImporterForAsset(newFilePath);
            if (newTextureImporter != null)
            {
                newTextureImporter.textureType = TextureImporterType.Sprite;
                newTextureImporter.spritePixelsPerUnit = sprite.pixelsPerUnit;
                // Copy other settings if needed, e.g., pivot
                newTextureImporter.spritePivot = sprite.pivot / sprite.rect.size;
                AssetDatabase.ImportAsset(newFilePath, ImportAssetOptions.ForceUpdate);
            }
            else
            {
                Debug.LogWarning($"Could not configure the importer for the extracted sprite '{sprite.name}'.", this);
            }

            // Load the newly created sprite asset and add it to our list
            Sprite newSprite = AssetDatabase.LoadAssetAtPath<Sprite>(newFilePath);
            if (newSprite != null)
            {
                sprites.Add(newSprite);
                extractedCount++;
            }
        }

        // Restore original readability settings for all modified textures
        foreach (var entry in textureReadabilityCache)
        {
            if (!entry.Value) // if it was not readable before
            {
                TextureImporter textureImporter = GetTextureImporterForAsset(entry.Key);
                if (textureImporter != null && textureImporter.isReadable)
                {
                    textureImporter.isReadable = false;
                    AssetDatabase.ImportAsset(entry.Key, ImportAssetOptions.ForceUpdate);
                }
            }
        }

        EditorUtility.SetDirty(this);
        Debug.Log($"PSD_Tool: Successfully extracted and duplicated {extractedCount} sprites to '{folderPath}'.", this);
    }

    public void FindAllChildGameObjects()
    {
        Undo.RecordObject(this, "Find All Child GameObjects");
        childGameObjects.Clear();

        if (holder == null)
        {
            Debug.LogError("PSD_Tool: 'holder' is not assigned. Cannot find child objects.", this);
            return;
        }

        Transform[] childTransforms = holder.GetComponentsInChildren<Transform>(true);
        for (int i = 0; i < childTransforms.Length; i++)
        {
            Transform childTransform = childTransforms[i];
            // Exclude the parent 'holder' itself from the list
            if (childTransform.gameObject == holder)
            {
                continue;
            }

            childGameObjects.Add(childTransform.gameObject);
        }

        EditorUtility.SetDirty(this);
        Debug.Log($"Found {childGameObjects.Count} child GameObject(s).", this);
    }

    public void FindNameAndChangeSpriteObjectPSD()
    {
        if (holder == null && childGameObjects.Count == 0)
        {
            Debug.LogError("PSD_Tool: 'holder' is not assigned and child object list is empty. Run 'Find All Child GameObjects' first.", this);
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
            if (childGameObject == null) continue;

            SpriteRenderer spriteRenderer = childGameObject.GetComponent<SpriteRenderer>();
            if (spriteRenderer == null) continue;

            string name = childGameObject.name;
            Sprite newSprite = sprites.Find(s => s != null && s.name == name);
            if (newSprite != null)
            {
                Undo.RecordObject(spriteRenderer, "Change Sprite by GameObject Name");
                spriteRenderer.sprite = newSprite;
                EditorUtility.SetDirty(spriteRenderer);
                changedCount++;
            }
        }

        Debug.Log($"Changed sprite for {changedCount} child GameObject(s) based on their names.", this);
    }

    public void FindNameSpriteAndChangeSpriteObjectPSD()
    {
        if (holder == null && childGameObjects.Count == 0)
        {
            Debug.LogError("PSD_Tool: 'holder' is not assigned and child object list is empty. Run 'Find All Child GameObjects' first.", this);
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
            if (childGameObject == null) continue;

            SpriteRenderer spriteRenderer = childGameObject.GetComponent<SpriteRenderer>();
            if (spriteRenderer == null || spriteRenderer.sprite == null) continue;

            string name = spriteRenderer.sprite.name;
            Sprite newSprite = sprites.Find(s => s != null && s.name == name);
            if (newSprite != null)
            {
                Undo.RecordObject(spriteRenderer, "Change Sprite by Original Sprite Name");
                spriteRenderer.sprite = newSprite;
                EditorUtility.SetDirty(spriteRenderer);
                changedCount++;
            }
        }

        Debug.Log($"Changed sprite for {changedCount} child GameObject(s) based on their original sprite names.", this);
    }
#endif
}
