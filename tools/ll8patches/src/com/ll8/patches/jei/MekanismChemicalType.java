package com.ll8.patches.jei;

import java.util.List;
import mekanism.api.chemical.Chemical;
import mekanism.api.chemical.ChemicalStack;
import mekanism.client.recipe_viewer.jei.ChemicalStackRenderer;
import mekanism.client.recipe_viewer.jei.MekanismJEI;
import mezz.jei.api.registration.IModIngredientRegistration;

/**
 * Kept apart from the plugin so the plugin class never names a Mekanism class:
 * JEI instantiates every @JeiPlugin, and this one only reaches here after
 * checking that Mekanism is loaded.
 *
 * The arguments are MekanismJEI.registerIngredients' own, minus the ingredient
 * list (see the plugin) and minus setColorHelper, which is package-private;
 * the helper only needs colours for ingredients in JEI's list, and there are
 * none.
 */
public final class MekanismChemicalType {

    private MekanismChemicalType() {
    }

    public static void register(IModIngredientRegistration registration) {
        registration.register(
            MekanismJEI.TYPE_CHEMICAL,
            List.of(),
            MekanismJEI.CHEMICAL_STACK_HELPER,
            new ChemicalStackRenderer(),
            Chemical.HOLDER_CODEC.xmap(holder -> new ChemicalStack(holder, 1000L), ChemicalStack::getChemicalHolder));
    }
}
