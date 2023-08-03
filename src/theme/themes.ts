import { Theme, createTheme } from "@mui/material";

export const darkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f48fb1",
    },
    secondary: {
      main: "#f48fb1",
    },
    error: {
      main: "#d32f2f",
    },
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
    MuiAppBar: {
      defaultProps: {
        style: {
          backgroundImage: "none",
        },
      },
    },
  },
});
