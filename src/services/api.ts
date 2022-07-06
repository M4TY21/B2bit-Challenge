import axios from "axios";

const api = axios.create({
  baseURL: "https://frontendproject.b2bit.company/account",
});

api.interceptors.request.use(async (config) => {
  const acess_token = localStorage.getItem("acess_token");
  if (config.headers) {
    config.headers.Authorization = `Bearer ${acess_token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    if (error.response.status === 401) {
      localStorage.clear();
    }
  }
);

export { api };
