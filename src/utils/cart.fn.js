import { Axios } from "./axios";
const API_URL = "cart"
const createCartQuery = async () => {
    try {
        const response = await Axios.get(`/${API_URL}/`);
        return response;
    } catch (error) {
        console.error("Can't create cart")
    }
};
const fetchCartQuery = async () => {
    try {
        const response = await Axios.get(`/${API_URL}/items`);
        return response.data;
    } catch (error) {
        console.error("Couldn't Get Cart")
    }
};

const addItemToCartQuery = async ({ productId, quantity }) => {
    try {
        const response = await Axios.post(`/${API_URL}/add`, { productId, quantity });
        return response.data;
    } catch (error) {
        console.error("Couldn't Add To Cart")
    }
};
const updateItemQuantityQuery = async ({ productId, update }) => {
    try {
        const response = await Axios.post(`/${API_URL}/update`, { productId, update });
        return response.data;
    } catch (error) {
        console.error("Couldn't Update Cart")
    }
};
const removeItemFromCartQuery = async ({ productId }) => {
    try {
        const response = await Axios.post(`/${API_URL}/remove`, { productId });
        return response.data;
    } catch (error) {
        console.error("Couldn't Remove Item Cart")
    }
};



const clearCartQuery = async () => {
    try {
        const response = await Axios.post(`/${API_URL}/clear`);
        return response.data;
    } catch (error) {
        console.error("Couldn't Clear Cart")
    }
};
export { clearCartQuery, createCartQuery, fetchCartQuery, addItemToCartQuery, removeItemFromCartQuery, updateItemQuantityQuery }