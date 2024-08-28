import axios from "axios";
export let Axios =  axios.create({baseURL:import.meta.env.VITE_API_URL,withCredentials:true,})