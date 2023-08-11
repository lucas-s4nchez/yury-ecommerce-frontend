import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Divider,
  Typography,
  IconButton,
  Grid,
  SwipeableDrawer,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useAuthStore, useUiStore } from "../../../hooks";
import { AuthenticatedMenu, NotAuthenticatedMenu } from "../";

const drawerWidth = 280;

interface IMenuProps {
  window?: () => Window;
}

export const Menu: React.FC<IMenuProps> = (props: IMenuProps) => {
  const { window } = props;
  const { user, isAuthenticated, handleLogout } = useAuthStore();
  const { isOpenMenu, handleCloseMenu, handleOpenMenu } = useUiStore();

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: isOpenMenu ? "flex" : "none" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <SwipeableDrawer
          container={container}
          anchor="right"
          open={isOpenMenu}
          transitionDuration={300}
          onOpen={handleOpenMenu}
          onClose={handleCloseMenu}
          disableBackdropTransition={true}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box>
            <Box
              sx={{
                height: "auto",
                padding: "12px",
              }}
            >
              <Grid
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                marginBottom={2}
              >
                <RouterLink to="/">
                  <Box sx={{ width: "120px", height: "100%", display: "flex" }}>
                    <img src="src/assets/logo.svg" width="100%" />
                  </Box>
                </RouterLink>
                <Box>
                  <IconButton
                    onClick={handleCloseMenu}
                    sx={{ color: "white.cream", padding: 1 }}
                  >
                    <CloseOutlinedIcon />
                  </IconButton>
                </Box>
              </Grid>

              {isAuthenticated ? (
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    <AccountCircleOutlinedIcon sx={{ fontSize: "56px" }} />
                  </Box>
                  <Box>
                    <Typography>Bienvenid@,</Typography>
                    <Typography sx={{ fontSize: "20px" }}>
                      {!!user && `${user.name}`}
                    </Typography>
                  </Box>
                </Box>
              ) : (
                <Typography sx={{ fontSize: "14px" }}>
                  Ingresá a tu cuenta para ver tus compras, favoritos, etc.
                </Typography>
              )}
            </Box>
            <Divider />
            {isAuthenticated ? (
              <AuthenticatedMenu handleLogout={handleLogout} />
            ) : (
              <NotAuthenticatedMenu />
            )}
          </Box>
        </SwipeableDrawer>
      </Box>
    </Box>
  );
};
