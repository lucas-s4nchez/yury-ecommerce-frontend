import { BrowserRouter } from "react-router-dom";
import { ThemeConfig } from "./theme/ThemeProvider.tsx";
import { AppRoutes } from "./router/AppRoutes.tsx";
import { SnackbarUtilitiesConfigurator } from "./helpers/snackbarManager.ts";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <BrowserRouter>
      <ThemeConfig>
        <SnackbarProvider>
          <SnackbarUtilitiesConfigurator />
          <AppRoutes />
        </SnackbarProvider>
      </ThemeConfig>
    </BrowserRouter>
  );
}

export default App;
