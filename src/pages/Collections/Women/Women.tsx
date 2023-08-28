import { useFilterProducts } from "../../../hooks";
import { getWomenProducts } from "../../../services";
import { CollectionLayout } from "../../../components";

export const Women: React.FC = () => {
  const {
    loading,
    products,
    page,
    totalPages,
    order,
    handleChangeOrder,
    handleChangePage,
  } = useFilterProducts(getWomenProducts);

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
