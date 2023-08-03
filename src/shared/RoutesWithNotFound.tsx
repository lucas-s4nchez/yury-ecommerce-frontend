import { Routes, Route } from "react-router-dom";
import { IChildrenProp } from "../types";

const RoutesWithNotFound: React.FC<IChildrenProp> = ({
  children,
}: IChildrenProp) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};
export default RoutesWithNotFound;
