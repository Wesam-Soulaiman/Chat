import axios from "axios";

const baseURL =
  import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "/api";

const client = axios.create({ baseURL, withCredentials: true });

export const request = async (options) => {
  return client(options);
};
