import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { darkTheme } from "./themes";
import { IChildrenProp } from "../types";

export const ThemeConfig: React.FC<IChildrenProp> = ({
  children,
}: IChildrenProp) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
