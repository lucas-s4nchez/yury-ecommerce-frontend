import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { useAsync, useFetchAndLoad } from "../../../hooks";
import { getWomenProducts } from "../../../services";
import { createProductAdapter } from "../../../adapters";
import { CollectionLayout } from "../../../components";
import { OrderType } from "../../../models";

export const Women: React.FC = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [womenProducts, setWomenProducts] = useState([] as any);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [order, setOrder] = useState(OrderType.ASC);

  const getWomenProductsData = async () => {
    const result = await callEndpoint(getWomenProducts(page, order));
    return result;
  };

  const adaptWomenProducts = (data: any) => {
    if (data) {
      const formattedProducts = data.data.products.map((product: any) =>
        createProductAdapter(product)
      );
      setWomenProducts(formattedProducts);
      setCount(data.data.totalPages);
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

  useAsync(getWomenProductsData, adaptWomenProducts, () => {}, [page, order]);

  return (
    <CollectionLayout
      collection={womenProducts}
      loading={loading}
      page={page}
      count={count}
      order={order}
      handleChangePage={handleChangePage}
      handleChangeOrder={handleChangeOrder}
    />
  );
};
