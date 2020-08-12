import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectMerchandise = createSelector(
  [selectShop],
  (shop) => shop.merchandise
);

export const selectOneMerchandise = (merchandiseUrlParam) =>
  createSelector([selectMerchandise], (merchandise) =>
    merchandise ? merchandise[merchandiseUrlParam] : null
  );

export const selectMerchandiseForPreview = createSelector(
  [selectMerchandise],
  (merchandise) =>
    merchandise ? Object.keys(merchandise).map((key) => merchandise[key]) : []
);

export const selectIsMerchandiseFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsMerchandiseLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.merchandise
);
