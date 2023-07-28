import { Outlet, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useStore";
import { PUBLIC_ROUTES } from "../constants/routes";
import { RoleType } from "../store/slices/userSlice";

const AdminGuard: React.FC = () => {
  const { user } = useAppSelector((store) => store.user);
  return user?.role === RoleType.ADMIN ? (
    <Outlet />
  ) : (
    <Navigate to={PUBLIC_ROUTES.HOME} />
  );
};

export default AdminGuard;
