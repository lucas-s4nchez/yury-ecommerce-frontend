import axios from "axios";
import { loadAbortAxios } from "../helpers";
import { GenderType, OrderType } from "../models";

export const getProducts = (
  page: number = 1,
  order: OrderType = OrderType.ASC
) => {
  const controller = loadAbortAxios();
  return {
    call: axios.get(
      `http://localhost:8080/api/searchProducts?page=${page}&order=${order}`,
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};

export const getFeaturedProducts = (
  page: number = 1,
  order: OrderType = OrderType.ASC
) => {
  const controller = loadAbortAxios();
  return {
    call: axios.get(
      `http://localhost:8080/api/searchProducts?page=${page}&featured=${true}&order=${order}`,
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};

export const getMenProducts = (
  page: number = 1,
  order: OrderType = OrderType.ASC
) => {
  const controller = loadAbortAxios();
  return {
    call: axios.get(
      `http://localhost:8080/api/searchProducts?page=${page}&gender=${GenderType.MAN}&order=${order}`,
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};

export const getWomenProducts = (
  page: number = 1,
  order: OrderType = OrderType.ASC
) => {
  const controller = loadAbortAxios();
  return {
    call: axios.get(
      `http://localhost:8080/api/searchProducts?page=${page}&gender=${GenderType.WOMAN}&order=${order}`,
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};
