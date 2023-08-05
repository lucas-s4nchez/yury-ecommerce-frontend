import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Badge,
  IconButton,
  Link,
  Toolbar,
  Container,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Menu } from "../";

export const Header: React.FC = () => {
  // const { totalItemsInCart } = useSelector((state) => state.user);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = (): void => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Toolbar sx={{ width: "100%", padding: { xs: 0 } }}>
            <Container
              maxWidth="lg"
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <RouterLink to="/">
                <Box sx={{ width: "120px", height: "100%", display: "flex" }}>
                  <img src="src/assets/logo.svg" width="100%" />
                </Box>
              </RouterLink>
              <Grid display="flex" alignItems="center">
                <Link component={RouterLink} to="/search" color="inherit">
                  <IconButton
                    size="large"
                    color="inherit"
                    aria-label="Buscar un producto"
                    sx={{ padding: { xs: "5px", sm: "12px" } }}
                  >
                    <SearchIcon />
                  </IconButton>
                </Link>

                <Link component={RouterLink} to="/cart" color="inherit">
                  <IconButton
                    size="large"
                    aria-label="Ir al carrito"
                    color="inherit"
                    sx={{ padding: { xs: "5px", sm: "12px" } }}
                  >
                    <Badge badgeContent={4} color="error">
                      <ShoppingBagIcon />
                    </Badge>
                  </IconButton>
                </Link>
                <IconButton
                  size="large"
                  color="inherit"
                  aria-label="Abrir Menú"
                  onClick={handleOpenMenu}
                  sx={{ padding: { xs: "5px", sm: "12px" } }}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
      <Menu openMenu={openMenu} handleOpenMenu={handleOpenMenu} />
    </>
  );
};
