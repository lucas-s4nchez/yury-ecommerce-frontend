import { useState } from "react";
import { getProducts } from "../../services/products.service";
import { useAsync, useFetchAndLoad } from "../../hooks";
import {
  FeaturedProductsSection,
  HeroSection,
  InfoSection,
  MenWomenShopSection,
} from "./components";
import { Grid } from "@mui/material";
const Home: React.FC = () => {
  // const [products, setProducts] = useState({} as any);
  // const { loading, callEndpoint } = useFetchAndLoad();

  // const getApiData = async () => await callEndpoint(getProducts());

  // const adaptProducts = (data: any) => {
  //   setProducts(data.data.products);
  // };

  // useAsync(getApiData, adaptProducts, () => {});

  return (
    <Grid marginY={2}>
      <HeroSection />
      <InfoSection />
      <FeaturedProductsSection />
      <MenWomenShopSection />
      {
        //Todo: seccion de categorías: urbanas, deportivas, de gala, casuales, etc.
        //Todo:seccion con chamuyo para plantar arboles, por cada compra.
        //Todo:seccion con reseñas de clientes.
      }
      {/* <div>{loading ? "Cargando..." : JSON.stringify(products)}</div> */}
    </Grid>
  );
};

export default Home;
