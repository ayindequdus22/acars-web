import { Axios } from "./axios";
const API_URL = "cart"
const createCartQuery = async () => {
    try {
        const response = await Axios.get(`/${API_URL}/`);
        return response;
    } catch (error) {
        // console.log(error)
    }
};
const fetchCartQuery = async () => {
    try {
        const response = await Axios.get(`/${API_URL}/items`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error)
    }
};

const addItemToCartQuery = async ({ productId, quantity }) => {
    try {
        const response = await Axios.post(`/${API_URL}/add`, { productId, quantity });
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error)
    }
};

const removeItemFromCartQuery = async ({ productId }) => {
    try {
        const response = await Axios.post(`/${API_URL}/remove`, { productId });
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error)
    }
};

const updateItemQuantityQuery = async ({ productId, quantity }) => {
    try {
        const response = await Axios.post(`/${API_URL}/update`, { productId, quantity });
        return response.data;
    } catch (error) {
        console.log(error)
    }
};

const clearCartQuery = async () => {
    try {
        const response = await Axios.post(`/${API_URL}/clear`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
};
export { clearCartQuery, createCartQuery, fetchCartQuery, addItemToCartQuery, removeItemFromCartQuery, updateItemQuantityQuery }