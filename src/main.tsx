import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeConfig } from "./theme/ThemeProvider.tsx";
import { AppRoutes } from "./router/AppRoutes.tsx";
import { store } from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<>Cargando...</>}>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeConfig>
            <AppRoutes />
          </ThemeConfig>
        </BrowserRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
);
