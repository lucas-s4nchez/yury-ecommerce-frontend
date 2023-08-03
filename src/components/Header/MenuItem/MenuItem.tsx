import { NavLink as RouterLink } from "react-router-dom";
import { Link, Typography } from "@mui/material";

interface IMenuItemProps {
  children: JSX.Element[] | JSX.Element;
  redirectTo: string;
  text: string;
}

export const MenuItem: React.FC<IMenuItemProps> = ({
  children,
  redirectTo,
  text,
}: IMenuItemProps) => {
  return (
    <Link
      to={redirectTo}
      component={RouterLink}
      sx={{
        padding: "8px 16px",
        minWidth: "100%",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        gap: 1,
        width: "100%",
        color: "white",
        "&.active": {
          color: "secondary.main",
          backgroundColor: "action.selected",
        },
      }}
    >
      {children}
      <Typography
        sx={{
          width: "100%",
          textAlign: "start",
          textTransform: "none",
          display: "flex",
          alignItems: "center",
        }}
      >
        {text}
      </Typography>
    </Link>
  );
};
