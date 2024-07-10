import Cookies from "js-cookie";

export const saveCategory = (category: string) => {
  Cookies.set("CategoryId", category);
};
export const getCategory = () => {
  return Cookies.get("CategoryId");
};
