import axios from "axios";

const api = axios.create({
  baseURL: "https://frontendproject.b2bit.company/account",
});

api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");
  if (config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { api };
