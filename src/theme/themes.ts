import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
        },
      },
    },
  },
});
