import axios from "axios";

export const api = axios.create({
  baseURL: "https://frontendproject.b2bit.company/account/",
});
