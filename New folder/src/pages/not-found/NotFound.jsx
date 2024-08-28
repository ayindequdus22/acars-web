import React from 'react'
import"./NotFound.scss"
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
   <div className="notFoundContainer fldc">
    <div className="image">
        <img 
        src={"https://res.cloudinary.com/dxoemtk19/image/upload/v1715175713/image_2_j8iy58.jpg"} 
        alt="Not Found" />
    </div>
    <div className="content fldc">
        <p>404</p>
        <h1>Page Not Found</h1>
        <Link className='pageLinks' to={"/"}>Go to Home</Link>
    </div>
   </div>
  )
}

export default NotFound