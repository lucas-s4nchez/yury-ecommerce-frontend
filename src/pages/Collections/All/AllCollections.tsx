import { getProducts } from "../../../services";
import { CollectionLayout } from "../../../components";

export const AllCollections: React.FC = () => {
  return <CollectionLayout axiosRequest={getProducts} />;
};
