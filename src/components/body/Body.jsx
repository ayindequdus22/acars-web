import React from "react";
import "./body.scss";
import { Link } from "react-router-dom";

const Body = () => {


  return (
    <div className="heroPage ">
      <div className="image">
        <picture>
          <img src="https://res.cloudinary.com/dxoemtk19/image/upload/v1715175718/image_6_hl6c7t.jpg" loading="lazy" alt="body-background" />
        </picture>
      </div>
      <div className="details">
        <h1>Speedy Luxurious Cars</h1>
        <p>
          There are varieties of this in our store.For those who prefer
          speed,check out ferrari,porsche and other sport cars.
        </p>
        <Link to="/products" className="pageLinks">Order Now</Link>
      </div>
    </div>
  );
};

export default Body;
