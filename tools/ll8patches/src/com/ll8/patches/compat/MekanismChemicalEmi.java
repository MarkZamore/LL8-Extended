package com.ll8.patches.compat;

import dev.emi.emi.api.stack.EmiStack;
import mekanism.api.chemical.ChemicalStack;
import mekanism.client.recipe_viewer.emi.ChemicalEmiStack;

/**
 * Outside the mixin package so the mixin can call it, and only reached once
 * the ingredient's class is known to be Mekanism's ChemicalStack (a final
 * class, so the name check is an exact instanceof).
 */
public final class MekanismChemicalEmi {

    public static final String CHEMICAL_STACK = "mekanism.api.chemical.ChemicalStack";

    private MekanismChemicalEmi() {
    }

    public static EmiStack toEmiStack(Object ingredient) {
        ChemicalStack stack = (ChemicalStack) ingredient;
        return stack.isEmpty() ? EmiStack.EMPTY : new ChemicalEmiStack(stack);
    }
}
