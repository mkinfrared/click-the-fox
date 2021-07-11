import axios from "axios";

const foxApi = axios.create({
  baseURL: "https://randomfox.ca"
});

export { foxApi };
