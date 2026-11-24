import { axiosInstance } from './axiosInstance';

const ENDPOINT = '/studios';

export const getStudios = () => axiosInstance.get(ENDPOINT);
