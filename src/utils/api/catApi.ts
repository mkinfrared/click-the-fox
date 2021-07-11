import axios from "axios";

const catApi = axios.create({
  baseURL: "https://api.thecatapi.com"
});

export { catApi };
