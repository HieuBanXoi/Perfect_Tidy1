using UnityEngine;

public class TrashCan : Item
{
    public bool isOpen = false;
    public void TrashOpen()
    {
        isOpen = true;
        itemType = ItemType.Trash;
    }
    public void TrashClose()
    {
        isOpen = false;
        itemType = ItemType.None;
    }
}
