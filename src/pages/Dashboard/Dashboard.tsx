import { lazy } from "react";
import { Route, Navigate } from "react-router-dom";
import { RoutesWithNotFound } from "../../shared";
import { DASHBOARD_ROUTES } from "../../constants/routes";

const General = lazy(() => import("./General/General"));
const Products = lazy(() => import("./Products/Products"));

const Dashboard: React.FC = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={DASHBOARD_ROUTES.GENERAL} />} />
      <Route path={DASHBOARD_ROUTES.GENERAL} element={<General />} />
      <Route path={DASHBOARD_ROUTES.PRODUCTS} element={<Products />} />
    </RoutesWithNotFound>
  );
};

export default Dashboard;
