import { createContext, ReactNode, useContext, useState } from "react";

import { api } from "../services/api";

export interface LoginUser {
  email: string;
  password: string;
}

interface User {
  name: string;
  last_name: string;
  email: string;

  avatar: {
    image_high_url: string;
  };
}

interface AuthProviderProps {
  children: ReactNode;
}

type AuthContextTypes = {
  user: User;
  handleSignIn: (LoginUser: LoginUser) => Promise<void>;
  fetchUserInfo: () => Promise<void>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextTypes);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);

  async function handleSignIn(LoginUser: LoginUser) {
    const response = await api.post("/tokens/", LoginUser);
    localStorage.setItem("token", response.data.tokens.access);
  }

  async function signOut() {
    setUser({} as User);
    localStorage.removeItem("token");
  }

  async function fetchUserInfo() {
    const response = await api.get("/profile/");
    setUser(response.data);
  }

  return (
    <AuthContext.Provider
      value={{ user, handleSignIn, fetchUserInfo, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
