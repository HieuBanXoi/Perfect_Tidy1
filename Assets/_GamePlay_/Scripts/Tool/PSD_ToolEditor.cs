#if UNITY_EDITOR
using UnityEditor;
using UnityEngine;

[CustomEditor(typeof(PSD_Tool))]
public class PSD_ToolEditor : Editor
{
    public override void OnInspectorGUI()
    {
        // Draw the default inspector fields
        DrawDefaultInspector();

        // Get a reference to the script instance
        PSD_Tool tool = (PSD_Tool)target;

        EditorGUILayout.Space(10);
        EditorGUILayout.LabelField("Actions", EditorStyles.boldLabel);

        // Button for the new extraction feature
        if (GUILayout.Button("1. Extract Sprites from Prefab"))
        {
            tool.ExtractAndDuplicateSpritesFromPrefab();
        }
        EditorGUILayout.HelpBox("Extracts sprites from the 'psdPrefab', saves them as .png files in 'targetFolder', and populates the 'sprites' list.", MessageType.Info);

        EditorGUILayout.Space(5);

        // Button to find child objects
        if (GUILayout.Button("2. Find Child Objects in Holder"))
        {
            tool.FindAllChildGameObjects();
        }
        EditorGUILayout.HelpBox("Finds all GameObjects inside the 'holder' and caches them for the update operations.", MessageType.Info);

        EditorGUILayout.Space(5);

        // Button to update sprites by GameObject name
        if (GUILayout.Button("3. Update Sprites by GameObject Name"))
        {
            tool.FindNameAndChangeSpriteObjectPSD();
        }
        EditorGUILayout.HelpBox("Matches sprites from the 'sprites' list to child objects in the 'holder' by comparing sprite name to GameObject name.", MessageType.Info);
    }
}
#endif