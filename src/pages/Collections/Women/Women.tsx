import { getWomenProducts } from "../../../services";
import { FilterableProductList } from "../../../components";

export const Women: React.FC = () => {
  return (
    <FilterableProductList
      endpointKey="womenProductList"
      fetcher={getWomenProducts}
    />
  );
};
