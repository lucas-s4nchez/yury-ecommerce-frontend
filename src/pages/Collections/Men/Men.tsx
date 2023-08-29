import { CollectionLayout } from "../../../components";
import { getMenProducts } from "../../../services";

export const Men: React.FC = () => {
  return <CollectionLayout axiosRequest={getMenProducts} />;
};
