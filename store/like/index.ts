import { create } from "zustand";
import http from "@/api/interseptor";
import { message } from "antd";

const useLikeStore = create(() => ({
  postLike: async (data:any) => {
    try {
      const response = await http.post(`/likes/create` , data);
      if (response.status === 201) {
        message.success("Liked")
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  },
  getLike : async(id:any) =>{
    try {
      const response = await http.get(`/likes/user/likes/${id}`);
      if (response.status === 200) {
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  }
}));

export default useLikeStore;
