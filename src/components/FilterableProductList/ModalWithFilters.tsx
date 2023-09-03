import {
  Box,
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
  SelectChangeEvent,
} from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import CloseIcon from "@mui/icons-material/Close";

import {
  useFetchBrands,
  useFetchCategories,
  useFetchColors,
  useFetchSizes,
} from "../../hooks";
import {
  getBrandList,
  getCategoryList,
  getColorList,
  getSizeList,
} from "../../services";
import { OrderType } from "../../models";
import { formatPrice } from "../../helpers";

interface IModalWithFiltersProps {
  openModal: boolean;
  productOrder: OrderType;
  productBrand: string;
  productCategory: string;
  productColor: string;
  productSize: string;
  minPrice: string;
  maxPrice: string;
  handleCloseModal: () => void;
  handleChangeProductOrder: (event: SelectChangeEvent) => void;
  handleChangeProductBrand: (event: SelectChangeEvent) => void;
  handleChangeProductCategory: (event: SelectChangeEvent) => void;
  handleChangeProductColor: (event: SelectChangeEvent) => void;
  handleChangeProductSize: (event: SelectChangeEvent) => void;
  handleChangeMinPrice: (event: SelectChangeEvent) => void;
  handleChangeMaxPrice: (event: SelectChangeEvent) => void;
  handleResetAllProductFilters: () => void;
}

const minPrices = ["10000", "20000", "35000", "50000", "70000", "100000"];
const maxPrices = ["40000", "60000", "80000", "100000", "120000", "150000"];

export const ModalWithFilters: React.FC<IModalWithFiltersProps> = (
  props: IModalWithFiltersProps
) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const { isLoadingCategories, categories } =
    useFetchCategories(getCategoryList);
  const { isLoadingBrands, brands } = useFetchBrands(getBrandList);
  const { isLoadingColors, colors } = useFetchColors(getColorList);
  const { isLoadingSizes, sizes } = useFetchSizes(getSizeList);

  return (
    <Dialog
      fullScreen={fullScreen}
      scroll="paper"
      open={props.openModal}
      onClose={props.handleCloseModal}
      aria-labelledby="filtros"
    >
      <DialogTitle marginBottom={2}>Filtrar por</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={props.handleCloseModal}
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
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "GrayText",
            borderRadius: 50,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "primary.main",
            borderRadius: 50,
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "primary.dark",
          },
        }}
      >
        <FormControl fullWidth sx={{ marginBlock: 1 }}>
          <InputLabel id="order-select-label">Ordenar por:</InputLabel>
          <Select
            labelId="order-select-label"
            id="order-select"
            value={props.productOrder}
            label="Ordernar por"
            onChange={props.handleChangeProductOrder}
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
            value={props.productBrand}
            label="Marcas"
            onChange={props.handleChangeProductBrand}
            sx={{ minWidth: { sm: 350 } }}
          >
            {!isLoadingBrands &&
              brands.map((brand: any) => (
                <MenuItem key={brand.id} value={brand.name}>
                  {brand.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ marginBlock: 1 }}>
          <InputLabel id="category-select-label">Categorias</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={props.productCategory}
            label="Categorias"
            onChange={props.handleChangeProductCategory}
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

        <FormControl fullWidth sx={{ marginBlock: 1 }}>
          <InputLabel id="color-select-label">Color</InputLabel>
          <Select
            labelId="color-select-label"
            id="color-select"
            value={props.productColor}
            label="Color"
            onChange={props.handleChangeProductColor}
            sx={{ minWidth: { sm: 350 } }}
          >
            {!isLoadingColors &&
              colors.map((color: any) => (
                <MenuItem key={color.id} value={color.name}>
                  <Typography sx={{ textTransform: "capitalize" }}>
                    {color.name}
                  </Typography>
                  <Box
                    sx={{
                      width: "20px",
                      height: "20px",
                      bgcolor: `${color.hexCode}`,
                      borderRadius: 100,
                      marginLeft: 1,
                    }}
                  ></Box>
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ marginBlock: 1 }}>
          <InputLabel id="size-select-label">Talles</InputLabel>
          <Select
            labelId="size-select-label"
            id="size-select"
            value={props.productSize}
            label="Talles"
            onChange={props.handleChangeProductSize}
            sx={{ minWidth: { sm: 350 } }}
          >
            {!isLoadingSizes &&
              sizes.map((size: any) => (
                <MenuItem key={size.id} value={size.number}>
                  {size.number}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ marginBlock: 1 }}>
          <InputLabel id="min-price-select-label">Precio mínimo</InputLabel>
          <Select
            labelId="min-price-select-label"
            id="min-price-select"
            value={props.minPrice}
            label="Precio mínimo"
            onChange={props.handleChangeMinPrice}
            sx={{ minWidth: { sm: 350 } }}
          >
            {minPrices.map((price, index) => (
              <MenuItem key={index} value={price}>
                {formatPrice(Number(price))}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ marginBlock: 1 }}>
          <InputLabel id="max-price-select-label">Precio máximo</InputLabel>
          <Select
            labelId="max-price-select-label"
            id="max-price-select"
            value={props.maxPrice}
            label="Precio máximo"
            onChange={props.handleChangeMaxPrice}
            sx={{ minWidth: { sm: 350 } }}
          >
            {maxPrices.map((price, index) => (
              <MenuItem key={index} value={price}>
                {formatPrice(Number(price))}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={props.handleResetAllProductFilters}
          autoFocus
          variant="contained"
          endIcon={<RestartAltIcon />}
        >
          Reiniciar filtros
        </Button>
      </DialogActions>
    </Dialog>
  );
};
