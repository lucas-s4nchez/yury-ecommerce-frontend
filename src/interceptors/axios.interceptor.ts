import axios from "axios";
import { SnackbarUtilities, getValidationError } from "../helpers";

export const PrivatePublicInterceptor = () => {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response) {
        SnackbarUtilities.error(getValidationError(error.response.data.error));
      } else {
        SnackbarUtilities.error(getValidationError(error.code));
      }
      return Promise.reject(error);
    }
  );
};
