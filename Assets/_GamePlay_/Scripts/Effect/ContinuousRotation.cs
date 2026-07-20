using UnityEngine;

public class ContinuousRotation : MonoBehaviour
{
    public Vector3 rotationAxis = Vector3.forward;
    public float degreesPerSecond = 90f;
    public Space rotationSpace = Space.Self;
    public bool useUnscaledTime;

    private void Update()
    {
        float deltaTime = useUnscaledTime ? Time.unscaledDeltaTime : Time.deltaTime;
        transform.Rotate(
            rotationAxis.normalized,
            degreesPerSecond * deltaTime,
            rotationSpace
        );
    }
}
