import {
  Container,
  Grid,
  Pagination,
  Box,
  Alert,
  Typography,
} from "@mui/material";
import { ProductCard, ProductSkeleton } from "..";

interface ICollectionLayoutProps {
  collection: Array<any>;
  loading: boolean;
  count: number;
  page: number;
  handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export const CollectionLayout: React.FC<ICollectionLayoutProps> = ({
  collection,
  loading,
  count,
  page,
  handleChangePage,
}: ICollectionLayoutProps) => {
  return (
    <Container maxWidth="lg" sx={{ minHeight: "50vh" }}>
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
        ) : collection.length >= 1 ? (
          <>
            <Grid container marginBottom={3} spacing={2}>
              {collection?.map((product: any) => (
                <Grid xs={12} sm={6} md={4} lg={3} key={product.id}>
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
            <Typography>No hay productos disponibles por el momento</Typography>
          </Alert>
        )}
      </Box>
    </Container>
  );
};
