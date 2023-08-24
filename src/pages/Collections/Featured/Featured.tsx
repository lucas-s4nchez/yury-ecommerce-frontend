import { useState } from "react";
import { useAsync, useFetchAndLoad } from "../../../hooks";
import { getFeaturedProducts } from "../../../services";
import { createProductAdapter } from "../../../adapters";
import { CollectionLayout } from "../../../components";

export const Featured: React.FC = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [featuredProducts, setFeaturedProducts] = useState([] as any);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  const getFeaturedProductsData = async () => {
    const result = await callEndpoint(getFeaturedProducts(page));
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

  useAsync(getFeaturedProductsData, adaptFeaturedProducts, () => {}, [page]);

  return (
    <CollectionLayout
      collection={featuredProducts}
      loading={loading}
      page={page}
      count={count}
      handleChangePage={handleChangePage}
    />
  );
};
