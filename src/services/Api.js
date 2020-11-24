import axios from 'axios';
import enviroment from '../config/Enviroment';

const api = axios.create({
    baseURL: `https://empresas.ioasys.com.br/api/v1/`
});

export default api;