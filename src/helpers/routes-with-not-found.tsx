import { Routes, Route } from "react-router-dom";

type PropsType = {
  children: JSX.Element[] | JSX.Element;
};
const RoutesWithNotFound: React.FC<PropsType> = ({ children }: PropsType) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};
export default RoutesWithNotFound;
