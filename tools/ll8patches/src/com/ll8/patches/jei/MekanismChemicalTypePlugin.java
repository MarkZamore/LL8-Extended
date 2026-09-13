package com.ll8.patches.jei;

import mezz.jei.api.IModPlugin;
import mezz.jei.api.JeiPlugin;
import mezz.jei.api.registration.IModIngredientRegistration;
import net.minecraft.resources.ResourceLocation;
import net.neoforged.fml.ModList;

/**
 * Mekanism registers its chemical ingredient type with JEI from MekanismJEI,
 * but EMI's PluginCallerMixin skips every JEI plugin call of a mod that also
 * ships an EMI plugin - Mekanism does - including "Registering ingredients".
 * JEI then never learns ChemicalStack, and every JEI plugin of another mod
 * that puts a chemical in a slot (mekagenjei here) fails with
 * "Unknown ingredient type: class mekanism.api.chemical.ChemicalStack", both
 * in JEI's own recipe manager and in EMI's bridge, which lays JEI recipes out
 * through JEI.
 *
 * This registers the same type with Mekanism's own helper and renderer, only
 * when EMI is present (exactly when Mekanism's registration is skipped), and
 * with no ingredients: EMI's bridge copies every ingredient of every non-item,
 * non-fluid JEI type into EMI's index, and Mekanism's EMI plugin has already
 * put every chemical there.
 */
@JeiPlugin
public final class MekanismChemicalTypePlugin implements IModPlugin {

    private static final ResourceLocation UID =
        ResourceLocation.fromNamespaceAndPath("ll8patches", "mekanism_chemical_type");

    @Override
    public ResourceLocation getPluginUid() {
        return UID;
    }

    @Override
    public void registerIngredients(IModIngredientRegistration registration) {
        ModList mods = ModList.get();
        if (mods.isLoaded("mekanism") && mods.isLoaded("emi")) {
            MekanismChemicalType.register(registration);
        }
    }
}
