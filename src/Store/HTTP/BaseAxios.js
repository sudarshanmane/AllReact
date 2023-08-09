import { message } from "antd";
import { http } from "./BaseHttp";
import { AppConstants } from "../../Globals/AppConstants";

export const Method = {
  async getData(payload, url) {
    try {
      const response = await http.get(url);

      if (response.status === 200) {
        return {
          status: AppConstants.ApiSuccess,
          result: response.data,
        };
      } else {
        return {
          status: AppConstants.ApiFailure,
          result: response.data,
        };
      }
    } catch (err) {
      throw err;
    }
  },

  async postData(payload, url) {
    try {
      const response = await http.post(url, payload);
      console.log(payload);
      console.log(response);

      if (response.status === 200) {
        console.log("inside success status");
        return {
          status: AppConstants.ApiSuccess,
          result: response.data,
        };
      } else {
        return {
          status: AppConstants.ApiFailure,
          result: response.data,
        };
      }
    } catch (err) {
      throw err;
    }
  },
};
