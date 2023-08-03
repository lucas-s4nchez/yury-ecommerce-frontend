import { Link as RouterLink } from "react-router-dom";
import { Drawer, Box, Divider, Typography, IconButton } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useAuthStore } from "../../../hooks";
import { AuthenticatedMenu, NotAuthenticatedMenu } from "../";

const drawerWidth = 280;

interface IMenuProps {
  window?: () => Window;
  openMenu: boolean;
  handleOpenMenu: () => void;
}

export const Menu: React.FC<IMenuProps> = (props: IMenuProps) => {
  const { window, openMenu, handleOpenMenu } = props;
  const { user, isAuthenticated, handleLogout } = useAuthStore();

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: openMenu ? "flex" : "none" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={openMenu}
          onClose={handleOpenMenu}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            "& .css-iur3w5-MuiPaper-root-MuiDrawer-paper": {
              backgroundImage: "none",
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 2,
                }}
              >
                <RouterLink to="/">
                  <Box sx={{ width: "120px", height: "100%", display: "flex" }}>
                    <img src="src/assets/logo.svg" width="100%" />
                  </Box>
                </RouterLink>
                <Box>
                  <IconButton
                    onClick={handleOpenMenu}
                    sx={{ color: "white.cream", padding: 1 }}
                  >
                    <CloseOutlinedIcon />
                  </IconButton>
                </Box>
              </Box>

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
              <AuthenticatedMenu
                handleOpenMenu={handleOpenMenu}
                handleLogout={handleLogout}
              />
            ) : (
              <NotAuthenticatedMenu handleOpenMenu={handleOpenMenu} />
            )}
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
};
