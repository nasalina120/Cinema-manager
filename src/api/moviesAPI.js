import axiosInstance from './axiosInstance';

const ENDPOINT = '/movies';

export const getMovies = () => axiosInstance.get(ENDPOINT);
export const createMovie = newMovie => axiosInstance.post(ENDPOINT, newMovie);
