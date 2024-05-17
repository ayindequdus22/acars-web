import React from 'react'
import Body from '../../components/body/Body'
import Overview from '../../components/overview/Overview'
import { Engineer } from '../../components/engineer/Engineer'
import { useCreateCart } from '../../utils/cartQueries'
const Home = () => {
  useCreateCart()
  

  return (
    <>
      <Body />
      <Overview />
      <Engineer/>
    </>)
}

export default Home