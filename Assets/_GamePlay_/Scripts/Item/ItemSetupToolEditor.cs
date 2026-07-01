using UnityEditor;
using UnityEngine;
#if UNITY_EDITOR
[CustomEditor(typeof(ItemSetupTool))]
public class ItemSetupToolEditor : Editor
{
    public override void OnInspectorGUI()
    {
        // Vẽ các trường dữ liệu mặc định của script ItemSetupTool
        DrawDefaultInspector();

        // Lấy tham chiếu đến đối tượng ItemSetupTool đang được chỉnh sửa
        ItemSetupTool itemSetupTool = (ItemSetupTool)target;

        // Thêm khoảng cách giữa các trường mặc định và các nút
        EditorGUILayout.Space(10);
        EditorGUILayout.LabelField("Before Bake", EditorStyles.boldLabel);

        // Tạo nút cho từng phương thức ContextMenu
        if (GUILayout.Button("Reorder Sprite Layers"))
        {
            itemSetupTool.ReOrderLayer();
        }
        if (GUILayout.Button("Remove Missing Scripts"))
        {
            itemSetupTool.RemoveMissingScripts();
        }
        EditorGUILayout.LabelField("Bake Action", EditorStyles.boldLabel);

        if (GUILayout.Button("Bake Item Data"))
        {
            itemSetupTool.BakeItemData();
        }

        if (GUILayout.Button("Extract Sprite To Model"))
        {
            itemSetupTool.ExtractSpriteToModel();
        }
        if (GUILayout.Button("Create Missing Target Shadows"))
        {
            itemSetupTool.CreateMissingTargetShadows();
        }
        if (GUILayout.Button("Refresh Holder Targets"))
        {
            itemSetupTool.RefreshHolderTargets();
        }

        EditorGUILayout.LabelField("Adjust Action", EditorStyles.boldLabel);

        if (GUILayout.Button("Sort Sprite Parent Items By Order"))
        {
            itemSetupTool.SortSpriteParentItemsByOrder();
        }

        if (GUILayout.Button("Scale Item And Holder Colliders"))
        {
            itemSetupTool.ScaleItemAndHolderColliders();
        }

        if (GUILayout.Button("Refresh Collider Sizes"))
        {
            itemSetupTool.RefreshColliderSizes();
        }

        if (GUILayout.Button("Set All Shadows To Faded Black"))
        {
            itemSetupTool.SetAllShadowsToFadedBlack();
        }
        
    }
}
#endif