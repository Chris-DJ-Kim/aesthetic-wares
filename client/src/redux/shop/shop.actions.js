import ShopActionTypes from "./shop.types";

import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchMerchandiseStart = (merchandiseMap) => ({
  type: ShopActionTypes.FETCH_MERCHANDISE_START,
});

export const fetchMerchandiseSuccess = (merchandiseMap) => ({
  type: ShopActionTypes.FETCH_MERCHANDISE_SUCCESS,
  payload: merchandiseMap,
});

export const fetchMerchandiseFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_MERCHANDISE_FAILURE,
  payload: errorMessage,
});

export const fetchMerchandiseStartAsync = () => {
  return (dispatch) => {
    const merchandiseRef = firestore.collection("merchandise");
    dispatch(fetchMerchandiseStart());

    merchandiseRef
      .get()
      .then((snaphot) => {
        const merchandiseMap = convertCollectionSnapshotToMap(snaphot);
        dispatch(fetchMerchandiseSuccess(merchandiseMap));
      })
      .catch((error) => dispatch(fetchMerchandiseFailure(error.message)));
  };
};
