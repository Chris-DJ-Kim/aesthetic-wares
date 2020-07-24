import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectMerchandise = createSelector(
  [selectShop],
  (shop) => shop.merchandise
);
