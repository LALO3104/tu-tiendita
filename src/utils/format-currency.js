export function formatCurrency(value) {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return 'Precio no disponible';
  }

  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
  }).format(value);
}