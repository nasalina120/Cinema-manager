import React from 'react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import styles from './StudioItem.module.sass';

export default function StudioItem ({ studio }) {
  const defaultLogo = '/images/studios/defaultStudioLogo.png';

  return (
    <li className={styles.card}>
      <img
        className={styles.logo}
        src={studio.logo || defaultLogo}
        alt={studio.name}
      />

      <div className={styles.info}>
        <h3 className={styles.name}>{studio.name}</h3>
        <p className={styles.meta}>
          {studio.country} {studio.foundedYear}
        </p>
      </div>
      <div className={styles.actions}>
        <button type='button' className={styles.iconBtn}>
          <FaPencilAlt className={styles.editIcon} />
        </button>
        <button type='button' className={styles.iconBtn}>
          <FaTrashAlt className={styles.deleteIcon} />
        </button>
      </div>
    </li>
  );
}
