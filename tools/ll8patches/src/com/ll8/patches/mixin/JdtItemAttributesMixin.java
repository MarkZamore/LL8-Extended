package com.ll8.patches.mixin;

import com.direwolf20.justdirethings.common.items.interfaces.Ability;
import com.direwolf20.justdirethings.common.items.interfaces.PoweredItem;
import com.direwolf20.justdirethings.common.items.interfaces.PoweredTool;
import com.direwolf20.justdirethings.common.items.interfaces.ToggleableTool;
import com.direwolf20.justdirethings.setup.Config;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.neoforged.neoforge.event.ItemAttributeModifierEvent;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin(targets = "com.direwolf20.justdirethings.common.events.PlayerEvents", remap = false)
public class JdtItemAttributesMixin {

    @Inject(method = "ItemAttributes", at = @At("HEAD"), cancellable = true, remap = false)
    private static void ll8$waitForServerConfig(ItemAttributeModifierEvent event, CallbackInfo ci) {
        ItemStack stack = event.getItemStack();
        Item item = stack.getItem();
        if (!(item instanceof ToggleableTool)) return;
        try {
            Config.AVAILABLE_ABILITY_MAP.get(Ability.STEPHEIGHT).get();
            return;
        } catch (IllegalStateException notLoaded) {
            if (item instanceof PoweredTool powered
                    && PoweredItem.getAvailableEnergy(stack) < powered.getBlockBreakFECost())
                event.clearModifiers();
            ci.cancel();
        }
    }
}
