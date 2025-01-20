import { useGlobalStore } from "@/stores";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.DEV
    ? import.meta.env.VITE_DEV_API_URL
    : import.meta.env.VITE_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.defaults.withCredentials = true;


api.interceptors.response.use(
  async (res) => {
  
    return res;
  },
  (error: any) => {
    useGlobalStore().setLoading(false);
    useGlobalStore().setProgress(false);
    return Promise.reject(error.response);
  }
);
export default api;