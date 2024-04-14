// Navbar.jsx4
import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  cartProducts,
  setGetTotals,
  selectTotalQTY,
} from "../../store/cartSlice";
import { removeFromLiked } from '../../store/likeSlice';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [activeLike, setActiveLike] = useState(false);
  const onNavScroll = () => {

    if (window.scrollY > 50) {
      console.log("first")
      document.querySelector(".nav").classList.add("activeTwo");
    } else {
      document.querySelector(".nav").classList.remove("activeTwo");
    }
  };
  window.addEventListener("scroll", () => {
    setActive(false);
  })
  useEffect(() => {
    window.addEventListener("scroll", () => onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  const handleClick = () => {
    setActive(!active);
  };


  const dispatch = useDispatch();
  const cartItems = useSelector(cartProducts);
  const likedItems = useSelector((state) => state.likedSlice.likedItems
  )
  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  const totalQTY = useSelector(selectTotalQTY);


  return (
    <>

      <div
        className={`${active ? "nav df-jsb active" : "nav df-jsb"}
         `}
      >
        <p>Anteqs</p>
        <div className="links df">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/brands">Brands</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </div>
        <div className="icons">
          <div className="fa fa-search"></div>
          <Link to="/cart" className="cartIcon">
            <div className="fa fa-shopping-cart"></div>
            <div>{totalQTY}</div>
          </Link>
          <div onClick={() => setActiveLike(true)} className="likedIcon">
            <div className="fa fa-heart"></div>
            <div>{likedItems.length}</div>
            <div></div>
          </div>
          <Link to="/register" title="sign-up" className="fa fa-user"></Link>
          <div
            className={active ? "fa fa-times" : "fa fa-bars"}
            onClick={handleClick}
          ></div>
        </div>
        <div className={activeLike ? "likedItemsSection active" : "likedItemsSection"} >
          <div className="fatty">
            <div className="fa fa-times" onClick={() => setActiveLike(false)}></div>
          </div>

          <div className="likedItemsContainer ">
          {likedItems.map((likedItem, id) => (
            <div className="likedItems df-jsb-ac" key={id}>
              <div className="image">
                <picture>
                  <img src={likedItem.image} alt="" />
                </picture>
              </div>
              <p>{likedItem.name}</p>
              <button onClick={()=>dispatch(removeFromLiked(likedItem))}>Remove</button>
            </div>
          ))}

        </div>


      </div>
    </div >

      <Outlet />
    </>
  );
};

export default Navbar;
