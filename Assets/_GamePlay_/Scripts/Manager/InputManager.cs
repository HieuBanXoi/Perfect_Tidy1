using UnityEngine;

public class InputManager : Ply_Singleton<InputManager>
{

    public LayerMask toggleButtonLayerMask;
    public LayerMask defaultLayer;
    public LayerMask itemLayer;
    public bool isDragging = false;

    private ItemDraggable currentDraggable;
    private ItemStirring currentStirring;

    private void Update()
    {
        if (HandTutManager.Ins != null && HandTutManager.Ins.ShouldBlockGameplayInput)
        {
            return;
        }

        if (!GameManager.Ins.isPlaying && !isDragging)
        {
            return;
        }

        if (Input.GetMouseButtonDown(0) && GameManager.Ins.isPlaying)
        {
            HandleMouseDown();
        }

        if (Input.GetMouseButton(0))
        {
            HandleMouseDrag();
        }

        if (Input.GetMouseButtonUp(0))
        {
            HandleMouseUp();
        }
    }

    private void HandleMouseDown()
    {
        Camera mainCamera = Camera.main;
        if (mainCamera == null) return;

        Ray ray = mainCamera.ScreenPointToRay(Input.mousePosition);


        RaycastHit[] hits = Physics.RaycastAll(ray, 100f, itemLayer);

        if (hits.Length == 0) return;

        Item interactableItem = GetFrontmostInteractableItem(hits);

        if (interactableItem != null)
        {
            bool isInteracted = false;

            if (interactableItem.itemDraggable != null && interactableItem.itemDraggable.CanDrag())
            {
                interactableItem.TurnOffActiveEffect();
                currentDraggable = interactableItem.itemDraggable;
                if (currentDraggable.BeginDrag())
                {
                    isDragging = true;
                    isInteracted = true;
                }
            }
            else if (interactableItem.itemStirring != null && interactableItem.itemStirring.enabled)
            {
                interactableItem.TurnOffActiveEffect();
                currentStirring = interactableItem.itemStirring;
                currentStirring.BeginStir();
                isDragging = true;
                isInteracted = true;
            }
            else if (interactableItem.itemKnifeSpriteMaskCutter != null && interactableItem.itemKnifeSpriteMaskCutter.enabled)
            {
                interactableItem.TurnOffActiveEffect();
                interactableItem.itemKnifeSpriteMaskCutter.PerformCut();
                isInteracted = true;
            }
            else if (interactableItem.itemClickable != null && interactableItem.itemClickable.enabled)
            {
                interactableItem.TurnOffActiveEffect();
                interactableItem.itemClickable.PerformClick();
                isInteracted = true;
            }

            if (isInteracted)
            {
                if (GameManager.Ins != null) GameManager.Ins.TurnOffTut();
                if (Ply_TransformConveyor.Ins != null) Ply_TransformConveyor.Ins.isMoving = true;
            }
        }
    }

    private Item GetFrontmostInteractableItem(RaycastHit[] hits)
    {
        Item interactableItem = null;
        float minZ = float.MaxValue;
        float minDistance = float.MaxValue;

        for (int i = 0; i < hits.Length; i++)
        {
            Item hitItem = hits[i].collider.GetComponentInParent<Item>();
            if (hitItem == null || !CanInteract(hitItem)) continue;

            float itemZ = hitItem.transform.position.z;
            bool isCloserToScreen = itemZ < minZ;
            bool isSameZAndCloserHit = Mathf.Approximately(itemZ, minZ)
                && hits[i].distance < minDistance;

            if (isCloserToScreen || isSameZAndCloserHit)
            {
                minZ = itemZ;
                minDistance = hits[i].distance;
                interactableItem = hitItem;
            }
        }

        return interactableItem;
    }

    private bool CanInteract(Item item)
    {
        return item.itemDraggable != null && item.itemDraggable.CanDrag()
            || item.itemStirring != null && item.itemStirring.enabled
            || item.itemKnifeSpriteMaskCutter != null && item.itemKnifeSpriteMaskCutter.enabled
            || item.itemClickable != null && item.itemClickable.enabled;
    }


    private void HandleMouseDrag()
    {
        if (currentDraggable != null) currentDraggable.Drag();
        else if (currentStirring != null) currentStirring.Stir();
    }

    private void HandleMouseUp()
    {
        if (currentDraggable != null) { currentDraggable.EndDrag(); currentDraggable = null; }
        if (currentStirring != null) { currentStirring.EndStir(); currentStirring = null; }
        isDragging = false;
    }
}
