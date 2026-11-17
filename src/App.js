import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './reset.css';

import './App.css';
import './api/axiosInstance';
import HomePage from './pages/HomePage';

import MoviesPage from './pages/MoviesPage';
import ActorsPage from './pages/ActorsPage';
import DirectorsPage from './pages/DirectorsPage';
import ServicePage from './pages/ServicePage';
import StudiosPage from './pages/StudiosPage';
import Layout from './components/Layout/Layout';
import NotFoundPage from './pages/NotFoundPage';

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='movies' element={<MoviesPage />} />
            <Route path='actors' element={<ActorsPage />} />
            <Route path='directors' element={<DirectorsPage />} />
            <Route path='studios' element={<StudiosPage />} />
            <Route path='service' element={<ServicePage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
