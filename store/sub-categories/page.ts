import { create } from "zustand";
import http from "../../api/interseptor";
import { request_subcategory } from "@/interfaces/sub-categories";
import { message } from "antd";

const useSubCategoryStore = create<request_subcategory>((set) => ({
  subcategories: [],
  getSubCategories: async (id) => {
    try {
      const response = await http.get(`/sub-category/search/${id}`);
      if (response.status === 200) {
        return response;
      }
    } catch (err) {
      message.error(`${err}`);
    }
  },
  getSubCategoryById: async (id) => {
    try {
      const response = await http.get(`/sub-category/${id}`);
      if (response.status === 200) {
        return response;
      }
    } catch (err) {
      message.error(`${err}`);
    }
  },
}));

export default useSubCategoryStore;
