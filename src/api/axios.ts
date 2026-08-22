import axios from "axios";
import { getConfig } from "../config";

const api = axios.create({
  baseURL: getConfig().apiUrl,
});

export default api;
