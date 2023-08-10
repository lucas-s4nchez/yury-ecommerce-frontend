import { useState } from "react";
import { getProducts } from "../../services/products.service";
import { useAsync, useFetchAndLoad } from "../../hooks";
import {
  BannerSection,
  CustomerReviewsSection,
  FeaturedProductsSection,
  HeroSection,
  InfoSection,
  MenWomenShopSection,
} from "./components";
import { Grid, Container } from "@mui/material";
const Home: React.FC = () => {
  const [products, setProducts] = useState({} as any);
  const { loading, callEndpoint } = useFetchAndLoad();

  const getApiData = async () => await callEndpoint(getProducts());

  const adaptProducts = (data: any) => {
    setProducts(data.data.products);
  };

  useAsync(getApiData, adaptProducts, () => {});

  return (
    <Grid marginY={2}>
      <Container maxWidth="lg">
        <HeroSection />
        <InfoSection />
        <FeaturedProductsSection />
        <MenWomenShopSection />
      </Container>
      <BannerSection />
      <Container maxWidth="lg">
        <CustomerReviewsSection />
      </Container>
      <div>{loading ? "Cargando..." : JSON.stringify(products)}</div>
    </Grid>
  );
};

export default Home;
