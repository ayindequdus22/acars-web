import React from "react";
import { Link } from "react-router-dom";
import "./cart.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {   UseRemoveItemCartFunction, useClearCart, useGetCartHook, useUpdateItemQtyQuery } from "../../utils/cartQueries";

const Cart = () => {
  const removeFromCart = UseRemoveItemCartFunction();
  const clearCart = useClearCart();
  const { data } = useGetCartHook();
  console.log(data)
  const totalQTY = data?.cart.totalQuantity;
  const totalAmount = data?.cart.totalPrice;
  const upDateItemQty = useUpdateItemQtyQuery()
  return (
    <>
      {data?.cart && data?.cart.cartItems === 0 ? (
        <>
          <div className="emptyCart dfAc">
            <h1>Cart is empty</h1>
          </div>
        </>
      ) : (
        <>
          <div className="cartContainer">
            <div className="total df-jsb">
              <p>Total:</p><span>{data?.cart?.totalPrice}</span>
            </div>
            <div className="necessities">
              <div>
                <Link to={"/"}>Home</Link>{" "}
                <div className="fa fa-chevron-right"></div>{" "}
                <Link to={"/cart"}>Shopping Cart</Link>
              </div>
              <div className="cartHeader df-jsb-ac">
                <Link to={"/"} className="">
                  <div className="fa fa-arrow-left"></div>
                  <span style={{ paddingLeft: "1rem" }}>Continue Shopping</span>
                </Link>
                <div className="clearBtn">
                  <button onClick={() => clearCart.mutate()}>
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="cartCont">
              <div className="cartItemContainer">
                {data?.cart.cartItems?.map((cartItem) => {
                  // let newPrice = (
                  //   cartItem.price * cartItem.cartQuantity
                  // ).toFixed(2);
console.log(cartItem._id)
                  return (

                    <div className="cartItem" key={cartItem._id}>
                     
                      <div className="image">
                        <img src={cartItem.product.image} alt="" />
                      </div>
                      <div style={{ padding: "" }}>
                        <p style={{ fontSize: "2rem" }}>{cartItem.product.name}</p>
                      </div>
                      <div className="changes">
                        <button
                      onClick={async () => {
                        upDateItemQty.mutate({ productId:cartItem.product._id, update: "decrease" })
                      }}
                        >
                          -
                        </button>
                        <input

                          type="text"
                          disabled
                          value={cartItem.quantity}
                        />
                        <button
                        onClick={async () => {
                          upDateItemQty.mutate({ productId: cartItem.product._id, update:"increase" })
                        }}
                         
                        >
                          +
                        </button>
                      </div>
                      <div className="details">
                        {/* <p>{newPrice}</p> */}
                        <p>
                          {cartItem.product.price.toFixed(2)} x{" "}
                          {cartItem.quantity} items
                        </p>
                      </div>
                      <div className="remove">
                        <button
                          onClick={() => {
                            removeFromCart.mutate(cartItem.product._id)
                          }}
                        >
                          Remove Item
                        </button>
                      </div>
                    </div>

                  );
                })}
              </div>

              <div className="checkOut">
                <div className="orderHeader df-jsb-ac">
                  <p>Order Summary </p>
                  <p>{totalQTY} items</p>
                </div>
                <div className="df-jsb-ac subtotal">
                  <p>Subtotal</p>
                  <p>{totalAmount}</p>
                </div>
                <div className="df-jsb-ac subtotal">
                  <p>Discount</p>
                  <p>10%</p>
                </div>
                <div className="df-jsb-ac subtotal">
                  <p>Total</p>
                  {/* <p>{(totalAmount - totalAmount / 10).toFixed(2)}</p> */}
                </div>
                <div className="deliveryCharges">
                  <p>Excluding delivery charge</p>
                </div>

                <div className="dfAc checkOutBtnContainer">
                  <button className="btn">Continue to Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>

    // <div></div>

  );
};

export default Cart;
