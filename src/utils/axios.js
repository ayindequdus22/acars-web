import axios from "axios";
export let Axios =  axios.create({baseURL:"http://localhost:7000",withCredentials:true})