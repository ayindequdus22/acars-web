import React from 'react'
import Body from '../../components/body/Body'
import Overview from '../../components/overview/Overview'
import { Engineer } from '../../components/engineer/Engineer'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
    {/* <Outlet/>.. */}
      <Body />
      <Overview />
      <Engineer/>
    </>)
}

export default Home