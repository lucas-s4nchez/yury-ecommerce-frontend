import axios from "axios";
import { loadAbortAxios } from "../helpers";

export const getProducts = (page: number = 1) => {
  const controller = loadAbortAxios();
  return {
    call: axios.get(`http://localhost:8080/api/products?page=${page}`, {
      signal: controller.signal,
    }),
    controller,
  };
};

export const getFeaturedProducts = (page: number = 1) => {
  const controller = loadAbortAxios();
  return {
    call: axios.get(`http://localhost:8080/api/featuredProducts?page=${page}`, {
      signal: controller.signal,
    }),
    controller,
  };
};

export const getMenProducts = (page: number = 1) => {
  const controller = loadAbortAxios();
  return {
    call: axios.get(
      `http://localhost:8080/api/products?page=${page}&gender=MAN`,
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};

export const getWomenProducts = (page: number = 1) => {
  const controller = loadAbortAxios();
  return {
    call: axios.get(
      `http://localhost:8080/api/products?page=${page}&gender=WOMAN`,
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};
