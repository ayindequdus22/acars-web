import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToLiked, } from '../../store/likeSlice';
import { useQuery } from '@tanstack/react-query';
import { Axios } from '../../utils/axios';
import Loader from '../../Loader';
import { toast } from 'react-toastify';
import './products.scss';
import { useAddToCartFunction } from '../../utils/cartQueries';
export const ToastME = ({ image, name, text }) => {
  return (
    <div className="addToast dfAc">
      <div className="img">
        <img src={image} alt={name} />
      </div>
      <p>{text}</p>
    </div>
  )
}
const Product = () => {
  const dispatch = useDispatch();
  const likedItems = useSelector((state) => state.likedSlice.likedItems);
  const { mutate: addToCart } = useAddToCartFunction()
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await Axios.get(`/products/all-products`);
      return response.data;
    },
    onError: (error) => {
      toast.error(`Failed to fetch products: ${error.message}`);
    },
  });

  return (
    <div className="brandProductsContainer fldc">
      <h3>Products</h3>
      {isLoading ? <Loader /> : <div className="brandProducts fldcW">
        {products?.data.map((productItem) => {
          const isLiked = likedItems.some(item => item._id === productItem._id);
          return (
            <div className="brand" key={productItem._id}>
              <div
                className={isLiked ? "fa fa-heart active" : "fa fa-heart"}
                onClick={() => dispatch(addToLiked(productItem))

                }
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
                  onClick={async () => {
                    addToCart({ productId: productItem._id, quantity: 1 }, {
                      onSuccess: () => {
                        toast(<ToastME image={productItem.image} name={productItem.name} text={`${productItem.name} has been added`} />, { containerId: 'A' })
                      },
                      onError: () => {
                        toast.error("Item .can be added now", { containerId: 'A' })
                      }
                    })

                  }}

                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      }

    </div>
  );
};

export default Product;
