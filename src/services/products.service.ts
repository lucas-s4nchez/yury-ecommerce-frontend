import axios from "axios";
import { GenderType, OrderType } from "../models";

export const getProducts = (
  url: string,
  page: number = 1,
  order: OrderType = OrderType.ASC,
  brand?: string,
  category?: string,
  color?: string,
  size?: string,
  minPrice?: string,
  maxPrice?: string
) =>
  axios
    .get(
      `${url}?page=${page}&order=${order}&brand=${brand}&category=${category}&color=${color}&size=${Number(
        size
      )}&minPrice=${Number(minPrice)}&maxPrice=${Number(maxPrice)}`
    )
    .then((res) => res.data);

export const getFeaturedProducts = (
  url: string,
  page: number = 1,
  order: OrderType = OrderType.ASC,
  brand?: string,
  category?: string,
  color?: string,
  size?: string,
  minPrice?: string,
  maxPrice?: string
) =>
  axios
    .get(
      `${url}?page=${page}&featured=${true}&order=${order}&brand=${brand}&category=${category}&color=${color}&size=${Number(
        size
      )}&minPrice=${Number(minPrice)}&maxPrice=${Number(maxPrice)}`
    )
    .then((res) => res.data);

export const getMenProducts = (
  url: string,
  page: number = 1,
  order: OrderType = OrderType.ASC,
  brand?: string,
  category?: string,
  color?: string,
  size?: string,
  minPrice?: string,
  maxPrice?: string
) =>
  axios
    .get(
      `${url}?page=${page}&gender=${
        GenderType.MAN
      }&order=${order}&brand=${brand}&category=${category}&color=${color}&size=${
        Number(size) === 0 ? "" : Number(size)
      }&minPrice=${Number(minPrice) === 0 ? "" : Number(minPrice)}&maxPrice=${
        Number(maxPrice) === 0 ? "" : Number(maxPrice)
      }`
    )
    .then((res) => res.data);

export const getWomenProducts = (
  url: string,
  page: number = 1,
  order: OrderType = OrderType.ASC,
  brand?: string,
  category?: string,
  color?: string,
  size?: string,
  minPrice?: string,
  maxPrice?: string
) =>
  axios
    .get(
      `${url}?page=${page}&gender=${
        GenderType.WOMAN
      }&order=${order}&brand=${brand}&category=${category}&color=${color}&size=${Number(
        size
      )}&minPrice=${Number(minPrice)}&maxPrice=${Number(maxPrice)}`
    )
    .then((res) => res.data);
