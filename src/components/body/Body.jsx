import React from "react";
import  heroImg from "../../assets/120202.jpg";
import "./body.scss";

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
          {/* Patronise our store for nice cars,we're putting your safety as a priority over speed. */}
          There are varieties of this in our store.For those who prefer
          speed,check out ferrari,porsche and other sport cars.
        </p>
        <button>Order Now</button>
      </div>
    </div>
  );
};

export default Body;
