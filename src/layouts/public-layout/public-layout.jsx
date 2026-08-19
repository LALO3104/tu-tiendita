import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { Outlet } from 'react-router-dom';
import styles from './public-layout.module.css';

const PublicLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;