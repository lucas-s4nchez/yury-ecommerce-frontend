import { getFeaturedProducts } from "../../../services";
import { FilterableProductList } from "../../../components";

export const Featured: React.FC = () => {
  return (
    <FilterableProductList
      endpointKey="featuredProductList"
      fetcher={getFeaturedProducts}
    />
  );
};
