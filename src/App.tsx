import { BrowserRouter } from "react-router-dom";
import { ThemeConfig } from "./theme/ThemeProvider.tsx";
import { AppRoutes } from "./router/AppRoutes.tsx";
import { SnackbarUtilitiesConfigurator } from "./helpers/snackbarManager.ts";
import { SnackbarProvider } from "notistack";
import { AuthProvider } from "./components";

function App() {
  return (
    <BrowserRouter>
      <ThemeConfig>
        <SnackbarProvider maxSnack={1}>
          <SnackbarUtilitiesConfigurator />
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </SnackbarProvider>
      </ThemeConfig>
    </BrowserRouter>
  );
}

export default App;
