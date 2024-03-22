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

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    console.log(active);
  };

  const onNavScroll = () => {
    if (window.scrollY > 50) {
      document.querySelector(".nav").classList.add("activeTwo");
    } else {
      document.querySelector(".nav").classList.remove("activeTwo");
    }
  };
  const dispatch = useDispatch();
  const cartItems = useSelector(cartProducts);
  const likedItems = useSelector((state)=> state.likedSlice.likedItems
  )
  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  const totalQTY = useSelector(selectTotalQTY);
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <>
    <Outlet/>
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
          <Link to="/liked" className="likedIcon">
            <div className="fa fa-heart"></div>
            <div>{likedItems.length}</div>
          <div></div>
          </Link>
          <Link to="/register" title="sign-up" className="fa fa-user"></Link>
          <div
            className={active ? "fa fa-times" : "fa fa-bars"}
            onClick={handleClick}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
