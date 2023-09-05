import { useState } from "react";
import {
  Container,
  Grid,
  Pagination,
  Box,
  Alert,
  Typography,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";

import { ModalWithFilters } from "./";
import { ProductSkeleton } from "..";
import { useFetchProducts } from "../../hooks";
import { formatPrice } from "../../helpers";
import { LargeProductCard } from "../ProductCards/LargeProductCard";

interface IFilterableProductListProps {
  axiosRequest: () => void;
}

export const FilterableProductList: React.FC<IFilterableProductListProps> = ({
  axiosRequest,
}: IFilterableProductListProps) => {
  const [openModal, setOpenModal] = useState(false);

  const {
    isLoadingProducts,
    products,
    currentProductPage,
    totalProductPages,
    totalProducts,
    productOrder,
    productBrand,
    productCategory,
    productColor,
    productSize,
    minPrice,
    maxPrice,
    handleChangeCurrentProductPage,
    handleChangeProductOrder,
    handleChangeProductBrand,
    handleResetProductBrand,
    handleChangeProductCategory,
    handleResetProductCategory,
    handleChangeProductColor,
    handleResetProductColor,
    handleChangeProductSize,
    handleResetProductSize,
    handleChangeMinPrice,
    handleResetMinPrice,
    handleChangeMaxPrice,
    handleResetMaxPrice,
    handleResetAllProductFilters,
  } = useFetchProducts(axiosRequest);

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
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography fontSize={14}>{totalProducts} resultados</Typography>
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
              {productColor && (
                <Chip
                  label={productColor}
                  color="default"
                  variant="filled"
                  onDelete={handleResetProductColor}
                  sx={{ margin: 0 }}
                />
              )}
              {productSize && (
                <Chip
                  label={`Talle ${productSize}`}
                  color="default"
                  variant="filled"
                  onDelete={handleResetProductSize}
                  sx={{ margin: 0 }}
                />
              )}
              {minPrice && (
                <Chip
                  label={`Desde ${formatPrice(Number(minPrice))}`}
                  color="default"
                  variant="filled"
                  onDelete={handleResetMinPrice}
                  sx={{ margin: 0 }}
                />
              )}
              {maxPrice && (
                <Chip
                  label={`Hasta ${formatPrice(Number(maxPrice))}`}
                  color="default"
                  variant="filled"
                  onDelete={handleResetMaxPrice}
                  sx={{ margin: 0 }}
                />
              )}
            </Stack>
          </>
        )}

        <ModalWithFilters
          openModal={openModal}
          productOrder={productOrder}
          productBrand={productBrand}
          productCategory={productCategory}
          productColor={productColor}
          productSize={productSize}
          minPrice={minPrice}
          maxPrice={maxPrice}
          handleCloseModal={handleCloseModal}
          handleChangeProductOrder={handleChangeProductOrder}
          handleChangeProductBrand={handleChangeProductBrand}
          handleChangeProductCategory={handleChangeProductCategory}
          handleChangeProductColor={handleChangeProductColor}
          handleChangeProductSize={handleChangeProductSize}
          handleChangeMinPrice={handleChangeMinPrice}
          handleChangeMaxPrice={handleChangeMaxPrice}
          handleResetAllProductFilters={handleResetAllProductFilters}
        />

        {isLoadingProducts ? (
          <ProductSkeleton />
        ) : products.length >= 1 ? (
          <>
            <Grid container marginBottom={3} spacing={2} direction="column">
              {products?.map((product: any) => (
                <Grid item key={product.id}>
                  <LargeProductCard {...product} />
                </Grid>
              ))}
            </Grid>
            <Pagination
              count={totalProductPages}
              siblingCount={0}
              boundaryCount={1}
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
