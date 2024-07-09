import { create } from "zustand";
import http from "@/api/interseptor";

const useProductStore = create(() => ({
  getProduct: async (search:any , limit:any , page:any) => {
    try {
      const response = await http.get(`/products/search?search=${search}&limit=${limit}&page=${page}`);
      if (response.status === 200) {
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  },
  getSingleProduct:async(id:any)=>{
    try {
      const response = await http.get(`/products/${id}`);
      if (response.status === 200) {
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  }
}));

export default useProductStore;
