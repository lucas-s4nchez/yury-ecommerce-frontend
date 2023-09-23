import { useAsync, useAuthStore, useFetchAndLoad } from "./";

export const useFetchRefreshToken = (axiosCallback: any) => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const { handleCheckingCredentials, handleLogin } = useAuthStore();

  const getRefreshTokenData = async () => {
    const result = await callEndpoint(axiosCallback());
    return result;
  };

  const adaptRefreshToken = (data: any) => {
    const authToken = localStorage.getItem("authToken");
    if (data) {
      if (loading) {
        handleCheckingCredentials();
      }
      if (authToken) {
        handleLogin({
          token: data.token,
          user: data.user,
        });
      }
    }
  };

  useAsync(getRefreshTokenData, adaptRefreshToken, () => {}, []);

  return {
    loading,
  };
};
