import axios from "axios";
import { loadAbortAxios } from "../helpers";
import { OrderType } from "../models";

export const getColorList = (
  _page: number = 1,
  _order: OrderType = OrderType.ASC
) => {
  const controller = loadAbortAxios();
  return {
    call: axios.get(`http://localhost:8080/api/colorList`, {
      signal: controller.signal,
    }),
    controller,
  };
};
