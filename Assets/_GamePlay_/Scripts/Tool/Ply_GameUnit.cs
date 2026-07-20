using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Ply_GameUnit : MonoBehaviour
{
    public Transform tf;
    private void CacheComponents()
    {
        if (tf == null)
        {
            tf = transform;
        }
    }
    private void Reset()
    {
        CacheComponents();
    }
    public virtual void Awake()
    {
        CacheComponents();
    }

}
