import { useState } from "react";
import { Container, Box, Grid, Pagination, Alert } from "@mui/material";

import { useAsync, useFetchAndLoad } from "../../../hooks";
import { getFeaturedProducts } from "../../../services";
import { createProductAdapter } from "../../../adapters";
import { ProductCard, ProductSkeleton } from "../../../components";

export const Featured: React.FC = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [featuredProducts, setFeaturedProducts] = useState([] as any);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  const getFeaturedProductsData = async () => {
    const result = await callEndpoint(getFeaturedProducts(page));
    return result;
  };

  const adaptFeaturedProducts = (data: any) => {
    if (data) {
      const formattedProducts = data.data.products.map((product: any) =>
        createProductAdapter(product)
      );
      setFeaturedProducts(formattedProducts);
      setCount(data.data.totalPages);
    }
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  useAsync(getFeaturedProductsData, adaptFeaturedProducts, () => {}, [page]);

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
          <ProductSkeleton />
        ) : featuredProducts.length >= 1 ? (
          <>
            <Grid container marginBottom={3} spacing={2}>
              {featuredProducts?.map((product: any) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <ProductCard {...product} />
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Pagination
              count={count}
              page={page}
              onChange={handleChangePage}
              variant="outlined"
              color="primary"
            />
          </>
        ) : (
          <Alert variant="filled" severity="info" sx={{ width: "100%" }}>
            No hay productos por el momento
          </Alert>
        )}
      </Box>
    </Container>
  );
};
