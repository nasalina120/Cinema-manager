import { Clapperboard } from 'lucide-react';
import { Link } from 'react-router-dom';

import styles from './Logo.module.sass';

export default function Logo () {
  return (
    <Link to='/' className={styles.logo}>
      <Clapperboard size={20} strokeWidth={2} className={styles.iconLogo} />
      <span>Cinema Manager</span>
    </Link>
  );
}
