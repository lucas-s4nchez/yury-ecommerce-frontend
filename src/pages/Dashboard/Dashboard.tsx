import { lazy } from "react";
import { Route, Navigate } from "react-router-dom";
import { DASHBOARD_ROUTES } from "../../constants/routes";
import { RoutesWithNotFoundLayout } from "../../components";

const General = lazy(() => import("./General/General"));
const Products = lazy(() => import("./Products/Products"));

const Dashboard: React.FC = () => {
  return (
    <RoutesWithNotFoundLayout>
      <Route path="/" element={<Navigate to={DASHBOARD_ROUTES.GENERAL} />} />
      <Route path={DASHBOARD_ROUTES.GENERAL} element={<General />} />
      <Route path={DASHBOARD_ROUTES.PRODUCTS} element={<Products />} />
    </RoutesWithNotFoundLayout>
  );
};

export default Dashboard;
