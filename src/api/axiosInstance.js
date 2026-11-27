// Робота із сервером (Axios)
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
});

export const getMovies = () => axiosInstance.get('/movies');
export const createMovie = newMovie => axiosInstance.post('/movies', newMovie);

getMovies()
  .then(response => console.log(response.data))
  .catch(err => console.log(err));

const testMovie = {
  title: 'Аватар',
  release_year: 2009,
  genre: 'Фантастика',
  plot: 'Колишній морпіх Джейк Саллі вирушає на планету Пандора.',
  studio_id: '4',
  actor_ids: ['1'],
  director_ids: ['4'],
};

createMovie(testMovie)
  .then(({ data }) => console.log('Успішно додано фільм:', data))
  .catch(err => console.log('Помилка додавання:', err));

export default axiosInstance;
