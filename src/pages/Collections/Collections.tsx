import { Navigate, Route } from "react-router-dom";
import { RoutesWithNotFoundLayout } from "../../components";
import { PUBLIC_ROUTES } from "../../constants/routes";
import { AllCollections, Featured, Men, Women } from "./";

export const Collections: React.FC = () => {
  return (
    <RoutesWithNotFoundLayout>
      <Route
        path="/*"
        element={<Navigate to={PUBLIC_ROUTES.ALL_COLLECTIONS} />}
      />
      <Route
        path={PUBLIC_ROUTES.ALL_COLLECTIONS}
        element={<AllCollections />}
      />
      <Route path={PUBLIC_ROUTES.FEATURED} element={<Featured />} />
      <Route path={PUBLIC_ROUTES.MEN} element={<Men />} />
      <Route path={PUBLIC_ROUTES.WOMEN} element={<Women />} />
    </RoutesWithNotFoundLayout>
  );
};
