import React, { useContext } from 'react'
import img from "../../assets/eng (1).jpg"
import img1 from "../../assets/eng (2).jpg"
import img2 from "../../assets/eng.jpg"
import "./engineer.scss"
export const Engineer = () => {

  const data = [
    { text: "Toyota Melly ", image: img, prof: "Rewire" },
    { text: "Marc ZuckerBerg", image: img1, prof: "Exhaust Mechanic" },
    { text: "Elon Musk", image: img2, prof: "Exhaust Mechanic" },
    { text: "Elon ZuckerBerg", image: img, prof: "Exhaust Mechanic" },
  ]
  return (
    <div className='overviewProductsContainer fldc'>
      <h3>Engineers</h3>
      <div className="overviewProducts fldcW">
        {data.map((eng, id) => (
          <div className="overView" key={id}>
            <div className="slideIn dfAc">
            <div class="fab fa-twitter"></div>      
                    <div className="fab fa-instagram"></div>
              <div className="fab fa-facebook"></div>
            </div>
            <div className="image">
              <picture>
                <img src={eng.image} loading='lazy' alt="" />
              </picture>
            </div>
            <div className="details fldc" style={{ padding: "1rem 0 0" }}>
              <p>{eng.text}</p>
              <p>{eng.prof}</p>
              <button className='btn' style={{ width: "15rem", height: "4rem", fontSize: "2rem" }}>View Details</button>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}
