import { useState } from "react";
import { useAsync, useFetchAndLoad } from "./";
import { OrderType } from "../models";
import { createColorAdapter } from "../adapters";
import { SelectChangeEvent } from "@mui/material";

export const useFetchColors = (axiosCallback: any) => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [colors, setColors] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [order, setOrder] = useState(OrderType.ASC);

  const getColorsData = async () => {
    const result = await callEndpoint(axiosCallback(page, order));
    return result;
  };

  const adaptColors = (data: any) => {
    if (data) {
      const colors = data.data.colors.map((color: any) =>
        createColorAdapter(color)
      );
      const totalPages = data.data.totalPages;

      setColors(colors);
      setTotalPages(totalPages);
    }
  };

  const handleChangeColorPage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleChangeColorOrder = (event: SelectChangeEvent) => {
    setOrder(event.target.value as OrderType);
  };

  useAsync(getColorsData, adaptColors, () => {}, [page, order]);

  return {
    isLoadingColors: loading,
    colors: colors,
    colorTotalPages: totalPages,
    colorPage: page,
    colorOrder: order,
    handleChangeColorPage,
    handleChangeColorOrder,
  };
};
