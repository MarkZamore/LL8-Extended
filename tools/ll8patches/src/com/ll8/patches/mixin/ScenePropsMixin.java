package com.ll8.patches.mixin;

import com.trolmastercard.sexmod.entity.CompanionEntity;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

/**
 * FapCraft's companion model keeps nine bones on a list it calls the common
 * scene bones, and hides every one of them unless shouldShowSceneBone says
 * otherwise. That method answers for exactly two: the partner's body, shown
 * while the scene has a partner, and one bone shown during the phase named
 * after it. The other seven have no branch at all, so they fall through to
 * false and are hidden with their whole subtree, always.
 *
 * Five of the seven are empty locators - weapon, weaponstart, weaponend and the
 * two energy balls carry no cubes in any of the mod's twenty-two models, so
 * hiding them costs nothing and this leaves them alone. Two are not empty:
 *
 *   ellie/dressed.geo.json   items   10 bones, 84 cubes, UV area 1299
 *   kobold/kobold.geo.json   egg      3 bones, 15 cubes, UV area 93
 *
 * Both are textured, neither is keyed by any animation of the character that
 * carries it, and neither can be seen in the game. Showing them is safe
 * everywhere else because the same bone on every other model has no cubes, and
 * a bone with no cubes draws nothing whether it is hidden or not.
 *
 * This does not bring back the model the scene is missing. That one is a rig of
 * nineteen bones under torso2 whose 126 texture faces all have zero area, and
 * no code can draw a face with no texture coordinates.
 */
@Mixin(targets = "com.trolmastercard.sexmod.client.CompanionModel", remap = false)
public class ScenePropsMixin {

    @Inject(
        method = "shouldShowSceneBone(Lcom/trolmastercard/sexmod/entity/CompanionEntity;Ljava/lang/String;)Z",
        at = @At("HEAD"),
        cancellable = true,
        remap = false
    )
    private static void ll8$showThePropsThatHaveGeometry(
        CompanionEntity companion, String bone, CallbackInfoReturnable<Boolean> callback)
    {
        if ("items".equals(bone) || "egg".equals(bone)) {
            callback.setReturnValue(Boolean.TRUE);
        }
    }
}
