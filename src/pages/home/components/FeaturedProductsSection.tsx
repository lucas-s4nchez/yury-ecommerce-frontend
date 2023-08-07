import { Box, Typography } from "@mui/material";
import { MultiCarousel, ProductCard } from "../../../components";

export const FeaturedProductsSection: React.FC = () => {
  return (
    <Box sx={{ marginBlock: 5 }}>
      <Typography
        variant="h3"
        sx={{ fontSize: { xs: 22, sm: 26 }, marginBlock: 3 }}
      >
        Los más Destacados
      </Typography>
      <MultiCarousel>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </MultiCarousel>
    </Box>
  );
};
