import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useStore";
import { AUTH_ROUTES } from "../constants/routes";
import { AuthState } from "../types";

const AuthenticatedGuard: React.FC = () => {
  const { status } = useAppSelector((store) => store.user);
  return status === AuthState.AUTHENTICATED ? (
    <Outlet />
  ) : (
    <Navigate to={`${AUTH_ROUTES.AUTH}/`} />
  );
};

export default AuthenticatedGuard;
