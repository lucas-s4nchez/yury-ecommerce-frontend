import { Alert, Box, Skeleton, Typography } from "@mui/material";
import { ResponsiveType } from "react-multi-carousel";
import { MultiCarousel, ProductCard } from "../../../components";
import { useFetchProducts } from "../../../hooks";
import { getFeaturedProducts } from "../../../services/products.service";

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

const SkeletonLoader: React.FC = () => {
  const skeletons = [1, 2, 3, 4];
  return (
    <MultiCarousel
      breakpoints={breakpoints}
      infinite={false}
      autoplay={false}
      partialVisible={true}
    >
      {skeletons.map((skeleton: any) => (
        <Box
          key={skeleton}
          sx={{ display: "flex", justifyContent: "center", padding: 1 }}
        >
          <Skeleton variant="rectangular" width="100%" height={340} />
        </Box>
      ))}
    </MultiCarousel>
  );
};

export const FeaturedProductsSection: React.FC = () => {
  const { isLoadingProducts, products } = useFetchProducts(getFeaturedProducts);

  return (
    <Box sx={{ marginBlock: 5 }}>
      <Typography
        variant="h3"
        sx={{ fontSize: { xs: 20, sm: 24 }, marginBlock: 3 }}
      >
        Los más Destacados
      </Typography>

      {isLoadingProducts ? (
        <SkeletonLoader />
      ) : products.length >= 1 ? (
        <MultiCarousel
          breakpoints={breakpoints}
          infinite={false}
          autoplay={false}
          partialVisible={true}
        >
          {products?.map((product: any) => (
            <Box
              key={product.id}
              sx={{ display: "flex", justifyContent: "center", padding: 1 }}
            >
              <ProductCard {...product} />
            </Box>
          ))}
        </MultiCarousel>
      ) : (
        <Alert variant="filled" severity="info">
          No hay productos por el momento
        </Alert>
      )}
    </Box>
  );
};
