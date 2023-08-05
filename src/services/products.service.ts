import axios from "axios";
import { loadAbortAxios } from "../helpers";

export const getProducts = () => {
  const controller = loadAbortAxios();
  return {
    call: axios.get("http://localhost:8080/api/allProducts", {
      signal: controller.signal,
    }),
    controller,
  };
};
