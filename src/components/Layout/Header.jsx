import Logo from '../UI/Logo';
import styles from './Header.module.sass';

function Header () {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
}

export default Header;
