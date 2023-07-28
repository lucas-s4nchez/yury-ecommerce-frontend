import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { darkTheme } from "./themes";

type ThemeProp = {
  children: JSX.Element;
};

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
