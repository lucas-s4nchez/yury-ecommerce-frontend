import axios from "axios";
import { loadAbortAxios } from "../helpers";

// export const loginUser = ({ email, password }) => {
//   const controller = loadAbortAxios();
//   return {
//     call: axios.post(
//       `http://localhost:8080/api/auth/login`,
//       { email, password },
//       {
//         signal: controller.signal,
//       }
//     ),
//     controller,
//   };
// };

export const loginUserMutation = async (
  url: string,
  { arg }: { arg: { email: string; password: string } }
) => {
  await axios.post(url, arg).then((res) => res.data);
};
