import React from "react";
import "./overview.scss";
import product from "./data";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/cartSlice";
const Overview = () => {
  const dispatch = useDispatch();

return (
  <div className="overviewProductsContainer fldc">
      <h3>Overview</h3>
      <div className="overviewProducts fldcW">
        {product.map((product, id) => {
        //   {let anteqs = JSON.stringify(product);console.log(anteqs);
        //   let anteqs2 = JSON.parse(anteqs);
        //   console.log(anteqs2)
        // }
          return (
            <>
              <div className="overView" key={id}>
                <div className="image">
                  <picture>
                    <img src={product.image} alt=""/>
                  </picture>
                </div>
                <div className="details fldc">
                  <p>{product.name}</p>
                  <p>${product.price.toFixed(2)}</p>
                  <button
                    className="btn"
                    onClick={()=>{dispatch(addToCart(product))}}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>

    </div>
  );
};
// shopping-hub-react-js-ecom-site-with-redux-toolkit-master
export default Overview;
