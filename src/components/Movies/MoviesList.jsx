import MovieCard from "./MovieCard";
import styles from "./MoviesList.module.sass";


export default function MoviesList({ movies }) {
  if (!movies.length) {
    return <p>No movies found.</p>;
  }

  return (
    <>
      <ul className={styles.cardContainer}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
}
