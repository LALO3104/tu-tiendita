import { Menu, ShoppingCart, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './header.module.css';

const CART_COUNT_PLACEHOLDER = 0;

const NAV_LINKS = [
  {
    to: '/',
    label: 'Inicio',
    isActive: (location) => location.pathname === '/',
  },
  {
    to: '/catalogo',
    label: 'Catálogo',
    isActive: (location) => location.pathname === '/catalogo' && location.search === '',
  },
  {
    to: '/catalogo?view=categories',
    label: 'Categorías',
    isActive: (location) =>
      location.pathname === '/catalogo' && location.search === '?view=categories',
  },
];

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link to="/" className={styles.brand} onClick={closeMenu}>
          TU TIENDITA
        </Link>

        <nav className={styles.nav} aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={[styles.navLink, link.isActive(location) ? styles.navLinkActive : '']
                .filter(Boolean)
                .join(' ')}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link
            to="/carrito"
            className={styles.cartButton}
            aria-label={`Carrito de compras, ${CART_COUNT_PLACEHOLDER} productos`}
            onClick={closeMenu}
          >
            <ShoppingCart size={20} aria-hidden="true" />
            <span className={styles.cartCount}>{CART_COUNT_PLACEHOLDER}</span>
          </Link>

          <button
            type="button"
            className={styles.menuButton}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav id="mobile-menu" className={styles.mobileNav} aria-label="Navegación móvil">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={[
                styles.mobileNavLink,
                link.isActive(location) ? styles.navLinkActive : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;