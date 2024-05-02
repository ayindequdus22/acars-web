import axios from "axios";
// const token = localStorage.getItem('token');
export let Axios =  axios.create({baseURL:"http://localhost:7000",withCredentials:true,})