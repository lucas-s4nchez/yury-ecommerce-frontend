import { getWomenProducts } from "../../../services";
import { CollectionLayout } from "../../../components";

export const Women: React.FC = () => {
  return <CollectionLayout axiosRequest={getWomenProducts} />;
};
