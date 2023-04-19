import axios from 'axios'

const api = axios.create({
    baseURL: 'https://aldenise-consultoria-api.onrender.com'
})

export default api