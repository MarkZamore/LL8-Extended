package com.ll8.patches.mixin;

import com.trolmastercard.sexmod.entity.CompanionEntity;
import com.trolmastercard.sexmod.entity.CompanionKind;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

/**
 * Two details the port hides that the original 1.12.2 mod did not. Both were
 * read out of the original's own bytecode; everything else the port hides
 * turned out to be hiding it for a reason, and is left alone.
 *
 * Manglelie's nippleL and nippleR. The port hides them unconditionally. The
 * original had no rule for them at all: the string "nipple" does not occur
 * once in ce.class, her model class, nor does "braBoob". Galath's model class
 * cb.class carries both, and the goblin's ci.class carries the first, which is
 * why those two keep their own rules and only Manglelie is touched here. Her
 * top is procedural cloth drawn in a separate pass and the bones sit under it.
 *
 * Galath's futaCock, futaBallLL and futaBallLR. The port shows them when the
 * appearance variant is odd. The original did not look at the variant: cb.class
 * does getBone("futaCock") then getstatic a_.e, and hides on the false branch -
 * setHidden(!a_.e) - where a_.e is one global boolean for the whole client,
 * written by the /futa command and read back from the file sexmod/futa. Its
 * default is set in a_'s static initialiser, iconst_1, so out of the box they
 * are visible. The port did not get the divisor or the parity wrong; it
 * substituted a per-entity variant for a global switch, and half of all Galaths
 * lost the detail permanently as a result. Visible is the original default, so
 * visible is what this restores.
 *
 * The kind is checked before the name so that the other nine kinds pay one
 * enum comparison per bone and nothing else.
 */
@Mixin(targets = "com.trolmastercard.sexmod.client.CompanionModel", remap = false)
public class HiddenDetailMixin {

    @Inject(
        method = "shouldHide(Lcom/trolmastercard/sexmod/entity/CompanionEntity;Ljava/lang/String;)Z",
        at = @At("HEAD"),
        cancellable = true,
        remap = false
    )
    private static void ll8$showWhatTheOriginalShowed(
        CompanionEntity companion, String boneName, CallbackInfoReturnable<Boolean> callback)
    {
        CompanionKind kind = companion.kind();

        if (kind == CompanionKind.MANGLELIE) {
            if (boneName.equalsIgnoreCase("nippleL") || boneName.equalsIgnoreCase("nippleR")) {
                callback.setReturnValue(Boolean.FALSE);
            }
            return;
        }

        if (kind == CompanionKind.GALATH) {
            if (boneName.equalsIgnoreCase("futaCock")
                    || boneName.equalsIgnoreCase("futaBallLL")
                    || boneName.equalsIgnoreCase("futaBallLR")) {
                callback.setReturnValue(Boolean.FALSE);
            }
        }
    }
}
