import { create } from "zustand";
import http from "@/api/interseptor";
import { message } from "antd";

const useCommentStore = create(() => ({
  getComments: async (id: any) => {
    try {
      const response = await http.get(`/comment/product/${id}`);
      if (response.status === 200) {
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  },
  postComment: async (data: any) => {
    try {
      const response = await http.post(`/comment/create`, data);
      if (response.status === 201) {
        return response;
      }
    } catch (err) {
      message.error(`${err}`);
    }
  },
}));

export default useCommentStore;
