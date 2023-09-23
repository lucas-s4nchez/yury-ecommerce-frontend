import {
  ILoginPayload,
  onCheckingCredentials,
  onLogin,
  onLogout,
} from "../redux/states/userSlice";
import { AuthState } from "../types";
import { useAppDispatch, useAppSelector } from "./useStore";

export const useAuthStore = () => {
  const { status, user, accessToken } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleCheckingCredentials = (): void => {
    dispatch(onCheckingCredentials());
  };

  const handleLogin = ({ accessToken, user }: ILoginPayload): void => {
    dispatch(onLogin({ accessToken, user }));
  };

  const handleLogout = (): void => {
    dispatch(onLogout());
  };

  const isAuthenticated: boolean = status === AuthState.AUTHENTICATED;

  return {
    status,
    user,
    accessToken,
    isAuthenticated,
    handleCheckingCredentials,
    handleLogin,
    handleLogout,
  };
};
