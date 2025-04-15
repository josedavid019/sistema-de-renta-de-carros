import axios from 'axios';

const loginApi = axios.create({
    baseURL: 'http://localhost:8000/api/login/',
});

export const loginUser = async (credentials) => {
    try {
        const response = await loginApi.post('/', credentials);
        return response.data; // Retorna el token y datos del usuario
    } catch (error) {
        throw error.response ? error.response.data : { error: 'Error desconocido' };
    }
};