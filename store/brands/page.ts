import { create } from "zustand";
import http from "../../api/interseptor";
import { request_brands } from "@/interfaces/brands";
import { message } from "antd";

const useCategoryStore = create <request_brands>((set) => ({
    brands: [],
    getBrands: async () => {
        try{
            const response = await http.get("/category/search");
            set({ brands: response?.data?.data?.brands});
        }catch(err){
            message.error(`${err}`);
        }
    },
    getBrandsId: async (id) => {
        try{
            const response = await http.get(`/category/${id}`);
            set({ brands: response?.data?.data?.brands});
        }catch(err){
            message.error(`${err}`);
        }
    },
}));




export default useCategoryStore;