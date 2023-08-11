import { Routes, Route } from "react-router-dom";
import { IChildrenProp } from "../../types";

export const RoutesWithNotFoundLayout: React.FC<IChildrenProp> = ({
  children,
}: IChildrenProp) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};
