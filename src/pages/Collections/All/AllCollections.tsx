import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { useAsync, useFetchAndLoad } from "../../../hooks";
import { getProducts } from "../../../services";
import { createProductAdapter } from "../../../adapters";
import { CollectionLayout } from "../../../components";
import { OrderType } from "../../../models";

export const AllCollections: React.FC = () => {
  const [products, setProducts] = useState({} as any);
  const { loading, callEndpoint } = useFetchAndLoad();
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [order, setOrder] = useState(OrderType.ASC);

  const getProductsData = async () => {
    const result = await callEndpoint(getProducts(page, order));
    return result;
  };

  const adaptProducts = (data: any) => {
    if (data) {
      const formattedProducts = data.data.products.map((product: any) =>
        createProductAdapter(product)
      );
      setProducts(formattedProducts);
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

  useAsync(getProductsData, adaptProducts, () => {}, [page, order]);

  return (
    <CollectionLayout
      collection={products}
      loading={loading}
      page={page}
      count={count}
      order={order}
      handleChangePage={handleChangePage}
      handleChangeOrder={handleChangeOrder}
    />
  );
};
