using UnityEngine;

public class DelayStartAnim : MonoBehaviour
{
    public Animator anim;

    [SerializeField] private float minDelay = 0f;
    [SerializeField] private float maxDelay = 1f;

    private void Awake()
    {
        if (anim == null)
        {
            anim = GetComponent<Animator>();
        }
    }

    private void OnEnable()
    {
        if (anim == null)
        {
            return;
        }

        anim.enabled = false;
        Invoke(nameof(EnableAnim), Random.Range(minDelay, maxDelay));
    }

    private void OnDisable()
    {
        CancelInvoke(nameof(EnableAnim));
    }

    private void EnableAnim()
    {
        if (anim != null)
        {
            anim.enabled = true;
        }
    }

    private void Reset()
    {
        anim = GetComponent<Animator>();
    }
}
