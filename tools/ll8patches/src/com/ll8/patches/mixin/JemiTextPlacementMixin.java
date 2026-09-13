package com.ll8.patches.mixin;

import mezz.jei.api.gui.placement.HorizontalAlignment;
import mezz.jei.api.gui.placement.IPlaceable;
import mezz.jei.api.gui.placement.VerticalAlignment;
import mezz.jei.api.gui.widgets.ITextWidget;
import org.spongepowered.asm.mixin.Mixin;

/**
 * EMI 1.1.24's JemiTextWidget was built against a JEI whose IPlaceable still
 * carried the aligned setPosition as a default. JEI 19.51+ made it abstract, so
 * a category that places text by alignment (Instrumentus kiln: experience and
 * cook time) dies with AbstractMethodError inside createRecipeExtras, and EMI
 * drops every extra of that recipe, arrow and flame included.
 *
 * The body is JEI's own PlaceableUtil.setPosition. Calls go through IPlaceable,
 * not ITextWidget: JemiTextWidget has no ITextWidget-typed setPosition(int, int)
 * bridge either, only JemiPlaceable's erased one.
 */
@Mixin(targets = "dev.emi.emi.jemi.impl.extras.JemiTextWidget", remap = false)
public abstract class JemiTextPlacementMixin {

    public ITextWidget setPosition(
        int x, int y, int availableWidth, int availableHeight,
        HorizontalAlignment horizontal, VerticalAlignment vertical)
    {
        IPlaceable<?> self = (IPlaceable<?>) (Object) this;
        self.setPosition(
            x + horizontal.getXPos(availableWidth, self.getWidth()),
            y + vertical.getYPos(availableHeight, self.getHeight()));
        return (ITextWidget) (Object) this;
    }
}
