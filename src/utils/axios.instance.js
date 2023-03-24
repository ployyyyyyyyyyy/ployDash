import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://menuler.me/api",
})
axiosInstance.interceptors.response.use(response => response.data.data)
export default axiosInstance 