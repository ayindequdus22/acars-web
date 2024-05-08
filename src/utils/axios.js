import axios from "axios";
// const token = localStorage.getItem('token');  ,"http://localhost:7000"
export let Axios =  axios.create({baseURL:process.env.REACT_APP_API_URL,withCredentials:true,})