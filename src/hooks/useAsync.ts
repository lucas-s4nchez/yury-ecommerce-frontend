import { AxiosResponse } from "axios";
import { useEffect } from "react";

export const useAsync = (
  asyncFn: () => Promise<AxiosResponse<any, any>>,
  successFunction: Function,
  returnFunction: Function,
  dependencies: any[] = []
) => {
  useEffect(() => {
    let isActive = true; //Inicializa el componente
    asyncFn().then((result) => {
      if (isActive) successFunction(result.data); //ejecuta la funcion asincrona si el componente esta activo
    });
    return () => {
      returnFunction && returnFunction(); //si existe una funcion de retorno, la ejecuta
      isActive = false;
    };
  }, dependencies);
};
