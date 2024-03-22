import React, { useEffect } from 'react'
import { product } from './data';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '.././store/cartSlice'
// import { Link } from 'react-router-dom';
import './products.scss'
import { addToLiked } from '.././store/likeSlice'
export const Product = () => {
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.likedSlice.likedItems);
  // const [testPresence, setTest] = useState(false)
  useEffect(() => {
    isActive.forEach((item) => {
      product.forEach((product) => {
        if (product.id === item.id) {
          // product.active = true
          // console.log(isActive,product)
        }
      })
    })
  }, [isActive])
  return (
    <div className="brandProductsContainer fldc">
      <h3>Products</h3>
      <div className="brandProducts fldcW">
        {product.map((product, id) => {
          return (
            <>

              <div className="brand" key={id}>
                <div className={product.isPresent ? "fa fa-heart active" : "fa fa-heart"} onClick={() => { dispatch(addToLiked(product)) }}></div>
                <div className="image">
                  <picture>
                    <img src={product.image} alt="" />
                  </picture>
                </div>
                <div className="details fldc">
                  <p>{product.name}</p>
                  <p>${product.price.toFixed(2)}</p>
                  <button style={{ height: "4rem", width: "13rem", fontSize: '1.5rem' }} className='btn' onClick={() => { dispatch(addToCart(product)) }}>Add to Cart</button>
                </div>
              </div>
            </>
          );
        })}
      </div>

    </div>
  )
}
