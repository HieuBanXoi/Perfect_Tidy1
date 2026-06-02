using System.Collections.Generic;
using UnityEngine;

public class PSD_Tool : MonoBehaviour
{
    public List<Sprite> sprites;
    public GameObject holder;
    [ContextMenu("FindNameAndChangeSpriteObjectPSD")]
    public void FindNameAndChangeSpriteObjectPSD()
    {
        SpriteRenderer[] spriteRenderers = holder.GetComponentsInChildren<SpriteRenderer>();

        foreach (SpriteRenderer spriteRenderer in spriteRenderers)
        {
            string name = spriteRenderer.gameObject.name;
            Sprite newSprite = sprites.Find(s => s.name == name);
            if (newSprite != null)
            {
                spriteRenderer.sprite = newSprite;
            }
        }
    }


}
