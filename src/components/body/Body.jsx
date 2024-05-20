import React from "react";
import  heroImg from "../../assets/120202.jpg";
import "./body.scss";
import { Link } from "react-router-dom";

const Body = () => {


  return (
    <div className="heroPage ">
      <div className="image">
        <picture>
          <img src={heroImg} loading="lazy" alt="body-background" />
        </picture>
      </div>
      <div className="details">
        <h1>Speedy Luxurious Cars</h1>
        <p>
          There are varieties of this in our store.For those who prefer
          speed,check out ferrari,porsche and other sport cars.
        </p>
        <Link to="/brands" className="pageLinks">Order Now</Link>
      </div>
    </div>
  );
};

export default Body;
