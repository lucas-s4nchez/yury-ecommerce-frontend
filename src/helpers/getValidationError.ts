import { TypeWithKey } from "../types";

export const getValidationError = (errorCode: any) => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_NETWORK: "Falló la conexión con el servidor.",
    ERR_TIMEOUT: "Se acabó el tiempo.",
    ERR_CANCEL: "Se canceló la petición.",
    ERR_UNKNOWN: "Error desconocido.",
    ERR_INCORRECT_USER_OR_PASSWORD: "El usuario o contraseña no son correctos.",
    ERR_INCORRECT_DATA:
      "Los datos enviados son incorrectos, por favor intenta otra vez.",
    ERR_400: "Error 400",
    ERR_401: "Error 401",
    ERR_403: "Error 403",
  };

  return codeMatcher[errorCode];
};
