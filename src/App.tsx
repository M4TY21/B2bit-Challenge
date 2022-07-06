import { GlobalStyle } from "./styles/global";
import { AuthProvider } from "./hooks/auth";
import { AppRoutes } from "./routes";

export function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <AppRoutes />
    </AuthProvider>
  );
}
