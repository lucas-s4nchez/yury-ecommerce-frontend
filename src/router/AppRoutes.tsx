import { lazy } from "react";
import { Route, Navigate } from "react-router-dom";
import {
  DASHBOARD_ROUTES,
  PRIVATE_ROUTES,
  PUBLIC_ROUTES,
} from "../constants/routes";
import {
  AdminGuard,
  AuthenticatedGuard,
  NotAuthenticatedGuard,
} from "../guards";
import { RoutesWithNotFound } from "../shared";

const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/Login/Login"));

export const AppRoutes: React.FC = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={PUBLIC_ROUTES.HOME} />} />
      <Route path={PUBLIC_ROUTES.HOME} element={<Home />} />
      <Route element={<NotAuthenticatedGuard />}>
        <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />
      </Route>
      <Route element={<AuthenticatedGuard />}>
        <Route path={PRIVATE_ROUTES.CART} element={<Cart />} />
      </Route>
      <Route element={<AdminGuard />}>
        <Route
          path={`${DASHBOARD_ROUTES.DASHBOARD}/*`}
          element={<Dashboard />}
        />
      </Route>
    </RoutesWithNotFound>
  );
};
