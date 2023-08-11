import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { PrivatePublicInterceptor } from "./interceptors/axios.interceptor.ts";
import App from "./App.tsx";

PrivatePublicInterceptor();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
