import { useState } from "react";
import { useAsync, useFetchAndLoad } from "./";
import { OrderType } from "../models";
import { createBrandAdapter } from "../adapters";
import { SelectChangeEvent } from "@mui/material";

export const useFetchBrands = (axiosCallback: any) => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [brands, setBrands] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [order, setOrder] = useState(OrderType.ASC);

  const getBrandsData = async () => {
    const result = await callEndpoint(axiosCallback(page, order));
    return result;
  };

  const adaptBrands = (data: any) => {
    if (data) {
      const brands = data.data.brands.map((brand: any) =>
        createBrandAdapter(brand)
      );
      const totalPages = data.data.totalPages;

      setBrands(brands);
      setTotalPages(totalPages);
    }
  };

  const handleChangeBrandPage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  const handleChangeBrandOrder = (event: SelectChangeEvent) => {
    setOrder(event.target.value as OrderType);
  };

  useAsync(getBrandsData, adaptBrands, () => {}, [page, order]);

  return {
    isLoadingBrands: loading,
    brands: brands,
    brandTotalPages: totalPages,
    brandPage: page,
    brandOrder: order,
    handleChangeBrandPage,
    handleChangeBrandOrder,
  };
};
