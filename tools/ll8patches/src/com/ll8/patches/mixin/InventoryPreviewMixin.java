package com.ll8.patches.mixin;

import net.minecraft.client.gui.screens.inventory.InventoryScreen;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.ModifyArg;

/**
 * The inventory preview is drawn inside a scissor rectangle the size of its
 * panel - x + 26, y + 8 to x + 75, y + 78 - and vanilla fills that box with a
 * player scaled at 30, which leaves about eight pixels of headroom. This build
 * ships three-dimensional armour models, whose helmets carry horns and a brim
 * that reach well past the vanilla head box, so the top of the outer armour
 * layer fell outside the rectangle and was cut off.
 *
 * Rather than widen the rectangle, which would draw the model over the window's
 * own border, the scale is taken down to three quarters. The box is unchanged,
 * the player is a little smaller, and the headroom grows from eight pixels to
 * about eighteen - enough for the tallest helmet this build has. It is applied
 * where the scale is handed on rather than at the call site, so every screen
 * that shows a player this way keeps its own proportions.
 */
@Mixin(InventoryScreen.class)
public class InventoryPreviewMixin {

    @ModifyArg(
        method = "renderEntityInInventoryFollowsMouse(Lnet/minecraft/client/gui/GuiGraphics;IIIIIFFFLnet/minecraft/world/entity/LivingEntity;)V",
        at = @At(
            value = "INVOKE",
            target = "Lnet/minecraft/client/gui/screens/inventory/InventoryScreen;renderEntityInInventoryFollowsAngle(Lnet/minecraft/client/gui/GuiGraphics;IIIIIFFFLnet/minecraft/world/entity/LivingEntity;)V"
        ),
        index = 5
    )
    private static int ll8$roomForBulkyArmour(int scale) {
        return Math.max(1, scale * 3 / 4);
    }
}
