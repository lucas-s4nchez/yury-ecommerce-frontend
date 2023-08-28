import { useFilterProducts } from "../../../hooks";
import { CollectionLayout } from "../../../components";
import { getMenProducts } from "../../../services";

export const Men: React.FC = () => {
  const {
    loading,
    products,
    page,
    totalPages,
    order,
    handleChangeOrder,
    handleChangePage,
  } = useFilterProducts(getMenProducts);

  return (
    <CollectionLayout
      collection={products}
      loading={loading}
      page={page}
      count={totalPages}
      order={order}
      handleChangePage={handleChangePage}
      handleChangeOrder={handleChangeOrder}
    />
  );
};
