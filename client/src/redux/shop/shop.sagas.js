import { takeEvery, call, put, all } from "redux-saga/effects";

import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchMerchandiseSuccess,
  fetchMerchandiseFailure,
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

export function* fetchMerchandiseAsync() {
  yield console.log("I am fired!");

  try {
    const merchandiseRef = firestore.collection("merchandise");

    const snapshot = yield merchandiseRef.get();
    const merchandiseMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchMerchandiseSuccess(merchandiseMap));
  } catch (error) {
    yield put(fetchMerchandiseFailure(error.message));
  }
}

export function* fetchMerchandiseStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_MERCHANDISE_START,
    fetchMerchandiseAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchMerchandiseStart)]);
}
