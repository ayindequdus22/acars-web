// Navbar.jsx4
import React, { useState, useEffect, useContext } from "react";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { removeFromLiked } from '../../store/likeSlice';
import { showLikedContext } from "../../utils/showlikedcontext";
import { useDispatch, useSelector } from "react-redux";
import { useGetCartHook } from "../../utils/cartQueries";

const Navbar = () => {
  const showme = useContext(showLikedContext);
  const { data, isLoading } = useGetCartHook();

  const totalQTY = !isLoading ? data?.cart?.totalQuantity : 0

  const [active, setActive] = useState(false);
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
  const likedItems = useSelector((state) => state.likedSlice.likedItems
  )


  return (
    <>

      <div
        className={`${active ? "nav df-jsb active" : "nav df-jsb"}
         `}
      >
        <Link>A-Cars</Link>
        <div className="links df">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/brands">Brands</NavLink>
          <NavLink to="/coming-soon">Coming Soon</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </div>
        <div className="icons">
          <div className="fa fa-search"></div>
          <Link to="/cart" className="cartIcon">
            <div className="fa fa-shopping-cart"></div>
            <div>{totalQTY}</div>
          </Link>
          <div onClick={() => showme.setShow(true)} className="likedIcon">
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
        <div className={showme.show ? "likedItemsSection active" : "likedItemsSection"} >
          <div className="fatty">
            <div className="fa fa-times" onClick={() => showme.setShow(false)}></div>
          </div>
          {likedItems.length >= 1 ? (
            <div className="likedItemsContainer ">
              {likedItems.map((likedItem, id) => (
                <div className="likedItems df-jsb-ac" key={id}>
                  <div className="image">
                    <picture>
                      <img src={likedItem.image} alt="" />
                    </picture>
                  </div>
                  <p>{likedItem.name}</p>
                  <button onClick={() => {
                    dispatch(removeFromLiked(likedItem))

                  }}>Remove</button>
                </div>
              ))}

            </div>)
            : (
              <>
                <div className="emptyLikeContainer dfAc" style={{ padding: "0 4%", textAlign: "center" }}>
                  <h3>Add Products You Like To Favorites <div className="fa fa-heart" style={{ color: "var(--primary-color" }}></div></h3>
                </div>
              </>
            )}

        </div>
      </div >
    </>
  );
};

export default Navbar;
