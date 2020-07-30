import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectMerchandise = createSelector(
  [selectShop],
  (shop) => shop.merchandise
);

export const selectOneMerchandise = (merchandiseUrlParam) =>
  createSelector(
    [selectMerchandise],
    (merchandise) => merchandise[merchandiseUrlParam]
  );

export const selectMerchandiseForPreview = createSelector(
  [selectMerchandise],
  (merchandise) => Object.keys(merchandise).map((key) => merchandise[key])
);
