import SHOP_DATA from "./shop.items";

import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  merchandise: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_MERCHANDISE:
      return {
        ...state,
        merchandise: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
