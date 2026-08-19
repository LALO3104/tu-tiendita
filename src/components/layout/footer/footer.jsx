import { Link } from 'react-router-dom';
import styles from './footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.brandBlock}>
          <span className={styles.brand}>TU TIENDITA</span>
          <p className={styles.tagline}>Todo para tu negocio, en un solo lugar.</p>
        </div>

        <nav className={styles.links} aria-label="Enlaces del pie de página">
          <Link to="/catalogo" className={styles.link}>
            Catálogo
          </Link>
          <a href="#" className={styles.link}>
            Contacto
          </a>
          <a href="#" className={styles.link}>
            WhatsApp
          </a>
        </nav>
      </div>

      <div className={styles.bottom}>
        <p>© {currentYear} TU TIENDITA</p>
      </div>
    </footer>
  );
};

export default Footer;