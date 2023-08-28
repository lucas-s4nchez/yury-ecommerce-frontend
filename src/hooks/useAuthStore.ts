import {
  ILoginPayload,
  onCheckingCredentials,
  onLogin,
  onLogout,
} from "../redux/slices/userSlice";
import { AuthState } from "../types";
import { useAppDispatch, useAppSelector } from "./useStore";

export const useAuthStore = () => {
  const { status, user, token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleCheckingCredentials = (): void => {
    dispatch(onCheckingCredentials());
  };

  const handleLogin = ({ token, user }: ILoginPayload): void => {
    dispatch(onLogin({ token, user }));
  };

  const handleLogout = (): void => {
    dispatch(onLogout());
  };

  const isAuthenticated: boolean = status === AuthState.AUTHENTICATED;

  return {
    status,
    user,
    token,
    isAuthenticated,
    handleCheckingCredentials,
    handleLogin,
    handleLogout,
  };
};
