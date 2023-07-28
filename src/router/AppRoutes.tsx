import { Route, Navigate } from "react-router-dom";
import {
  ADMIN_ROUTES,
  PRIVATE_ROUTES,
  PUBLIC_ROUTES,
} from "../constants/routes";
import { RoutesWithNotFound } from "../helpers";
import {
  AdminGuard,
  AuthenticatedGuard,
  NotAuthenticatedGuard,
} from "../guards";
import { Admin, Cart, Home, Login } from "../pages";

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
        <Route path={`${ADMIN_ROUTES.ADMIN}/*`} element={<Admin />} />
      </Route>
    </RoutesWithNotFound>
  );
};
