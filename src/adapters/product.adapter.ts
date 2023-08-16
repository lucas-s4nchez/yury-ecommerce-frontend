export const createProductAdapter = (product: any) => {
  const formattedProduct = {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    brand: product.brand,
    colors: product.colors,
    sizes: product.sizes,
    featured: product.featured,
    category: product.category,
    stock: product.stock,
    images: product.images.map((image: any) => image.url),
  };
  return formattedProduct;
};
