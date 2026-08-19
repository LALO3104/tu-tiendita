import Button from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import styles from './not-found.module.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <p className={styles.code}>404</p>
      <p className={styles.description}>Esta página no existe.</p>
      <Button variant="primary" onClick={() => navigate('/')}>
        Volver al inicio
      </Button>
    </div>
  );
};

export default NotFound;