import axios from "axios";

const API_BASE_URL = "http://192.168.0.39:5000/api";

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
});

export default instance;
