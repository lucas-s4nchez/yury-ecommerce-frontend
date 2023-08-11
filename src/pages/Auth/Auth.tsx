import { Navigate, Route } from "react-router-dom";
import { RoutesWithNotFoundLayout } from "../../components";
import { AUTH_ROUTES } from "../../constants/routes";
import { Login, Register } from "./";

export const Auth: React.FC = () => {
  return (
    <RoutesWithNotFoundLayout>
      <Route path="/*" element={<Navigate to={AUTH_ROUTES.LOGIN} />} />
      <Route path={AUTH_ROUTES.LOGIN} element={<Login />} />
      <Route path={AUTH_ROUTES.REGISTER} element={<Register />} />
    </RoutesWithNotFoundLayout>
  );
};
