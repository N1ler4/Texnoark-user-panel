import Cookies from "js-cookie";

export const saveAbout = (about: string) => {
  Cookies.set("aboutus", about);
};
export const getAbout = () => {
  return Cookies.get("aboutus");
};
