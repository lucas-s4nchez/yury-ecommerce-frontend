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
import { Layout } from "../components";

const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const Home = lazy(() => import("../pages/Home/Home"));
const Featured = lazy(() => import("../pages/Featured/Featured"));
const Login = lazy(() => import("../pages/Login/Login"));
const Register = lazy(() => import("../pages/Register/Register"));

export const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={PUBLIC_ROUTES.HOME} />} />
        <Route path={PUBLIC_ROUTES.HOME} element={<Home />} />
        <Route path={PUBLIC_ROUTES.FEATURED} element={<Featured />} />
        <Route element={<NotAuthenticatedGuard />}>
          <Route path={PUBLIC_ROUTES.LOGIN} element={<Login />} />
        </Route>
        <Route element={<NotAuthenticatedGuard />}>
          <Route path={PUBLIC_ROUTES.REGISTER} element={<Register />} />
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
    </Layout>
  );
};
