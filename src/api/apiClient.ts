import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://api.chucknorris.io/jokes",
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;
