import useSWR from "swr";
import { getUserInfo } from "../../services";
const Cart: React.FC = () => {
  const { isLoading, data } = useSWR(
    "http://localhost:8080/api/auth/myInfo",
    getUserInfo
  );
  return <div>Cart Page</div>;
};

export default Cart;
