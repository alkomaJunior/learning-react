// Importing libraries
import axios from "axios";

// Importing the base url env variable
const { REACT_APP_API_URL } = process.env

// Setting up the API client settings
// `withCredentials` indicates whether cross-site Access-Control requests
// should be made using credentials
export const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});