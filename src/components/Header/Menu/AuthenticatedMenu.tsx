import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { MenuItem } from "../";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MaleOutlinedIcon from "@mui/icons-material/MaleOutlined";
import FemaleOutlinedIcon from "@mui/icons-material/FemaleOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useUiStore } from "../../../hooks";

interface IAuthenticatedMenuProps {
  handleLogout: () => void;
}

export const AuthenticatedMenu: React.FC<IAuthenticatedMenuProps> = ({
  handleLogout,
}: IAuthenticatedMenuProps) => {
  const { handleCloseMenu } = useUiStore();

  return (
    <List>
      <ListItem
        sx={{
          padding: 0,
          width: "90%",
          margin: "auto",
        }}
      >
        <ListItemButton
          sx={{ padding: 0, justifyContent: "center", borderRadius: 2 }}
          onClick={handleCloseMenu}
        >
          <MenuItem redirectTo={"/home"} text="Inicio">
            <HomeOutlinedIcon sx={{ fontSize: 30 }} />
          </MenuItem>
        </ListItemButton>
      </ListItem>

      <ListItem
        sx={{
          padding: 0,
          width: "90%",
          margin: "auto",
        }}
      >
        <ListItemButton
          sx={{ padding: 0, justifyContent: "center", borderRadius: 2 }}
          onClick={handleCloseMenu}
        >
          <MenuItem redirectTo={"collections/men"} text="Hombres">
            <MaleOutlinedIcon sx={{ fontSize: 30 }} />
          </MenuItem>
        </ListItemButton>
      </ListItem>

      <ListItem
        sx={{
          padding: 0,
          width: "90%",
          margin: "auto",
        }}
      >
        <ListItemButton
          sx={{ padding: 0, justifyContent: "center", borderRadius: 2 }}
          onClick={handleCloseMenu}
        >
          <MenuItem redirectTo={"collections/women"} text="Mujeres">
            <FemaleOutlinedIcon sx={{ fontSize: 30 }} />
          </MenuItem>
        </ListItemButton>
      </ListItem>

      <ListItem
        sx={{
          padding: 0,
          width: "90%",
          margin: "auto",
        }}
      >
        <ListItemButton
          sx={{ padding: 0, justifyContent: "center", borderRadius: 2 }}
          onClick={handleCloseMenu}
        >
          <MenuItem redirectTo={"collections/featured"} text="Destacados">
            <StarBorderOutlinedIcon sx={{ fontSize: 30 }} />
          </MenuItem>
        </ListItemButton>
      </ListItem>

      <ListItem
        sx={{
          padding: 0,
          width: "90%",
          margin: "auto",
        }}
      >
        <ListItemButton
          sx={{ padding: 0, justifyContent: "center", borderRadius: 2 }}
          onClick={handleCloseMenu}
        >
          <MenuItem redirectTo={"/favorites"} text="Favoritos">
            <FavoriteBorderOutlinedIcon sx={{ fontSize: 30 }} />
          </MenuItem>
        </ListItemButton>
      </ListItem>

      <ListItem
        sx={{
          padding: 0,
          width: "90%",
          margin: "auto",
        }}
      >
        <ListItemButton
          sx={{ padding: 0, justifyContent: "center", borderRadius: 2 }}
          onClick={handleCloseMenu}
        >
          <MenuItem redirectTo={"/purchases"} text="Mis compras">
            <ShoppingBagOutlinedIcon sx={{ fontSize: 30 }} />
          </MenuItem>
        </ListItemButton>
      </ListItem>

      <ListItem
        sx={{
          padding: 0,
          width: "90%",
          margin: "auto",
        }}
      >
        <ListItemButton
          sx={{ padding: 0, justifyContent: "center", borderRadius: 2 }}
          onClick={handleCloseMenu}
        >
          <MenuItem redirectTo={"/account"} text="Mi cuenta">
            <ManageAccountsOutlinedIcon sx={{ fontSize: 30 }} />
          </MenuItem>
        </ListItemButton>
      </ListItem>

      <Toolbar />
      <Divider sx={{ marginBottom: 2 }} />
      <ListItem
        sx={{
          padding: 0,
          width: "90%",
          margin: "auto",
        }}
      >
        <ListItemButton
          sx={{
            gap: "20px",
            justifyContent: "center",
            borderRadius: 2,
            padding: "8px 16px",
          }}
          onClick={() => {
            handleCloseMenu();
            handleLogout();
          }}
        >
          <LogoutOutlinedIcon sx={{ fontSize: 30 }} />
          <Typography
            sx={{
              width: "100%",
              textAlign: "start",
              textTransform: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            Salir
          </Typography>
        </ListItemButton>
      </ListItem>
    </List>
  );
};
