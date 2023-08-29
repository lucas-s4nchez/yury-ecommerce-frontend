export const createCategoryAdapter = (category: any) => {
  const formattedCategory = {
    id: category.id,
    name: category.name,
  };
  return formattedCategory;
};
