export const createSizeAdapter = (size: any) => {
  const formattedSize = {
    id: size.id,
    number: size.number,
  };
  return formattedSize;
};
