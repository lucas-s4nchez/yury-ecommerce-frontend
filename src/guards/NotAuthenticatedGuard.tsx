import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useStore";
import { PUBLIC_ROUTES } from "../constants/routes";
import { StatusType } from "../store/slices/userSlice";

const NotAuthenticatedGuard: React.FC = () => {
  const { status } = useAppSelector((store) => store.user);
  return status === StatusType.NOT_AUTHENTICATED ? (
    <Outlet />
  ) : (
    <Navigate to={PUBLIC_ROUTES.HOME} />
  );
};

export default NotAuthenticatedGuard;
