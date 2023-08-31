export const createBrandAdapter = (brand: any) => {
  const formattedBrand = {
    id: brand.id,
    name: brand.name,
  };
  return formattedBrand;
};
