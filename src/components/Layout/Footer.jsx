import styles from './Footer.module.sass';
import { FaGithub, FaLinkedin, FaTelegramPlane } from 'react-icons/fa';

function Footer () {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftContainer}>2026-2027</div>
      <div className={styles.rightContainer}>
        <FaGithub />
        <FaLinkedin />
        <FaTelegramPlane />
      </div>
    </footer>
  );
}

export default Footer;
