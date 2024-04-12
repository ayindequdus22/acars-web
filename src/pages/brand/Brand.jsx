import React from 'react'
import { Product } from '../../product/Product'
import { useParams } from 'react-router-dom'
const Brands = () => {
  const {id} = useParams();
  console.log(id)
  return (
    <>
    <Product proper={id}/>
    </>
  )
}

export default Brands