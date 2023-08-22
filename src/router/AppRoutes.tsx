import { Route, Navigate } from "react-router-dom";
import {
  AUTH_ROUTES,
  DASHBOARD_ROUTES,
  PRIVATE_ROUTES,
  PUBLIC_ROUTES,
} from "../constants/routes";
import {
  AdminGuard,
  AuthenticatedGuard,
  NotAuthenticatedGuard,
} from "../guards";
import { Layout, RoutesWithNotFoundLayout } from "../components";
import { Cart, Dashboard, Home, Auth, Collections } from "../pages";

export const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <RoutesWithNotFoundLayout>
        <Route path="/" element={<Navigate to={PUBLIC_ROUTES.HOME} />} />
        <Route path={PUBLIC_ROUTES.HOME} element={<Home />} />
        <Route
          path={`${PUBLIC_ROUTES.COLLECTIONS}/*`}
          element={<Collections />}
        />

        <Route element={<NotAuthenticatedGuard />}>
          <Route path={`${AUTH_ROUTES.AUTH}/*`} element={<Auth />} />
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
      </RoutesWithNotFoundLayout>
    </Layout>
  );
};
