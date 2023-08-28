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
  useTheme,
  useMediaQuery,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import { ProductCard, ProductSkeleton } from "..";
import { OrderType } from "../../models";
import { useState } from "react";

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
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <Button
          variant="contained"
          endIcon={<TuneIcon />}
          onClick={handleClickOpen}
        >
          Filtrar
        </Button>
        <Dialog
          fullScreen={fullScreen}
          scroll="paper"
          open={open}
          onClose={handleClose}
          aria-labelledby="filtros"
        >
          <DialogTitle marginBottom={2}>Filtrar por</DialogTitle>
          <DialogContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <FormControl fullWidth sx={{ marginBlock: 1 }}>
              <InputLabel id="order-select-label">Ordenar por:</InputLabel>
              <Select
                labelId="order-select-label"
                id="order-select"
                value={order}
                label="Ordernar por"
                onChange={handleChangeOrder}
                sx={{ minWidth: { sm: 350 } }}
              >
                <MenuItem value={OrderType.ASC}>Menor precio</MenuItem>
                <MenuItem value={OrderType.DESC}>Mayor precio</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Disagree
            </Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
        {loading ? (
          <ProductSkeleton />
        ) : collection.length >= 1 ? (
          <>
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
