import { useState } from "react";
import { useAsync, useFetchAndLoad } from "../../../hooks";
import { createProductAdapter } from "../../../adapters";
import { CollectionLayout } from "../../../components";
import { getMenProducts } from "../../../services";

export const Men: React.FC = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [menProducts, setMenProducts] = useState([] as any);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  const getMenProductsData = async () => {
    const result = await callEndpoint(getMenProducts(page));
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

  useAsync(getMenProductsData, adaptMenProducts, () => {}, [page]);

  return (
    <CollectionLayout
      collection={menProducts}
      loading={loading}
      page={page}
      count={count}
      handleChangePage={handleChangePage}
    />
  );
};
