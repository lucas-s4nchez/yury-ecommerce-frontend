import { User } from "../models";

export const createUserAdapter = (user: any) => {
  const formattedUser: User = {
    id: user.id,
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    role: user.role,
    province: user.province,
    city: user.city,
    address: user.address,
    dni: user.dni,
    phone: user.phone,
  };
  return formattedUser;
};
