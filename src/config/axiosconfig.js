import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'http://localhost:3500' // se conecta a JSON-server en el puerto 3500
})

export default axiosClient