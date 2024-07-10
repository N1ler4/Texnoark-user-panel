import { create } from "zustand";
import http from "../../api/interseptor";
import { request_category } from "@/interfaces/categories";
import { message } from "antd";

const useCategoryStore = create <request_category> ((set) => ({
    categories: [],
    getCategories: async () => {
        try{
            const response = await http.get("/category/search");
            set({ categories: response?.data?.data?.categories});
        }catch(err){
            message.error(`${err}`);
        }
    },
    getCategoryById: async (id) => {
        try{
            const response = await http.get(`/category/${id}`);
            set({ categories: response?.data?.data?.categories});
        }catch(err){
            message.error(`${err}`);
        }
    },
}));




export default useCategoryStore;