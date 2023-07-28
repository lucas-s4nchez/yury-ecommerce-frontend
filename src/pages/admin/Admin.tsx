import { Route, Navigate } from "react-router-dom";
import { ADMIN_ROUTES } from "../../constants/routes";
import { AdminHome, Products } from ".";
import { RoutesWithNotFound } from "../../helpers";

export const Admin: React.FC = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={ADMIN_ROUTES.HOME} />} />
      <Route path={ADMIN_ROUTES.HOME} element={<AdminHome />} />
      <Route path={ADMIN_ROUTES.PRODUCTS} element={<Products />} />
    </RoutesWithNotFound>
  );
};
