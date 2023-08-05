import { useState } from "react";
import { getProducts } from "../../services/products.service";
import { useAsync, useFetchAndLoad } from "../../hooks";
import { Box } from "@mui/material";

const Home: React.FC = () => {
  const [products, setProducts] = useState({} as any);
  const { loading, callEndpoint } = useFetchAndLoad();

  const getApiData = async () => await callEndpoint(getProducts());

  const adaptProducts = (data: any) => {
    setProducts(data.data.products);
  };

  useAsync(getApiData, adaptProducts, () => {});

  return (
    <>
      <Box sx={{ backgroundColor: "red" }}>Home Page</Box>
      <div>{loading ? "Cargando..." : JSON.stringify(products)}</div>
    </>
  );
};

export default Home;
