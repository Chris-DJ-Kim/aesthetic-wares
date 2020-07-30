import ShopActionTypes from "./shop.types";

export const updateMerchandise = (merchandiseMap) => ({
  type: ShopActionTypes.UPDATE_MERCHANDISE,
  payload: merchandiseMap,
});
