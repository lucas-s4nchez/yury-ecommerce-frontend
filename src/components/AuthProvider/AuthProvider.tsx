import { useEffect } from "react";
import { IChildrenProp } from "../../types";
import { useAuthStore } from "../../hooks";

export const AuthProvider: React.FC<IChildrenProp> = ({
  children,
}: IChildrenProp) => {
  const { data, isLoading, isSuccess, error } = useRefeshTokenQuery();
  const { handleCheckingCredentials, handleLogin, handleLogout } =
    useAuthStore();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (isLoading) {
      handleCheckingCredentials();
    }
    if (authToken && isSuccess) {
      handleLogin({
        token: data.token,
        user: data.user,
      });
    }
    if (error) {
      handleLogout();
    }
  }, [isSuccess, error, isLoading]);

  return <>{children}</>;
};
