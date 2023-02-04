import axios from 'axios';

const API = axios.create({
    baseURL : "https://fakestoreapi.com"
})

export const getAllProducts = ()=>API.get("/products");
export const caraouselProductsApi = ()=>API.get("/products?limit=5");
export const getAllCategoriesApi = ()=>API.get("/products/categories");
export const getProductsByCategories = (category : string)=>API.get("products/category/" + category)