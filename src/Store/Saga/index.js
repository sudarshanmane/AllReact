import { takeEvery } from "redux-saga/effects";
import { ApiConstants } from "../../Globals/ApiConstants";
import {
  GetAppProdcutsDetails,
  fetchJeweleryDetails,
  userLoginSage,
  userSignupSage,
} from "./CommonSagas";

export function* RootSaga() {
  yield takeEvery(ApiConstants.API_GET_ALL_PRODUCTS, GetAppProdcutsDetails);
  yield takeEvery(ApiConstants.API_GET_JEWELERY, fetchJeweleryDetails);
  yield takeEvery(ApiConstants.API_USER_LOGIN_LOAD, userLoginSage);
  yield takeEvery(ApiConstants.API_USER_SIGNUP_LOAD, userSignupSage);
}
