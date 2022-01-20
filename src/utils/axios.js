import axios from 'axios';
// export const BASE_URL = "http://tkambio-prueba.test"
export const BASE_URL = "https://tkambio-prueba.herokuapp.com/public/"

axios.defaults.withCredentials = true

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 9000,
    headers: {
        'Access-Control-Allow-Credentials': 'True',
        'Content-Type': 'application/json'
    },
    withCredentials: true,
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
    return config
})
export default instance;
