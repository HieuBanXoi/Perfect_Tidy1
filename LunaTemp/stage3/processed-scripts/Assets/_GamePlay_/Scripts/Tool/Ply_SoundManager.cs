using System;
using UnityEngine;

public enum FxType
{
    Click,
    Drop,
    Jump,
    Swipe,
    Complete,
    WaterDrop,
    FoodToWater,
    KnifeCut,
    KnifeSwing,
    KnifePlace,
    PlaceVege,
    LemonJuice,
    FoodPlace,
    Blink,
    Failed,
    Wipe,
    Peer,
    Cream,
    CapyYay,
    LeafOn,
    Wipe2,
    KnifeFlash,
    TurnOn,
    Frying,
    PouringSalt,
    PouringWater,
    PaperClean,
    Clock,
    CreamWiping,
    Stirring,
    ItemPlace
}

public class Ply_SoundManager : Ply_Singleton<Ply_SoundManager>
{
    [Serializable]
    public class FxAudio
    {
        public FxType fxType;
        public AudioClip audioClip;
    }

    public FxAudio[] fxAudios;
    [HideInInspector] public AudioClip[] audioClips;
    public AudioSource sound;
    private AudioSource[] fx;

    bool isMute = false;

    public override void Awake()
    {
        base.Awake();
        SyncFxAudios();
        ResizeFxSources();
    }

#if UNITY_EDITOR
    private void OnValidate()
    {
        SyncFxAudios();
    }
#endif

    public void PlayFx(FxType fxType)
    {
        if (!isMute)
        {
            AudioClip clip = GetAudioClip(fxType);
            if (clip == null) return;

            AudioSource source = GetOrCreateFxSource(fxType);
            if (source.loop)
            {
                source.loop = false;
                source.Stop();
            }

            source.PlayOneShot(clip);
        }
    }
    public void PlayFx(int fxType)
    {
        PlayFx((FxType)fxType);
    }
    public void Mute()
    {
        if (sound != null)
        {
            sound.Stop();
        }

        if (fx == null) return;

        for (int i = 0; i < fx.Length; i++)
        {
            if (fx[i] != null)
            {
                fx[i].Stop();
            }
        }
    }

    public void PlayFxLoop(FxType fxType)
    {
        if (!isMute)
        {
            AudioClip clip = GetAudioClip(fxType);
            if (clip == null) return;

            AudioSource source = GetOrCreateFxSource(fxType);
            source.clip = clip;
            source.loop = true;
            if (!source.isPlaying)
            {
                source.Play();
            }
        }
    }

    public void PlayFxLoop(int fxType)
    {
        PlayFxLoop((FxType)fxType);
    }

    public void StopFxLoop(FxType fxType)
    {
        int index = (int)fxType;
        if (fx != null && index >= 0 && index < fx.Length && fx[index] != null)
        {
            fx[index].loop = false;
            fx[index].Stop();
        }
    }

    public void StopFxLoop(int fxType)
    {
        StopFxLoop((FxType)fxType);
    }

    private AudioClip GetAudioClip(FxType fxType)
    {
        if (fxAudios == null || fxAudios.Length != GetFxTypeCount())
        {
            SyncFxAudios();
        }

        int index = (int)fxType;
        if (fxAudios == null || index < 0 || index >= fxAudios.Length) return null;

        return fxAudios[index].audioClip;
    }

    private AudioSource GetOrCreateFxSource(FxType fxType)
    {
        int index = (int)fxType;
        if (fx == null || index >= fx.Length)
        {
            ResizeFxSources();
        }

        if (fx[index] == null)
        {
            fx[index] = new GameObject("Audio_" + fxType).AddComponent<AudioSource>();
            fx[index].transform.SetParent(transform);
        }

        return fx[index];
    }

    private void ResizeFxSources()
    {
        int count = GetFxTypeCount();
        if (fx == null)
        {
            fx = new AudioSource[count];
            return;
        }

        if (fx.Length != count)
        {
            Array.Resize(ref fx, count);
        }
    }

    [ContextMenu("Sync Fx Audios")]
    private void SyncFxAudios()
    {
        FxType[] types = (FxType[])Enum.GetValues(typeof(FxType));
        FxAudio[] oldFxAudios = fxAudios;
        AudioClip[] oldAudioClips = audioClips;

        fxAudios = new FxAudio[types.Length];
        audioClips = new AudioClip[types.Length];

        for (int i = 0; i < types.Length; i++)
        {
            FxAudio fxAudio = FindFxAudio(oldFxAudios, types[i]);
            if (fxAudio == null)
            {
                fxAudio = new FxAudio();
            }

            fxAudio.fxType = types[i];
            if (fxAudio.audioClip == null && oldAudioClips != null && i < oldAudioClips.Length)
            {
                fxAudio.audioClip = oldAudioClips[i];
            }

            fxAudios[i] = fxAudio;
            audioClips[i] = fxAudio.audioClip;
        }
    }

    private FxAudio FindFxAudio(FxAudio[] source, FxType fxType)
    {
        if (source == null) return null;

        for (int i = 0; i < source.Length; i++)
        {
            if (source[i] != null && source[i].fxType == fxType)
            {
                return source[i];
            }
        }

        return null;
    }

    private int GetFxTypeCount()
    {
        return Enum.GetValues(typeof(FxType)).Length;
    }
}
