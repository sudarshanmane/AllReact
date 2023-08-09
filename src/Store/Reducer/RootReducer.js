import { ApiConstants } from "../../Globals/ApiConstants";
import { setUser } from "../../Utils/SessionStorage";

const initialState = {
  loading: false,
  loginData: [],
  status: "",
  result: "",
};

export default function RootReducer(state = [], action) {
  switch (action.type) {
    case ApiConstants.API_GET_ALL_PRODUCTS: {
      return {
        ...state,
        loading: true,
        action,
        result: [],
      };
    }

    case ApiConstants.API_GET_ALL_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        result: action,
      };
    }

    case ApiConstants.API_GET_JEWELERY: {
      return {
        ...state,
        loading: true,
        action,
        result: [],
      };
    }

    case ApiConstants.API_GET_JEWELERY_SUCCESS: {
      return {
        ...state,
        loading: false,
        result: action,
      };
    }

    case ApiConstants.API_USER_LOGIN_LOAD: {
      return {
        ...state,
        loading: true,
        result: [],
      };
    }

    case ApiConstants.API_USER_LOGIN_LOAD_SUCCESS: {
      console.log("this is the action");
      console.log(action);
      if (action.status === "ok") {
        setUser(action.result);
        window.location.href = "/";
      }
      return {
        ...state,
        loading: false,
        status: action.status,
        loginData: action.data,
      };
    }

    case ApiConstants.API_USER_SIGNUP_LOAD: {
      console.log("inside reducer signup");
      return {
        ...state,
        loading: true,
        action,
        result: [],
      };
    }

    case ApiConstants.API_USER_SIGNUP_LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        result: action,
      };
    }

    default:
      return {
        ...state,
      };
  }
}
