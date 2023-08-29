import { getFeaturedProducts } from "../../../services";
import { CollectionLayout } from "../../../components";

export const Featured: React.FC = () => {
  return <CollectionLayout axiosRequest={getFeaturedProducts} />;
};
