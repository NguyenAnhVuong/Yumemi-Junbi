import axios from "axios";

const axiosResas = axios.create();

axiosResas.interceptors.request.use(
  (config) => {
    config.headers = {
      "X-API-KEY": "OBtDk4kGCVoON1YNgl4RYZNd6ZgVKs6yusEYRVeY",
    };
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axiosResas;
