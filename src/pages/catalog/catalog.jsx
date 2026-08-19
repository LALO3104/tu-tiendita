import Card from '@/components/ui/card';
import styles from './catalog.module.css';

const Catalog = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Catálogo</h1>
      <p className={styles.description}>
        Muy pronto aquí podrás explorar todos nuestros productos.
      </p>

      <Card variant="bordered" className={styles.placeholderCard}>
        <p className={styles.placeholderText}>Aún no hay productos disponibles.</p>
      </Card>
    </div>
  );
};

export default Catalog;