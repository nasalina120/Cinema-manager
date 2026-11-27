import { useEffect } from "react";
import { AiFillVideoCamera } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  selectFetchMoviesError,
  selectIsFetchingMovies,
  selectMovies,
} from "../store/slices/moviesSlice";
import styles from "./MoviesPage.module.sass";
import MoviesList from "../components/Movies/MoviesList";
import Pagination from "../components/Movies/Pagination";

function MoviesPage() {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const isFetching = useSelector(selectIsFetchingMovies);
  const fetchError = useSelector(selectFetchMoviesError);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <main className={styles.page}>
      <div className={styles.pageHeadingBar}>
        <h2 className={styles.pageHeading}>Movies List</h2>
        <button className={styles.button}>
          <AiFillVideoCamera /> ADD MOVIE
        </button>
      </div>
      {isFetching && <p>Loading events...</p>}
      {fetchError && <p>{fetchError}</p>}
      {!isFetching && !fetchError && (
        <>
          <MoviesList movies={movies} />
        </>
      )}
    </main>
  );
}

export default MoviesPage;
