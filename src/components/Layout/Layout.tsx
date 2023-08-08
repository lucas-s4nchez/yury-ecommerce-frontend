import { Toolbar } from "@mui/material";
import { IChildrenProp } from "../../types";
import { Header } from "../";

export const Layout: React.FC<IChildrenProp> = ({
  children,
}: IChildrenProp) => {
  return (
    <>
      <Header />
      <Toolbar />
      {children}
    </>
  );
};
