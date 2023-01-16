import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/graph" });

export const createPath = (start, graph) =>
  API.post("/create-path", { start, graph });
