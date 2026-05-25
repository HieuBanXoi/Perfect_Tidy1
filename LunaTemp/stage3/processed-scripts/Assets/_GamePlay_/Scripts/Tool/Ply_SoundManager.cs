using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public enum FxType
{
    Click = 0,
    Decor = 1,
    Wooden = 2,
    Plant = 3,
    Mental = 4,
    Silk = 5,
    HeavyWooden,
    Clock,
    Girl,
    Wolf,
    Pop
}

public class Ply_SoundManager : Ply_Singleton<Ply_SoundManager>
{
    public AudioClip[] audioClips;
    public AudioSource sound;
    private AudioSource[] fx = new AudioSource[15];

    bool isMute = false;

    public void PlayFx(FxType fxType)
    {
        if (!isMute)
        {
            if (fx[(int)fxType] == null)
            {
                fx[(int)fxType] = new GameObject("Audio_" + fxType).AddComponent<AudioSource>();
                fx[(int)fxType].clip = audioClips[(int)fxType];
            }
            fx[(int)fxType].PlayOneShot(audioClips[(int)fxType]);
        }
    }

    public void Mute()
    {
        sound.Stop();
        for (int i = 0; i < fx.Length; i++)
        {
            if (fx[i] != null)
            {
                fx[i].Stop();
            }
        }
    }
}
