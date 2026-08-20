import ProductCard from '@/components/catalog/product-card';
import { getCatalogProducts } from '@/services/api/products';
import { useEffect, useState } from 'react';
import styles from './catalog.module.css';

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading');
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadCatalog() {
      try {
        const result = await getCatalogProducts();

        if (!isMounted) return;

        if (result.error) {
          setStatus('error');
          setErrorMessage(result.error.message || 'Error desconocido');
          return;
        }

        setProducts(result.data || []);
        setStatus(result.data && result.data.length > 0 ? 'success' : 'empty');
      } catch (error) {
        if (!isMounted) return;

        setStatus('error');
        setErrorMessage(error.message || 'Error inesperado');
      }
    }

    loadCatalog();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Catálogo</h1>

      {status === 'loading' && (
        <p className={styles.message}>Cargando productos...</p>
      )}

      {status === 'error' && (
        <div>
          <p className={styles.error}>No pudimos cargar el catálogo.</p>
          {import.meta.env.DEV && errorMessage && (
            <p className={styles.technical}>{errorMessage}</p>
          )}
        </div>
      )}

      {status === 'empty' && (
        <p className={styles.message}>No hay productos disponibles.</p>
      )}

      {status === 'success' && (
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}