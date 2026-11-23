// import FilmIcon from '../../assets/images/header/Film.svg';
// import UserIcon from '../../assets/images/header/User.svg';
import {
  FilmIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/solid';

import styles from './Header.module.sass';

function Header () {
  return (
    <header className={styles.header}>
      <div className={styles.leftContainer}>
        <FilmIcon className={styles.logo} />
        <h1>Cinema Manager</h1>
      </div>
      <div className={styles.rightContainer}>
        <Cog6ToothIcon className={styles.settings} />
        <UserCircleIcon className={styles.avatar} />
      </div>
    </header>
  );
}

export default Header;
