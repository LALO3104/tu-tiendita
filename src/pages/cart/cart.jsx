import Button from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import styles from './cart.module.css';

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Tu pedido</h1>
      <p className={styles.description}>Tu carrito está vacío.</p>
      <Button variant="primary" onClick={() => navigate('/catalogo')}>
        Explorar productos
      </Button>
    </div>
  );
};

export default Cart;