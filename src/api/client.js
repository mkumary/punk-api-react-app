import axios from "axios";

const instance = axios.create({
  timeout: 50000,
  baseURL: "https://api.punkapi.com/v2/"
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return error;
  }
);

export default {
  get(path) {
    return instance.get(path);
  },
  post(path, data) {
    return instance.post(path, data);
  }
};
