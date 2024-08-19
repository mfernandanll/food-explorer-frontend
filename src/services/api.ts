import axios from "axios";

export const api = axios.create({
  baseURL: 'https://food-explorer-backend-qs1l.onrender.com'
});