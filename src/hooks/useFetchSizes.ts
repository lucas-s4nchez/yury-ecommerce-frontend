import { useState } from "react";
import { useAsync, useFetchAndLoad } from "./";
import { OrderType } from "../models";
import { createSizeAdapter } from "../adapters";
import { SelectChangeEvent } from "@mui/material";

export const useFetchSizes = (axiosCallback: any) => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [sizes, setSizes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [order, setOrder] = useState(OrderType.ASC);

  const getSizesData = async () => {
    const result = await callEndpoint(axiosCallback(page, order));
    return result;
  };

  const adaptSizes = (data: any) => {
    if (data) {
      const sizes = data.data.sizes.map((size: any) => createSizeAdapter(size));
      const totalPages = data.data.totalPages;

      setSizes(sizes);
      setTotalPages(totalPages);
    }
  };

  const handleChangeSizePage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleChangeSizeOrder = (event: SelectChangeEvent) => {
    setOrder(event.target.value as OrderType);
  };

  useAsync(getSizesData, adaptSizes, () => {}, [page, order]);

  return {
    isLoadingSizes: loading,
    sizes: sizes,
    sizeTotalPages: totalPages,
    sizePage: page,
    sizeOrder: order,
    handleChangeSizePage,
    handleChangeSizeOrder,
  };
};
