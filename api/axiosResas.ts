import axios from "axios";

const axiosResas = axios.create();

axiosResas.interceptors.request.use(
  (config) => {
    config.headers = {
      "X-API-KEY": process.env.RESAS_API_KEY || "",
    };
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axiosResas;
