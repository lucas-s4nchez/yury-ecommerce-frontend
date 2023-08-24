import {
  Container,
  Grid,
  Pagination,
  Box,
  Alert,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { ProductCard, ProductSkeleton } from "..";
import { OrderType } from "../../models";

interface ICollectionLayoutProps {
  collection: Array<any>;
  loading: boolean;
  count: number;
  page: number;
  order: OrderType;
  handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
  handleChangeOrder: (event: SelectChangeEvent) => void;
}

export const CollectionLayout: React.FC<ICollectionLayoutProps> = ({
  collection,
  loading,
  count,
  page,
  order,
  handleChangePage,
  handleChangeOrder,
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
        <Box sx={{ minWidth: 120, alignSelf: "end", marginBottom: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="order-select-label">Ordenar</InputLabel>
            <Select
              labelId="order-select-label"
              id="order-select"
              value={order}
              label="Ordernar"
              onChange={handleChangeOrder}
            >
              <MenuItem value={OrderType.ASC}>A-Z</MenuItem>
              <MenuItem value={OrderType.DESC}>Z-A</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {loading ? (
          <ProductSkeleton />
        ) : collection.length >= 1 ? (
          <>
            <Grid container marginBottom={3} spacing={2}>
              {collection?.map((product: any) => (
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
            <Typography>No hay productos disponibles por el momento</Typography>
          </Alert>
        )}
      </Box>
    </Container>
  );
};
