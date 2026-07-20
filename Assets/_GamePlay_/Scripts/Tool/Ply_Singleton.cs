using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Ply_Singleton<T> : MonoBehaviour where T : Component
{
    public static T Ins;

    public virtual void Awake()
    {
        Ins = ComponentCache<T>.Get(transform);
    }
}
