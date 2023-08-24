import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { useAsync, useFetchAndLoad } from "../../../hooks";
import { getFeaturedProducts } from "../../../services";
import { createProductAdapter } from "../../../adapters";
import { CollectionLayout } from "../../../components";
import { OrderType } from "../../../models";

export const Featured: React.FC = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [featuredProducts, setFeaturedProducts] = useState([] as any);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [order, setOrder] = useState(OrderType.ASC);

  const getFeaturedProductsData = async () => {
    const result = await callEndpoint(getFeaturedProducts(page, order));
    return result;
  };

  const adaptFeaturedProducts = (data: any) => {
    if (data) {
      const formattedProducts = data.data.products.map((product: any) =>
        createProductAdapter(product)
      );
      setFeaturedProducts(formattedProducts);
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

  useAsync(getFeaturedProductsData, adaptFeaturedProducts, () => {}, [
    page,
    order,
  ]);

  return (
    <CollectionLayout
      collection={featuredProducts}
      loading={loading}
      page={page}
      count={count}
      order={order}
      handleChangePage={handleChangePage}
      handleChangeOrder={handleChangeOrder}
    />
  );
};
