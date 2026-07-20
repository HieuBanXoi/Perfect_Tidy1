using UnityEngine;

public class ItemSound : MonoBehaviour
{
    
    public void PlaySoundFX(FxType fxType)
    {
        Ply_SoundManager.Ins.PlayFx(fxType);
    }
    public void PlayKnifeCutSound()
    {
        PlaySoundFX(FxType.KnifeCut);
    }
    public void PlayKnifeSwingSound()
    {
        PlaySoundFX(FxType.KnifeSwing);
    }
    public void PlayKnifePlaceSound()
    {
        PlaySoundFX(FxType.KnifePlace);
    }
    public void PlayKnifeFlashSound()
    {
        Ply_SoundManager.Ins.PlayFxLoop(FxType.KnifeFlash);
    }
    public void StopKnifeFlashSound()
    {
        Ply_SoundManager.Ins.StopFxLoop(FxType.KnifeFlash);
    }
    public void PlayLemonJuiceSound()
    {
        PlaySoundFX(FxType.LemonJuice);
    }
    public void PlayWipeSound()
    {
        PlaySoundFX(FxType.Wipe);
    }
    public void PlayWipe2Sound()
    {
        PlaySoundFX(FxType.Wipe2);
    }
    public void PlayCut2Sound()
    {
        PlaySoundFX(FxType.Peer);
    }
    public void PlayPlaceFoodSound()
    {
        PlaySoundFX(FxType.FoodPlace);
    }
    public void PlayCreamSound()
    {
        PlaySoundFX(FxType.Cream);
    }
    public void PlayLeafSound()
    {
        PlaySoundFX(FxType.LeafOn);
    }
    public void PlayLeafToDishSound()
    {
        PlaySoundFX(FxType.PlaceVege);
    }
    public void PlayPouringSaltSound()
    {
        PlaySoundFX(FxType.PouringSalt);
    }
    public void PlayPouringWaterSound()
    {
        PlaySoundFX(FxType.PouringWater);
    }
    public void PlayPaperCleanSound()
    {
        PlaySoundFX(FxType.PaperClean);
    }
    public void PlayClickSound()
    {
        PlaySoundFX(FxType.Click);
    }
    public void PlayCreamWipingSound()
    {
        PlaySoundFX(FxType.CreamWiping);
    }
    public void PlayItemPlaceSound()
    {
        PlaySoundFX(FxType.ItemPlace);
    }
}
