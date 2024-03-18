import axios from "axios";

const url=import.meta.env.VITE_REACT_APP_API_URL;
const token=import.meta.env.VITE_REACT_APP_API_TOKEN;

axios.defaults.headers={"Authorization":`Bearer ${token}`}

const createAPI=axios.create({baseURL:url});

// const config={
//     "Authorization":`Bearer ${token}`
// }

export const GET_PRODUCTS_API=async ()=>{
    const response=await createAPI.get("products");
    return response;
}
export const GET_COLORS_API=async ()=>{
    const response=await createAPI.get("colors");
    return response;
}
export const GET_MATERIAL_API=async ()=>{
    const response=await createAPI.get("material");
    return response;
}
export const GET_FEATURED_API=async ()=>{
    const response=await createAPI.get("featured");
    return response;
}