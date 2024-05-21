import React from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../components/product/Product';
const Products = () => {
  const {id} = useParams();
  console.log(id)
  return (
    <>

<Product proper={id}/>    </>
  )
}

export default Products