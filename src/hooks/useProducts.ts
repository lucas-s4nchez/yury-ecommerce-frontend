import { useState, useEffect } from "react";
import { GenderType, OrderType } from "../models";
import { SelectChangeEvent } from "@mui/material";
import { createProductAdapter } from "../adapters";
import useSWR, { mutate } from "swr";

export const useProducts = (
  url: string,
  endpointKey: string,
  fetcher: (
    url: string,
    page?: number,
    order?: OrderType,
    brand?: string,
    category?: string,
    color?: string,
    size?: string,
    minPrice?: string,
    maxPrice?: string
  ) => Promise<any>
) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [order, setOrder] = useState(OrderType.ASC);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const { data, error, isLoading } = useSWR(
    [
      endpointKey,
      url,
      page,
      order,
      brand,
      category,
      color,
      size,
      minPrice,
      maxPrice,
    ],
    () =>
      fetcher(
        url,
        page,
        order,
        brand,
        category,
        color,
        size,
        minPrice,
        maxPrice
      )
  );

  const adaptProducts = (data: any) => {
    if (data?.data?.products) {
      const newProducts = data.data.products.map((product: any) =>
        createProductAdapter(product)
      );
      const totalPages = data.data.totalPages;
      const totalProducts = data.data.count;

      setProducts(newProducts);
      setTotalPages(totalPages);
      setTotalProducts(totalProducts);
    }
  };

  useEffect(() => {
    adaptProducts(data);
  }, [
    isLoading,
    page,
    order,
    brand,
    category,
    color,
    size,
    minPrice,
    maxPrice,
  ]);

  const handleChangeCurrentProductPage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleChangeProductOrder = (event: SelectChangeEvent) => {
    setOrder(event.target.value as OrderType);
  };

  const handleChangeProductBrand = (event: SelectChangeEvent) => {
    setBrand(event.target.value as string);
  };

  const handleResetProductBrand = () => {
    setBrand("");
  };

  const handleChangeProductCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const handleResetProductCategory = () => {
    setCategory("");
  };

  const handleChangeProductColor = (event: SelectChangeEvent) => {
    setColor(event.target.value as string);
  };

  const handleResetProductColor = () => {
    setColor("");
  };

  const handleChangeProductSize = (event: SelectChangeEvent) => {
    setSize(event.target.value as string);
  };

  const handleResetProductSize = () => {
    setSize("");
  };

  const handleChangeMinPrice = (event: SelectChangeEvent) => {
    setMinPrice(event.target.value as string);
  };

  const handleResetMinPrice = () => {
    setMinPrice("");
  };

  const handleChangeMaxPrice = (event: SelectChangeEvent) => {
    setMaxPrice(event.target.value as string);
  };

  const handleResetMaxPrice = () => {
    setMaxPrice("");
  };

  const handleResetAllProductFilters = () => {
    setOrder(OrderType.ASC);
    setBrand("");
    setCategory("");
    setColor("");
    setSize("");
    setMinPrice("");
    setMaxPrice("");
  };

  return {
    products,
    isLoadingProducts: isLoading,
    currentProductPage: page,
    totalProductPages: totalPages,
    totalProducts,
    productOrder: order,
    productBrand: brand,
    productCategory: category,
    productColor: color,
    productSize: size,
    minPrice,
    maxPrice,
    handleChangeCurrentProductPage,
    handleChangeProductOrder,
    handleChangeProductBrand,
    handleResetProductBrand,
    handleChangeProductCategory,
    handleResetProductCategory,
    handleChangeProductColor,
    handleResetProductColor,
    handleChangeProductSize,
    handleResetProductSize,
    handleChangeMinPrice,
    handleResetMinPrice,
    handleChangeMaxPrice,
    handleResetMaxPrice,
    handleResetAllProductFilters,
    error,
  };
};
