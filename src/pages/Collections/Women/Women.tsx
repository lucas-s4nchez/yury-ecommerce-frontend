import { useState } from "react";
import { useAsync, useFetchAndLoad } from "../../../hooks";
import { getWomenProducts } from "../../../services";
import { createProductAdapter } from "../../../adapters";
import { CollectionLayout } from "../../../components";

export const Women: React.FC = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [womenProducts, setWomenProducts] = useState([] as any);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  const getWomenProductsData = async () => {
    const result = await callEndpoint(getWomenProducts(page));
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

  useAsync(getWomenProductsData, adaptWomenProducts, () => {}, [page]);

  return (
    <CollectionLayout
      collection={womenProducts}
      loading={loading}
      page={page}
      count={count}
      handleChangePage={handleChangePage}
    />
  );
};
