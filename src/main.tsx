import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeConfig } from "./theme/ThemeProvider.tsx";
import { store } from "./store/store.ts";
import { AppRoutes } from "./router/AppRoutes.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeConfig>
          <AppRoutes />
        </ThemeConfig>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
