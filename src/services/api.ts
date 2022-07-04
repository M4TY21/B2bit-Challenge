import axios from "axios";

export interface LoginUser {
  email: string;
  password: string;
}

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

async function handleSignIn(user: LoginUser) {
  const response = await api.post("/tokens/", user);
  return response;
}

async function fetchUserInfo() {
  try {
    const response = await api.get("/profile/");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export { api, handleSignIn, fetchUserInfo };
