import axios from "axios";

export interface User {
  email: string;
  password: string;
}

const api = axios.create({
  baseURL: "https://frontendproject.b2bit.company/account/",
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");
  if (config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

async function handleSignIn(user: User) {
  const response = await api.post("tokens/", user);
  return response;
}

export { api, handleSignIn };
