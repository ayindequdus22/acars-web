import React,{useContext} from "react";
import "./overview.scss";
import product from "./data";
import { Link } from "react-router-dom";
import { ShowLikedContext } from '../../App'

const Overview = () => {
  const showme =  useContext(ShowLikedContext);
return (
  <div className="overviewProductsContainer fldc">
      <h3>Overview</h3>
      <div className="overviewProducts fldcW">
        {product.slice(0,4).map((product, id) =>  (
          
              <div className="overView" key={id}>
                  <div className="fa fa-heart" onClick={() => showme.setShow(true)}></div>
                <div className="image">
                  <picture>
                    <img src={product.image} alt=""/>
                  </picture>
                </div>
                <div className="details fldc">
                  <p>{product.name}</p>
                  <p>${product.price.toFixed(2)}</p>
                  <Link
                    className="btn" to={'/brands'} style={{}}
                  >
                    View Products
                  </Link>
                </div>
              </div>
            
          )
        )}
      </div>

    </div>
  );
};
export default Overview;
