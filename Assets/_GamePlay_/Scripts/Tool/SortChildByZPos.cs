using System.Collections.Generic;
using UnityEngine;

public class SortChildByZPos : MonoBehaviour
{
    public Transform transformToSort;
    public List<Transform> childrenToSort = new List<Transform>();
    public float zOffset = -0.1f;
    public float baseZ = -0.1f;
    [ContextMenu("Sort Children By Z Position")]
    public void SortChildrenByZPosition()
    {
        if (transformToSort == null) return;

        // Lấy tất cả con của transformToSort
        childrenToSort.Clear();
        int childCount = transformToSort.childCount;
        for (int i = 0; i < childCount; i++)
        {
            Transform child = transformToSort.GetChild(i);
            childrenToSort.Add(child);
        }


        // Cập nhật vị trí Z cho từng con
        for (int i = 0; i < childrenToSort.Count; i++)
        {
            Vector3 pos = childrenToSort[i].localPosition;
            pos.z = baseZ + i * zOffset; // Cộng thêm zOffset cho
            childrenToSort[i].localPosition = pos;
        }
    }
}
