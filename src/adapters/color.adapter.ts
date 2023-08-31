export const createColorAdapter = (color: any) => {
  const formattedColor = {
    id: color.id,
    name: color.name,
    hexCode: color.hexCode,
  };
  return formattedColor;
};
