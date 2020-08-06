import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  merchandise: null,
  isFetching: false,
  errorMessage: "",
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_MERCHANDISE_START:
      return {
        ...state,
        isFetching: true,
      };

    case ShopActionTypes.FETCH_MERCHANDISE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        merchandise: action.payload,
      };

    case ShopActionTypes.FETCH_MERCHANDISE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
