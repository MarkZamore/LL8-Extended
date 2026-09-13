package com.ll8.patches.mixin;

import com.beanbot.instrumentus.common.recipe.KilnRecipe;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.resources.ResourceLocation;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

/**
 * Instrumentus 2.8.9 names each kiln recipe for JEI after the output's
 * translated display name: lower-cased, spaces to underscores, plus "_firing".
 * In English that happens to be a legal path. In Russian it is Cyrillic, so
 * ResourceLocation throws, and EMI's JEI bridge drops every firing recipe.
 *
 * The id is built from the output's registry key instead, so it is the same
 * on every client language and always a legal path. Two recipes can share it
 * only if they fire into the same item; the kiln data this build ships has
 * 35 recipes and 35 distinct outputs.
 */
@Mixin(targets = "com.beanbot.instrumentus.compat.jei.FiringRecipeCategory", remap = false)
public class InstrumentusFiringIdMixin {

    @Inject(
        method = "getRegistryName(Lcom/beanbot/instrumentus/common/recipe/KilnRecipe;)Lnet/minecraft/resources/ResourceLocation;",
        at = @At("HEAD"),
        cancellable = true)
    private void ll8$idFromRegistryKey(KilnRecipe recipe, CallbackInfoReturnable<ResourceLocation> cir) {
        ResourceLocation output = BuiltInRegistries.ITEM.getKey(recipe.result.getItem());
        cir.setReturnValue(ResourceLocation.fromNamespaceAndPath(
            "instrumentus", "firing/" + output.getNamespace() + "/" + output.getPath()));
    }
}
