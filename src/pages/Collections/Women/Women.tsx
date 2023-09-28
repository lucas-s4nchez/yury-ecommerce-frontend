import { getWomenProducts } from "../../../services";
import { FilterableProductList } from "../../../components";

export const Women: React.FC = () => {
  return (
    <FilterableProductList
      endpointKey="womenProducts"
      fetcher={getWomenProducts}
    />
  );
};
