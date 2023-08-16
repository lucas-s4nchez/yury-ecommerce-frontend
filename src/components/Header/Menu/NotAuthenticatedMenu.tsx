import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
} from "@mui/material";
import { MenuItem } from "../";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MaleOutlinedIcon from "@mui/icons-material/MaleOutlined";
import FemaleOutlinedIcon from "@mui/icons-material/FemaleOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import { useUiStore } from "../../../hooks";

export const NotAuthenticatedMenu: React.FC = () => {
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
          <MenuItem redirectTo={"/men"} text="Hombres">
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
          <MenuItem redirectTo={"/women"} text="Mujeres">
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
          <MenuItem redirectTo={"/featured"} text="Destacados">
            <StarBorderOutlinedIcon sx={{ fontSize: 30 }} />
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
          sx={{ padding: 0, justifyContent: "center", borderRadius: 2 }}
          onClick={handleCloseMenu}
        >
          <MenuItem redirectTo={"/auth/login"} text="Ingresá">
            <LoginOutlinedIcon sx={{ fontSize: 30 }} />
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
          <MenuItem redirectTo={"/auth/register"} text="Resgístrate">
            <PersonAddAltOutlinedIcon sx={{ fontSize: 30 }} />
          </MenuItem>
        </ListItemButton>
      </ListItem>
    </List>
  );
};
