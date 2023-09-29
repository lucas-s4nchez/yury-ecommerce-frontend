import { FilterableProductList } from "../../../components";
import { getMenProducts } from "../../../services";

export const Men: React.FC = () => {
  return (
    <FilterableProductList
      endpointKey={"menProductList"}
      fetcher={getMenProducts}
    />
  );
};
