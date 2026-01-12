// axios.ts → configuration GLOBALE (URL, headers, token)
// 1 seule config axios (⛔ PAS de logique ici)

import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;
