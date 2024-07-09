import { create } from "zustand";
import http from "@/api/interseptor";
import { message } from "antd";

const useCartStore = create(() => ({
  getCart: async (id: any) => {
    try {
      const response = await http.get(`/carts/user/${id}`);
      if (response.status === 200) {
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  },
  postCart: async (data: any) => {
    try {
      const response = await http.post(`/carts/create`, data);
      if (response.status === 201) {
        message.success("Added to cart")
        return response;
      }
    } catch (err) {
      message.error(`${err}`);
    }
  },
  deleteCart: async (id: any) => {
    try {
      const response = await http.delete(`/carts/delete/${id}`);
      if (response.status === 200) {
        window.location.reload()
        return response;
      }
    } catch (err) {
      message.error(`${err}`);
    }
  },
}));

export default useCartStore;
