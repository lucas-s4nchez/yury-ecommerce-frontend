import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { useAsync, useFetchAndLoad } from ".";
import { OrderType } from "../models";
import { createProductAdapter } from "../adapters";

export const useFilterProducts = (axiosCallback: any) => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [order, setOrder] = useState(OrderType.ASC);

  const getProductsData = async () => {
    const result = await callEndpoint(axiosCallback(page, order));
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

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleChangeOrder = (event: SelectChangeEvent) => {
    setOrder(event.target.value as OrderType);
  };

  useAsync(getProductsData, adaptProducts, () => {}, [page, order]);

  return {
    loading,
    products,
    page,
    totalPages,
    order,
    handleChangePage,
    handleChangeOrder,
  };
};
