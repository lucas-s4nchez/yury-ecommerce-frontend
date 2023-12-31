import { getProducts } from "../../../services";
import { FilterableProductList } from "../../../components";

export const AllCollections: React.FC = () => {
  return (
    <FilterableProductList endpointKey="productList" fetcher={getProducts} />
  );
};
