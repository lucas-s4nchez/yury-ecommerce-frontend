import { useState } from "react";
import { Container, Pagination, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { ProductCard } from "../../components";
import { useAsync, useFetchAndLoad } from "../../hooks";
import { getProducts } from "../../services/products.service";
import { createProductAdapter } from "../../adapters";

export const Collections: React.FC = () => {
  const [products, setProducts] = useState({} as any);
  const { loading, callEndpoint } = useFetchAndLoad();
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  const getApiData = async () => {
    const result = await callEndpoint(getProducts(page));
    return result;
  };

  const adaptProducts = (data: any) => {
    const formattedProducts = data.data.products.map((product: any) =>
      createProductAdapter(product)
    );
    setProducts(formattedProducts);
    setCount(data.data.totalPages);
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  useAsync(getApiData, adaptProducts, () => {}, [page]);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBlock: 5,
        }}
      >
        {loading ? (
          <h1>Cargando...</h1>
        ) : (
          <Grid container marginBottom={3} spacing={2}>
            {products.length &&
              products?.map((product: any) => (
                <Grid xs={12} sm={6} md={4} lg={3} key={product.id}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <ProductCard {...product} />
                  </Box>
                </Grid>
              ))}
          </Grid>
        )}
        <Pagination
          count={count}
          page={page}
          onChange={handleChangePage}
          variant="outlined"
          color="primary"
        />
      </Box>
    </Container>
  );
};
