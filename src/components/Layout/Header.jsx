import { UserCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';
import Logo from '../UI/Logo';
import styles from './Header.module.sass';

function Header () {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.rightContainer}>
        <Cog6ToothIcon className={styles.settings} />
        <UserCircleIcon className={styles.avatar} />
      </div>
    </header>
  );
}

export default Header;
