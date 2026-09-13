package com.ll8.patches.mixin;

import com.ll8.patches.compat.MekanismChemicalEmi;
import dev.emi.emi.api.stack.EmiStack;
import mezz.jei.api.ingredients.IIngredientType;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable;

/**
 * EMI's bridge turns a JEI ingredient it has no native form for into a
 * JemiStack keyed by JEI's uid string. Mekanism's own EMI stacks are keyed by
 * the Chemical, so a chemical shown on a JEI page would never match the one in
 * EMI's index: no recipes from it, and the page missing from its uses.
 *
 * A Mekanism ChemicalStack becomes Mekanism's own ChemicalEmiStack instead,
 * the same object Mekanism's EMI plugin puts in the index.
 */
@Mixin(targets = "dev.emi.emi.jemi.JemiUtil", remap = false)
public abstract class JemiChemicalStackMixin {

    @Inject(
        method = "getStack(Lmezz/jei/api/ingredients/IIngredientType;Ljava/lang/Object;)Ldev/emi/emi/api/stack/EmiStack;",
        at = @At("HEAD"),
        cancellable = true,
        remap = false)
    private static void ll8$mekanismChemical(
        IIngredientType<?> type, Object ingredient, CallbackInfoReturnable<EmiStack> cir)
    {
        if (ingredient != null && MekanismChemicalEmi.CHEMICAL_STACK.equals(ingredient.getClass().getName())) {
            cir.setReturnValue(MekanismChemicalEmi.toEmiStack(ingredient));
        }
    }
}
