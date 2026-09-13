package com.ll8.patches.mixin;

import mezz.jei.api.gui.builder.IRecipeSlotBuilder;
import mezz.jei.api.gui.drawable.TilingDirection;
import mezz.jei.api.gui.placement.HorizontalAlignment;
import mezz.jei.api.gui.placement.VerticalAlignment;
import org.spongepowered.asm.mixin.Mixin;

/**
 * EMI 1.1.24 builds its JEI bridge slots against a JEI whose IPlaceable still
 * carried setPosition(x, y, width, height, horizontal, vertical) as a default
 * method. JEI 19.51.0.416 made it abstract and redeclared it in
 * IRecipeSlotBuilder, so every JEI plugin that places a slot by alignment dies
 * inside EMI with AbstractMethodError and its recipe is dropped.
 *
 * Both bodies are what the default used to do, reduced to what the builder
 * already has: the aligned overload is JEI's own PlaceableUtil.setPosition over
 * this builder's getWidth, getHeight and setPosition(int, int); the tiling
 * overload drops the direction, which EMI's tank widget has no notion of.
 */
@Mixin(targets = "dev.emi.emi.jemi.impl.JemiRecipeSlotBuilder", remap = false)
public abstract class JemiSlotPlacementMixin {

    public IRecipeSlotBuilder setPosition(
        int x, int y, int availableWidth, int availableHeight,
        HorizontalAlignment horizontal, VerticalAlignment vertical)
    {
        IRecipeSlotBuilder self = (IRecipeSlotBuilder) (Object) this;
        return self.setPosition(
            x + horizontal.getXPos(availableWidth, self.getWidth()),
            y + vertical.getYPos(availableHeight, self.getHeight()));
    }

    public IRecipeSlotBuilder setFluidRenderer(
        long capacity, boolean showCapacity, int width, int height, TilingDirection tilingDirection)
    {
        return ((IRecipeSlotBuilder) (Object) this).setFluidRenderer(capacity, showCapacity, width, height);
    }
}
