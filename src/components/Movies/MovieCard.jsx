import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.sass";

export default function MovieItem({ movie }) {
  const defaultLogo =
    "https://media.istockphoto.com/id/1399588872/vector/corrupted-pixel-file-icon-damage-document-symbol-sign-broken-data-vector.jpg?s=612x612&w=0&k=20&c=ffG6gVLUPfxZkTwjeqdxD67LWd8R1pQTIyIVUi-Igx0=";
  return (
    <li>
      <Link to={`/movies/${movie.id}`} className={styles.card}>
        <div className={styles.coverWrap}>
          <img
            className={styles.cover}
            src={movie.poster_url || defaultLogo}
            alt={movie.title}
          />
        </div>
        <div className={styles.info}>
          <h3 className={styles.name}>{movie.title}</h3>
          <p className={styles.meta}>
            {movie.release_year}, {movie.genre}
          </p>
        </div>
        <div className={styles.actions}>
          <button type="button" className={styles.iconBtn}>
            <FaPencilAlt className={styles.editIcon} />
          </button>
          <button type="button" className={styles.iconBtn}>
            <FaTrashAlt className={styles.deleteIcon} />
          </button>
        </div>
      </Link>
    </li>
  );
}
