import React from "react";
import { call, put } from "redux-saga/effects";
import { Method } from "../HTTP/BaseAxios";
import { ApiConstants } from "../../Globals/ApiConstants";
import { AppConstants } from "../../Globals/AppConstants";
import { message } from "antd";

function* failSaga(msg) {
  message.config({
    duration: 1.5,
    maxCount: 1,
  });
  message.success(msg);
}

export function* GetAppProdcutsDetails(action) {
  try {
    const result = yield Method.getData(action.payload, "/products");
    yield failSaga(" process executed successfully");

    if (result.status === AppConstants.ApiSuccess) {
      yield put({
        type: ApiConstants.API_GET_ALL_PRODUCTS_SUCCESS,
        result,
        status: "ok",
      });
    } else {
      yield call(failSaga("something went wrong"));
    }
  } catch (error) {
    console.log("inside error of the common function");
  }
}

export function* fetchJeweleryDetails(action) {
  try {
    const result = yield Method.getData(
      action.payload,
      "/products/category/jewelery"
    );

    if (result.status === AppConstants.ApiSuccess) {
      yield put({
        type: ApiConstants.API_GET_JEWELERY_SUCCESS,
        result,
        status: "ok",
      });
    } else {
      yield call(failSaga("something went wrong"));
    }
  } catch (error) {
    console.log("inside error of the common function");
  }
}

export function* userLoginSage(action) {
  try {
    const result = yield Method.loginAxios(action.payload, "/auth/login");

    if (result.status === AppConstants.ApiSuccess) {
      yield put({
        type: ApiConstants.API_USER_LOGIN_LOAD_SUCCESS,
        result: result.result,
        status: "ok",
      });
    } else {
      yield call(failSaga("something went wrong"));
    }
  } catch (error) {
    console.log("inside error of the common function");
  }
}
