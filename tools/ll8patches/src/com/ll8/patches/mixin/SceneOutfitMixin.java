package com.ll8.patches.mixin;

import com.trolmastercard.sexmod.entity.CompanionEntity;
import com.trolmastercard.sexmod.entity.CompanionScene;
import com.trolmastercard.sexmod.entity.OutfitMode;
import net.minecraft.world.entity.player.Player;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.Unique;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

/**
 * A companion's outfit chooses which model file it is drawn from -
 * CompanionKind.modelResource switches on it, and DEFAULT is the dressed one.
 * The port never changes it, so a companion goes through a whole scene in
 * whatever outfit it was standing in, and the default is dressed. The author
 * of the port says as much in CompanionModel: the per-frame visibility rules
 * of the original were replaced with "one clean, clothed baseline until the
 * full equipment and scene state machines are ported".
 *
 * This is the scene half of that. Starting a scene switches to ALTERNATE and
 * finishing it puts back whatever was there before. Four of the eleven kinds
 * declare an ALTERNATE model - Jenny, Ellie, Slime and Bia - and for the
 * other seven setOutfit would fall back to DEFAULT anyway, so they are left
 * alone and nothing about them changes.
 *
 * finishScene is the hook rather than stopScene because stopScene is only one
 * of eight callers: the scene also ends by running out of phases, by the
 * partner leaving, by the chunk unloading and by the command. All of them go
 * through finishScene, so the outfit comes back whichever way the scene ends.
 *
 * The remembered outfit is not saved to disk. A crash mid-scene therefore
 * leaves a companion undressed until someone presses the outfit button, which
 * is a great deal better than the reverse - a field written into entity data
 * that keeps putting clothes back on.
 */
@Mixin(targets = "com.trolmastercard.sexmod.entity.CompanionEntity", remap = false)
public class SceneOutfitMixin {

    @Unique
    private OutfitMode ll8$outfitBeforeScene;

    @Inject(method = "startScene", at = @At("RETURN"), remap = false)
    private void ll8$wearTheSceneOutfit(
        Player player, CompanionScene scene, CallbackInfoReturnable<Boolean> callback)
    {
        if (!callback.getReturnValueZ()) {
            return;
        }

        CompanionEntity companion = (CompanionEntity) (Object) this;
        if (!companion.kind().supportsOutfit(OutfitMode.ALTERNATE)) {
            return;
        }

        this.ll8$outfitBeforeScene = companion.outfit();
        companion.setOutfit(OutfitMode.ALTERNATE);
    }

    @Inject(method = "finishScene", at = @At("HEAD"), remap = false)
    private void ll8$putTheOutfitBack(boolean completed, CallbackInfo callback) {
        if (this.ll8$outfitBeforeScene == null) {
            return;
        }

        ((CompanionEntity) (Object) this).setOutfit(this.ll8$outfitBeforeScene);
        this.ll8$outfitBeforeScene = null;
    }
}
