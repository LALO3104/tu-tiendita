import { useParams } from 'react-router-dom';
import styles from './product-detail.module.css';

export default function ProductDetail() {
  const { slug } = useParams();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Detalle del producto</h1>
      <p className={styles.slug}>Producto: {slug}</p>
    </div>
  );
}