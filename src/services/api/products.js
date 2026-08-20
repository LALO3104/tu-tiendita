import { supabase } from '@/services/supabase/client';

export async function getCatalogProducts() {
  const { data, error } = await supabase
    .from('products')
    .select(`
      id,
      name,
      slug,
      brand,
      is_active,
      product_presentations (
        id,
        name,
        sku,
        base_price,
        availability_status,
        is_default,
        is_active
      ),
      product_categories (
        categories (
          id,
          name,
          slug
        )
      ),
      product_tags (
        tags (
          id,
          name
        )
      )
    `)
    .eq('is_active', true)
    .order('name');

  if (error) {
    return {
      data: [],
      error: {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      },
    };
  }

  const normalized = (data || []).map((product) => {
    const defaultPresentation = (product.product_presentations || []).find(
      (presentation) => presentation.is_default && presentation.is_active
    );

    const categories = (product.product_categories || [])
      .map((relation) => relation.categories)
      .filter(Boolean);

    const tags = (product.product_tags || [])
      .map((relation) => relation.tags)
      .filter(Boolean);

    return {
      id: product.id,
      name: product.name,
      slug: product.slug,
      brand: product.brand,
      category: categories[0]?.name || null,
      categorySlug: categories[0]?.slug || null,
      tags: tags.map((tag) => tag.name),
      presentation: defaultPresentation
        ? {
            name: defaultPresentation.name,
            basePrice: defaultPresentation.base_price,
            availabilityStatus: defaultPresentation.availability_status,
            sku: defaultPresentation.sku,
          }
        : null,
    };
  });

  return { data: normalized, error: null };
}