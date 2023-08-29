import { useState } from "react";
import { useAsync, useFetchAndLoad } from "./";
import { OrderType } from "../models";
import { createCategoryAdapter } from "../adapters";
import { SelectChangeEvent } from "@mui/material";

export const useFetchCategories = (axiosCallback: any) => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [order, setOrder] = useState(OrderType.ASC);

  const getCategoriesData = async () => {
    const result = await callEndpoint(axiosCallback(page, order));
    return result;
  };

  const adaptCategories = (data: any) => {
    if (data) {
      const categories = data.data.categories.map((category: any) =>
        createCategoryAdapter(category)
      );
      const totalPages = data.data.totalPages;

      setCategories(categories);
      setTotalPages(totalPages);
    }
  };

  const handleChangeCategoryPage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleChangeCategoryOrder = (event: SelectChangeEvent) => {
    setOrder(event.target.value as OrderType);
  };

  useAsync(getCategoriesData, adaptCategories, () => {}, [page, order]);

  return {
    isLoadingCategories: loading,
    categories,
    categoryTotalPages: totalPages,
    categoryPage: page,
    categoryOrder: order,
    handleChangeCategoryPage,
    handleChangeCategoryOrder,
  };
};
