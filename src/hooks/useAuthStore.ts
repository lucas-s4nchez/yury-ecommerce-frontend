import { useEffect, useState } from "react";
import {
  onCheckingCredentials,
  onLogin,
  onLogout,
} from "../redux/states/userSlice";
import { AuthState } from "../types";
import { useAppDispatch, useAppSelector } from "./useStore";
import useSWRMutation from "swr/mutation";
import { loginUser, refreshToken } from "../services";
import { ILoginPayload, LoginFormValues } from "../models";
import { createUserAdapter } from "../adapters";
import useSWR from "swr";
import { LocalStorageKeys, getInLocalStorage } from "../helpers";

export const useAuthStore = () => {
  const [shouldRefreshToken, setShouldRefreshToken] = useState(false);
  const { status, user, accessToken } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const { trigger, isMutating: isLoggingIn } = useSWRMutation(
    "http://localhost:8080/api/auth/login",
    loginUser
  );

  const { isLoading: isLoadingRefreshData } = useSWR(
    shouldRefreshToken ? "http://localhost:8080/api/auth/refreshToken" : null,
    refreshToken,
    {
      errorRetryCount: 1,
      onErrorRetry(err, key, config, revalidate, revalidateOpts) {
        if (key === "http://localhost:8080/api/auth/refreshToken") return;
      },
      onSuccess(data) {
        const { accessToken, user } = data.data;
        const logedUser = createUserAdapter(user);
        handleLogin({ accessToken, user: logedUser });
      },
      onError() {
        handleLogout();
      },
    }
  );

  const handleCheckingCredentials = (): void => {
    dispatch(onCheckingCredentials());
  };

  const handleLogin = ({ accessToken, user }: ILoginPayload): void => {
    dispatch(onLogin({ accessToken, user }));
  };

  const handleLogout = (): void => {
    dispatch(onLogout());
  };

  const handleRefreshToken = () => {
    const accessToken = getInLocalStorage(LocalStorageKeys.ACCESS_TOKEN);
    if (accessToken) {
      setShouldRefreshToken(true);
    }
  };

  useEffect(() => {
    if (isLoggingIn || isLoadingRefreshData) {
      handleCheckingCredentials();
    }
  }, [isLoggingIn, isLoadingRefreshData]);

  useEffect(() => {
    if (shouldRefreshToken) {
      setShouldRefreshToken(false);
    }
  }, [shouldRefreshToken]);

  const handleAuthentication = async (values: LoginFormValues) => {
    await trigger(values, {
      onSuccess(data) {
        const { accessToken, user } = data.data;
        const logedUser = createUserAdapter(user);
        handleLogin({ accessToken, user: logedUser });
      },
      onError() {
        handleLogout();
      },
    });
  };

  const isAuthenticated: boolean = status === AuthState.AUTHENTICATED;

  return {
    status,
    user,
    accessToken,
    isAuthenticated,
    isLoggingIn,
    handleCheckingCredentials,
    handleLogin,
    handleLogout,
    handleRefreshToken,
    handleAuthentication,
  };
};
