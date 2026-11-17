import { Outlet } from 'react-router-dom';
import Header from './Header';

import ServicePanel from './ServicePanel';
import Footer from './Footer';
import styles from './Layout.module.sass';
import Sidebar from '../sidebar/Sidebar';

function Layout () {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.middle}>
        <Sidebar />
        <main className={styles.main}>
          <Outlet />
        </main>
        <ServicePanel />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
