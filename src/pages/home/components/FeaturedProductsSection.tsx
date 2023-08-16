import { Box, Typography } from "@mui/material";
import { ResponsiveType } from "react-multi-carousel";
import { MultiCarousel, ProductCard } from "../../../components";
import { useState } from "react";
import { useAsync, useFetchAndLoad } from "../../../hooks";
import { getFeaturedProducts } from "../../../services/products.service";
import { createProductAdapter } from "../../../adapters";

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
  const [featuredProducts, setFeaturedProducts] = useState([] as any);
  const { loading, callEndpoint } = useFetchAndLoad();

  const getApiData = async () => {
    const result = await callEndpoint(getFeaturedProducts());
    return result;
  };

  const adaptProducts = (data: any) => {
    const formattedProducts = data.data.products.map((product: any) =>
      createProductAdapter(product)
    );
    setFeaturedProducts(formattedProducts);
  };

  useAsync(getApiData, adaptProducts, () => {}, []);

  return (
    <>
      <Box sx={{ marginBlock: 5 }}>
        <Typography
          variant="h3"
          sx={{ fontSize: { xs: 20, sm: 24 }, marginBlock: 3 }}
        >
          Los más Destacados
        </Typography>
        <MultiCarousel
          breakpoints={breakpoints}
          infinite={false}
          autoplay={false}
          partialVisible={true}
        >
          {loading ? (
            <h1>Cargando...</h1>
          ) : (
            featuredProducts &&
            featuredProducts?.map((product: any) => (
              <Box
                key={product.id}
                sx={{ display: "flex", justifyContent: "center", padding: 1 }}
              >
                <ProductCard {...product} />
              </Box>
            ))
          )}
        </MultiCarousel>
      </Box>
    </>
  );
};
