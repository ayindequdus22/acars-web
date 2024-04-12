import React from 'react'
import Body from '../../components/body/Body'
import Overview from '../../components/overview/Overview'
import { Engineer } from '../../components/engineer/Engineer'
import axios from 'axios'
const Home = () => {
//   async function registerUser() {
//     try {
//         const response = await axios.post('http://localhost:7000/auth/login', {

//             email: "skola",
//             password: "oojoe"
//         });
//         console.log(response.data);
//     } catch (error) {
//         console.log('Failed to register user:', error.response?.data.error);
//     }
// }

// registerUser();
  return (
    <>
      <Body />
      <Overview />
      <Engineer/>
    </>)
}

export default Home