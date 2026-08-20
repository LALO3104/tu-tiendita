import Badge from '@/components/ui/badge';
import { formatCurrency } from '@/utils/format-currency';
import { Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './product-card.module.css';

const AVAILABILITY_LABELS = {
  available: 'Disponible',
  low_stock: 'Pocas piezas',
  sold_out: 'Agotado',
  coming_soon: 'Próximamente',
};

export default function ProductCard({ product }) {
  const availabilityStatus = product.presentation?.availabilityStatus;
  const availabilityLabel = availabilityStatus
    ? AVAILABILITY_LABELS[availabilityStatus] || availabilityStatus
    : null;

  const visibleTags = (product.tags || [])
    .filter((tag) => tag !== 'Disponible')
    .slice(0, 3);

  return (
    <article className={styles.card}>
      <div className={styles.imagePlaceholder} aria-hidden="true">
        <Package size={40} strokeWidth={1.5} />
      </div>

      <div className={styles.content}>
        <div className={styles.categorySlot}>
          {product.category && (
            <span className={styles.category}>{product.category}</span>
          )}
        </div>

        <div className={styles.nameSlot}>
          <h3 className={styles.name}>{product.name}</h3>
        </div>

        <div className={styles.brandSlot}>
          {product.brand && <p className={styles.brand}>{product.brand}</p>}
        </div>

        <div className={styles.presentationSlot}>
          {product.presentation && (
            <p className={styles.presentation}>{product.presentation.name}</p>
          )}
        </div>

        <div className={styles.priceSlot}>
          <p className={styles.price}>
            {product.presentation
              ? formatCurrency(product.presentation.basePrice)
              : 'Precio no disponible'}
          </p>
        </div>

        <div className={styles.tagsSlot}>
          {visibleTags.length > 0 && (
            <div className={styles.tags}>
              {visibleTags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          )}
        </div>

        <div className={styles.availabilitySlot}>
          {availabilityLabel && (
            <div className={styles.availability}>
              <Badge>{availabilityLabel}</Badge>
            </div>
          )}
        </div>

        <Link
          to={`/producto/${product.slug}`}
          className={styles.detailLink}
          aria-label={`Ver producto ${product.name}`}
        >
          Ver producto
        </Link>
      </div>
    </article>
  );
}