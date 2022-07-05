import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

import { GlobalStyle } from "./Global/style";
import { AuthProvider } from "./Hooks/auth";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
