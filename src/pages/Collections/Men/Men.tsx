import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { useAsync, useFetchAndLoad } from "../../../hooks";
import { createProductAdapter } from "../../../adapters";
import { CollectionLayout } from "../../../components";
import { getMenProducts } from "../../../services";
import { OrderType } from "../../../models";

export const Men: React.FC = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [menProducts, setMenProducts] = useState([] as any);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [order, setOrder] = useState(OrderType.ASC);

  const getMenProductsData = async () => {
    const result = await callEndpoint(getMenProducts(page, order));
    return result;
  };

  const adaptMenProducts = (data: any) => {
    if (data) {
      const formattedProducts = data.data.products.map((product: any) =>
        createProductAdapter(product)
      );
      setMenProducts(formattedProducts);
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

  useAsync(getMenProductsData, adaptMenProducts, () => {}, [page, order]);

  return (
    <CollectionLayout
      collection={menProducts}
      loading={loading}
      page={page}
      count={count}
      order={order}
      handleChangePage={handleChangePage}
      handleChangeOrder={handleChangeOrder}
    />
  );
};
