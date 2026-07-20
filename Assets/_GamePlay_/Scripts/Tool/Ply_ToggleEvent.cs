using UnityEngine;
using UnityEngine.Events;

public class Ply_ToggleEvent : MonoBehaviour
{
    [Header("--- STATE ---")]
    public bool isOn = true;
    public bool applyStateOnEnable = false;
    public bool applyStateOnClick = false;
    public GameObject targetObject;

    [Header("--- EVENTS ---")]
    public UnityEvent onTurnOn;
    public UnityEvent onTurnOff;

    private void OnEnable()
    {
        if (applyStateOnEnable)
        {
            ApplyState(false);
        }
    }

    public void Toggle()
    {
        SetState(!isOn);
    }

    public void TurnOn()
    {
        SetState(true);
    }

    public void TurnOff()
    {
        SetState(false);
    }

    public void SetState(bool value)
    {
        if (isOn == value) return;

        isOn = value;
        ApplyState(true);
    }

    public void ForceSetState(bool value)
    {
        isOn = value;
        ApplyState(true);
    }

    public void ApplyState()
    {
        ApplyState(true);
    }

    private void ApplyState(bool invokeEvent)
    {
        if (targetObject != null)
        {
            targetObject.SetActive(isOn);
        }

        if (!invokeEvent) return;
        if (isOn)
        {
            isOn = false;
            onTurnOn?.Invoke();
        }
        else
        {
            isOn = true;
            onTurnOff?.Invoke();
        }
    }
}
