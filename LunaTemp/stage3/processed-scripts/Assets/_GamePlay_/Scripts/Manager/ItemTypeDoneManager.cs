using System;
using System.Collections.Generic;
using UnityEngine;

public class ItemTypeDoneManager : Ply_Singleton<ItemTypeDoneManager>
{
    [Serializable]
    public class ItemTypeGroup
    {
        public ItemType itemType;
        public List<Item> items = new List<Item>();
    }

    public List<ItemTypeGroup> itemTypeGroups = new List<ItemTypeGroup>();

    private bool isCompletingGroup;

    public void ItemDone(Item doneItem)
    {
        if (doneItem == null || isCompletingGroup) return;

        ItemTypeGroup group = GetGroup(doneItem);
        if (group == null) return;

        isCompletingGroup = true;

        try
        {
            for (int i = 0; i < group.items.Count; i++)
            {
                Item item = group.items[i];
                if (item == null || item == doneItem) continue;

                ClearTarget(item);

                if (!item.isDone)
                {
                    RemoveFromHandTut(item);
                }
            }
        }
        finally
        {
            isCompletingGroup = false;
        }
    }

    private ItemTypeGroup GetGroup(Item doneItem)
    {
        for (int i = 0; i < itemTypeGroups.Count; i++)
        {
            ItemTypeGroup group = itemTypeGroups[i];
            if (group.items.Contains(doneItem)) return group;
        }

        return null;
    }

    private void RemoveFromHandTut(Item item)
    {
        if (HandTutManager.Ins != null)
        {
            HandTutManager.Ins.ItemDone(item);
            return;
        }
    }

    private void ClearTarget(Item item)
    {
        item.itemType = ItemType.None;
        if (item.itemDraggable != null)
        {
            item.itemDraggable.targetItemType = ItemType.None;
        }

        if (item.itemMoveToTarget != null)
        {
            item.itemMoveToTarget.defaultTarget = null;
        }
    }
}
