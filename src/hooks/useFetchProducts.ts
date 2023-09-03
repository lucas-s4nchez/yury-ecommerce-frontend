import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { useAsync, useFetchAndLoad } from ".";
import { OrderType } from "../models";
import { createProductAdapter } from "../adapters";

export const useFetchProducts = (axiosCallback: any) => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [order, setOrder] = useState(OrderType.ASC);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  const getProductsData = async () => {
    const result = await callEndpoint(
      axiosCallback(
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
    return result;
  };

  const adaptProducts = (data: any) => {
    if (data) {
      const products = data.data.products.map((product: any) =>
        createProductAdapter(product)
      );
      const totalPages = data.data.totalPages;

      setProducts(products);
      setTotalPages(totalPages);
    }
  };

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

  useAsync(getProductsData, adaptProducts, () => {}, [
    page,
    order,
    brand,
    category,
    color,
    size,
    minPrice,
    maxPrice,
  ]);

  return {
    isLoadingProducts: loading,
    products,
    currentProductPage: page,
    totalProductPages: totalPages,
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
  };
};
