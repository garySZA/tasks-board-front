import axios, { AxiosInstance } from 'axios';
import { config } from '../config';

const taskboardApi: AxiosInstance = axios.create({
    baseURL: config.api.api_url
});

//* Interceptors
taskboardApi.interceptors.request.use( config => {
    config.headers['x-token'] = localStorage.getItem('token') || '';

    return config;
});

export {
    taskboardApi
}