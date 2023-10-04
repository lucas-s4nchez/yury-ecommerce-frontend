import axios from "axios";

export const loginUser = async (
  url: string,
  { arg }: { arg: { email: string; password: string } }
) => await axios.post(url, arg).then((res) => res.data);

export const refreshToken = async (url: string) =>
  await axios.get(url).then((res) => res.data);

export const getUserInfo = async (url: string) =>
  await axios.get(url).then((res) => res.data);
