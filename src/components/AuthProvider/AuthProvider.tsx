import { useEffect } from "react";
import { AuthState, IChildrenProp } from "../../types";
import { useAuthStore } from "../../hooks";
import { ScreenLoader } from "../ScreenLoader";

export const AuthProvider: React.FC<IChildrenProp> = ({
  children,
}: IChildrenProp) => {
  const { status, handleRefreshToken } = useAuthStore();

  useEffect(() => {
    handleRefreshToken();
  }, []);

  if (status === AuthState.CHECKING) {
    return <ScreenLoader />;
  }
  return <>{children}</>;
};
