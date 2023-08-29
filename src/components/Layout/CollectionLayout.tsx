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
  useTheme,
  useMediaQuery,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Chip,
  Stack,
} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import CloseIcon from "@mui/icons-material/Close";

import { ProductCard, ProductSkeleton } from "..";
import { OrderType } from "../../models";
import { useState } from "react";
import { useFetchCategories, useFetchProducts } from "../../hooks";
import { getCategoryList } from "../../services";

interface ICollectionLayoutProps {
  axiosRequest: () => void;
}

export const CollectionLayout: React.FC<ICollectionLayoutProps> = ({
  axiosRequest,
}: ICollectionLayoutProps) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [openModal, setOpenModal] = useState(false);

  const {
    isLoadingProducts,
    products,
    currentProductPage,
    totalProductPages,
    productOrder,
    productBrand,
    productCategory,
    handleChangeCurrentProductPage,
    handleChangeProductOrder,
    handleChangeProductBrand,
    handleResetProductBrand,
    handleChangeProductCategory,
    handleResetProductCategory,
    handleResetAllProductFilters,
  } = useFetchProducts(axiosRequest);

  const { isLoadingCategories, categories } =
    useFetchCategories(getCategoryList);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
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
        {!isLoadingProducts && (
          <>
            <Box sx={{ minWidth: 120, alignSelf: "end" }}>
              <Button
                variant="contained"
                endIcon={<TuneIcon />}
                onClick={handleOpenModal}
              >
                Filtrar
              </Button>
            </Box>
            <Stack
              direction="row"
              flexWrap="wrap"
              gap={1}
              spacing={1}
              sx={{ width: "100%", marginBlock: 2 }}
            >
              {productBrand && (
                <Chip
                  label={productBrand}
                  color="default"
                  variant="filled"
                  onDelete={handleResetProductBrand}
                  sx={{ margin: 0 }}
                />
              )}
              {productCategory && (
                <Chip
                  label={productCategory}
                  color="default"
                  variant="filled"
                  onDelete={handleResetProductCategory}
                  sx={{ margin: 0 }}
                />
              )}
            </Stack>
          </>
        )}

        <Dialog
          fullScreen={fullScreen}
          scroll="paper"
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="filtros"
        >
          <DialogTitle marginBottom={2}>Filtrar por</DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
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
                value={productOrder}
                label="Ordernar por"
                onChange={handleChangeProductOrder}
                sx={{ minWidth: { sm: 350 } }}
              >
                <MenuItem value={OrderType.ASC}>Menor precio</MenuItem>
                <MenuItem value={OrderType.DESC}>Mayor precio</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ marginBlock: 1 }}>
              <InputLabel id="brand-select-label">Marcas</InputLabel>
              <Select
                labelId="brand-select-label"
                id="brand-select"
                value={productBrand}
                label="Marcas"
                onChange={handleChangeProductBrand}
                sx={{ minWidth: { sm: 350 } }}
              >
                <MenuItem value={"adidas"}>Adidas</MenuItem>
                <MenuItem value={"nike"}>Nike</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ marginBlock: 1 }}>
              <InputLabel id="category-select-label">Categorias</InputLabel>
              <Select
                labelId="category-select-label"
                id="category-select"
                value={productCategory}
                label="Categorias"
                onChange={handleChangeProductCategory}
                sx={{ minWidth: { sm: 350 } }}
              >
                {!isLoadingCategories &&
                  categories.map((category: any) => (
                    <MenuItem key={category.id} value={category.name}>
                      {category.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleResetAllProductFilters}
              autoFocus
              variant="contained"
            >
              Reiniciar filtros <RestartAltIcon />
            </Button>
          </DialogActions>
        </Dialog>

        {isLoadingProducts ? (
          <ProductSkeleton />
        ) : products.length >= 1 ? (
          <>
            <Grid container marginBottom={3} spacing={2}>
              {products?.map((product: any) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <ProductCard {...product} />
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Pagination
              count={totalProductPages}
              page={currentProductPage}
              onChange={handleChangeCurrentProductPage}
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
