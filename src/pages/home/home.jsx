import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import styles from './home.module.css';

const BUSINESS_TYPES = ['Taquería', 'Cafetería', 'Repostería', 'Dulcería'];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>TU TIENDITA</span>
        <h1 className={styles.title}>Todo para tu negocio, en un solo lugar.</h1>
        <p className={styles.description}>
          Encuentra productos, compara presentaciones y prepara tu pedido de forma rápida.
        </p>
        <div className={styles.actions}>
          <Button variant="primary" size="lg" onClick={() => navigate('/catalogo')}>
            Explorar catálogo
          </Button>
          <Button variant="secondary" size="lg" onClick={() => navigate('/catalogo')}>
            ¿Qué tipo de negocio tienes?
          </Button>
        </div>
      </section>

      <section className={styles.businessSection}>
        <h2 className={styles.sectionTitle}>Compra según tu negocio</h2>
        <div className={styles.businessGrid}>
          {BUSINESS_TYPES.map((type) => (
            <Card key={type} variant="bordered" className={styles.businessCard}>
              {type}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;