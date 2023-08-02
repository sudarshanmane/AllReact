import { ApiConstants } from "../../Globals/ApiConstants";

export function getAllProductDetailsAction(payload) {
  return {
    type: ApiConstants.API_GET_ALL_PRODUCTS,
    payload,
  };
}

export function getJeweleryDetails(payload) {
  return {
    type: ApiConstants.API_GET_JEWELERY,
    payload,
  };
}

export function loginAction(payload) {
  return {
    type: ApiConstants.API_USER_LOGIN_LOAD,
    payload,
  };
}
