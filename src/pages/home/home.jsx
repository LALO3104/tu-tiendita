import { Link } from 'react-router-dom';
import styles from './home.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <p className={styles.heroBrand}>TU TIENDITA</p>
        <h1 className={styles.heroTitle}>
          Todo para tu negocio, en un solo lugar.
        </h1>
        <p className={styles.heroDescription}>
          Encuentra los productos esenciales para mantener tu negocio
          funcionando día a día.
        </p>
        <div className={styles.heroActions}>
          <Link to="/catalogo" className={styles.primaryButton}>
            Explorar catálogo
          </Link>
          <Link to="/catalogo" className={styles.secondaryButton}>
            ¿Qué tipo de negocio tienes?
          </Link>
        </div>
      </section>

      <section className={styles.businessSection}>
        <h2 className={styles.sectionTitle}>Compra según tu negocio</h2>
        <div className={styles.businessGrid}>
          <article className={styles.businessCard}>
            <h3 className={styles.cardTitle}>Taquería</h3>
            <p className={styles.cardDescription}>
              Todo para preparar los mejores tacos.
            </p>
          </article>
          <article className={styles.businessCard}>
            <h3 className={styles.cardTitle}>Cafetería</h3>
            <p className={styles.cardDescription}>
              Insumos para café y bebidas calientes.
            </p>
          </article>
          <article className={styles.businessCard}>
            <h3 className={styles.cardTitle}>Repostería</h3>
            <p className={styles.cardDescription}>
              Ingredientes y utensilios para hornear.
            </p>
          </article>
          <article className={styles.businessCard}>
            <h3 className={styles.cardTitle}>Dulcería</h3>
            <p className={styles.cardDescription}>
              Dulces, chocolates y golosinas variadas.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}