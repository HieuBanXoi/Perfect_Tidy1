using UnityEngine;
using UnityEditor;
using System.IO;

/// <summary>
/// Một cửa sổ công cụ editor để di chuyển hàng loạt các file sprite.
/// Cách sử dụng:
/// 1. Mở cửa sổ từ menu Tools > Sprite Mover Tool.
/// 2. Kéo GameObject cha chứa các SpriteRenderer vào trường "Game Object Cha".
/// 3. Kéo thư mục đích từ cửa sổ Project vào trường "Thư mục đích".
/// 4. Nhấn nút "Chuyển vị trí file".
/// 5. Script sẽ tự động tìm và di chuyển các file sprite.
/// </summary>
#if UNITY_EDITOR
public class SpriteMoverTool : EditorWindow
{
    private GameObject parentObject;
    private DefaultAsset targetFolder;
    private Vector2 scrollPosition;

    [MenuItem("Tools/Sprite Mover Tool")]
    public static void ShowWindow()
    {
        GetWindow<SpriteMoverTool>("Sprite Mover");
    }

    void OnGUI()
    {
        GUILayout.Label("Chuyển vị trí file Sprite", EditorStyles.boldLabel);
        scrollPosition = EditorGUILayout.BeginScrollView(scrollPosition);

        parentObject = (GameObject)EditorGUILayout.ObjectField("Game Object Cha", parentObject, typeof(GameObject), true);
        targetFolder = (DefaultAsset)EditorGUILayout.ObjectField("Thư mục đích", targetFolder, typeof(DefaultAsset), false);

        EditorGUILayout.Space();

        if (GUILayout.Button("Chuyển vị trí file"))
        {
            ChangeFileLocation();
        }

        EditorGUILayout.EndScrollView();
    }

    private void ChangeFileLocation()
    {
        if (parentObject == null)
        {
            EditorUtility.DisplayDialog("Lỗi", "Vui lòng chọn một Game Object cha.", "OK");
            return;
        }

        if (targetFolder == null)
        {
            EditorUtility.DisplayDialog("Lỗi", "Vui lòng chọn một thư mục đích.", "OK");
            return;
        }

        string targetFolderPath = AssetDatabase.GetAssetPath(targetFolder);

        if (!AssetDatabase.IsValidFolder(targetFolderPath))
        {
            EditorUtility.DisplayDialog("Lỗi", "Đối tượng được chọn không phải là một thư mục hợp lệ.", "OK");
            return;
        }

        SpriteRenderer[] spriteRenderers = parentObject.GetComponentsInChildren<SpriteRenderer>(true);

        if (spriteRenderers.Length == 0)
        {
            EditorUtility.DisplayDialog("Thông báo", "Không tìm thấy SpriteRenderer nào trong các con của đối tượng đã chọn.", "OK");
            return;
        }

        int movedFilesCount = 0;
        AssetDatabase.StartAssetEditing();
        try
        {
            foreach (SpriteRenderer sr in spriteRenderers)
            {
                if (sr.sprite != null)
                {
                    string oldPath = AssetDatabase.GetAssetPath(sr.sprite);
                    if (string.IsNullOrEmpty(oldPath) || !File.Exists(oldPath) || oldPath.StartsWith("Library/")) continue;

                    string fileName = Path.GetFileName(oldPath);
                    string newPath = AssetDatabase.GenerateUniqueAssetPath(Path.Combine(targetFolderPath, fileName));

                    if (string.IsNullOrEmpty(AssetDatabase.MoveAsset(oldPath, newPath)))
                    {
                        Debug.Log($"Đã chuyển '{oldPath}' tới '{newPath}'");
                        movedFilesCount++;
                    }
                }
            }
        }
        finally
        {
            AssetDatabase.StopAssetEditing();
            AssetDatabase.Refresh();
        }

        EditorUtility.DisplayDialog("Hoàn tất", $"Đã chuyển thành công {movedFilesCount} file sprite.", "OK");
    }
}
#endif