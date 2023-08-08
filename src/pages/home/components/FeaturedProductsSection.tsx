import { Box, Typography } from "@mui/material";
import { ResponsiveType } from "react-multi-carousel";
import { MultiCarousel, ProductCard } from "../../../components";

const breakpoints: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 900 },
    items: 3,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 900, min: 500 },
    items: 2,
    partialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

export const FeaturedProductsSection: React.FC = () => {
  return (
    <Box sx={{ marginBlock: 5 }}>
      <Typography
        variant="h3"
        sx={{ fontSize: { xs: 22, sm: 26 }, marginBlock: 3 }}
      >
        Los más Destacados
      </Typography>
      <MultiCarousel
        breakpoints={breakpoints}
        infinite={false}
        autoplay={false}
        partialVisible={true}
      >
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
