import React from 'react'

import "./engineer.scss"
import { Link } from 'react-router-dom'
export const Engineer = () => {
  const data = [
    { text: "Toyota Melly ", image: "https://res.cloudinary.com/dxoemtk19/image/upload/v1715175713/image_22_ue469y.jpg", prof: "Rewire" },
    { text: "Marc ZuckerBerg", image: "https://res.cloudinary.com/dxoemtk19/image/upload/v1715175724/image_23_fh37ar.jpg", prof: "Exhaust Mechanic" },
    { text: "Elon Musk", image: "https://res.cloudinary.com/dxoemtk19/image/upload/v1715175736/image_24_pjjhlw.jpg", prof: "Exhaust Mechanic" },
    { text: "Elon ZuckerBerg", image: "https://res.cloudinary.com/dxoemtk19/image/upload/v1715175713/image_22_ue469y.jpg", prof: "Exhaust Mechanic" },
  ]
  return (
    <div className='overviewProductsContainer fldc'>
      <h3>Engineers</h3>
      <div className="overviewProducts fldcW">
        {data.map((eng, id) => (
          <div className="overView" key={id}>
           
            <div className="image"> 
            <div className="slideIn dfAc">
            <div className="fab fa-twitter"></div>      
                    <div className="fab fa-instagram"></div>
              <div className="fab fa-facebook"></div>
            </div>
              <picture>
                <img src={eng.image} loading='lazy' alt="" />
              </picture>
            </div>
            <div className="details fldc" style={{ padding: "1rem 0 0" }}>
              <p>{eng.text}</p>
              <p>{eng.prof}</p>
              <Link className='pageLinks' style={{ height: "4rem", fontSize: "2rem" }}>View Details</Link>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}
