import Cookies from "js-cookie";

export const saveCount = (count: string) => {
  Cookies.set("count", count);
};
export const getCount = () => {
  return Cookies.get("count");
};
