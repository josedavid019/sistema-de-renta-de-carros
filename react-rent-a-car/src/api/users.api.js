import axios from 'axios';

const usersApi = axios.create({
    baseURL: 'http://localhost:8000/users/api/users/',
});

export const getAllUsers = () => usersApi.get('/');

export const getUser = (id) => usersApi.get(`/${id}/`);

export const createUser = (user) => usersApi.post('/', user);

export const updateUser = (id, user) => usersApi.put(`/${id}/`, user);

export const deleteUser = (id) => usersApi.delete(`/${id}/`);
