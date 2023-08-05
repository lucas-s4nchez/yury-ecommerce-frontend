import { Theme, createTheme } from "@mui/material";

export const darkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#aeea00",
    },
    secondary: {
      main: "#aeea00",
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
