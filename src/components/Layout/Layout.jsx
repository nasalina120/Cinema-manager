import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import ServicePanel from './ServicePanel';
import Footer from './Footer';
import styles from './Layout.module.sass';

function Layout () {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.middle}>
        <Navigation />
        <main className={styles.main}>
          Main
          <Outlet />
        </main>
        <ServicePanel />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
