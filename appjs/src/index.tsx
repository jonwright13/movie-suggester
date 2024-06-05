import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/index.tsx";
import { AppContextProvider } from "./hooks/useAppContext.tsx";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
