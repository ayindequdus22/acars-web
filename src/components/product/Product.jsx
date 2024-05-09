import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { addToLiked, removeFromLiked } from '../../store/likeSlice';
import './products.scss';
import { useQuery } from '@tanstack/react-query';
import { Axios } from '../../utils/axios';
const Product = () => {
  const dispatch = useDispatch();
  const likedItems = useSelector((state) => state.likedSlice.likedItems);
  
  const handleLikeClick = (productItem) => {
    const isLiked = likedItems.some(item => item.id === productItem.id);
    if (isLiked) {
      dispatch(removeFromLiked(productItem));
    } else {
      dispatch(addToLiked(productItem));
    }
  };
  const {data:products,isLoading} = useQuery({
    queryKey:["products"],
    queryFn:async ()=>{
 const data = await Axios.get("/products/all-products");
 return data;
    }
  })
  return (
    <div className="brandProductsContainer fldc">
      <h3>Products</h3>
      <div className="brandProducts fldcW">
        {products?.data.map((productItem) => {
          const isLiked = likedItems.some(item => item.id === productItem.id);
          return (
            <div className="brand" key={productItem._id}>
              <div
                className={isLiked ? "fa fa-heart active" : "fa fa-heart"}
                onClick={() => handleLikeClick(productItem)}
              ></div>
              <div className="image">
                <picture>
                  <img src={productItem.image} alt={productItem.name} />
                </picture>
              </div>
              <div className="details fldc">
                <p>{productItem.name}</p>
                <p>${productItem.price?.toFixed(2)}</p>
                <button
                  style={{ height: "4rem", width: "13rem", fontSize: '1.5rem' }}
                  className='btn'
                  onClick={() => dispatch(addToCart(productItem))}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
