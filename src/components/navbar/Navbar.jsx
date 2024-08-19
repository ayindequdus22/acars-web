import React, { useState, useEffect, useRef, useContext } from "react";
import "./navbar.scss";
import { Link, NavLink, useNavigate, Navigate } from "react-router-dom";
import { removeFromLiked } from '../../store/likeSlice';
import { showLikedContext } from "../../utils/showlikedcontext";
import { useDispatch, useSelector } from "react-redux";
import { useGetCartHook } from "../../utils/cartQueries";
import { userContext } from "../../utils/UserContext";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Axios } from "../../utils/axios";
import Loader from "../../Loader";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient();
  const { mutate, isPending, error } = useMutation({
    mutationKey: ["logout"],
    mutationFn: async () => {
      const res = await Axios.post("/auth/logout");
      return res.data;
    }, retry: false,
    onSuccess: () => {
      queryClient.invalidateQueries(["cart", "authUser", "overview"]);
      localStorage.clear();
      navigate("/login", { replace: true });
    },
    onError: (error) => {
      toast.error(`Logout failed: ${error.message}`, { containerId: 'A' });
    },
  });

  const user = useContext(userContext);
  const showme = useContext(showLikedContext);
  const { data, isLoading } = useGetCartHook();
  const [userModal, showUserModal] = useState(false);
  const totalQTY = !isLoading ? data?.cart.totalQuantity : 0;
  const [active, setActive] = useState(false);
  const navElement = useRef(null)

  const onNavScroll = () => {
    showme.setShow(false)
    setActive(false);
    navElement.current?.classList.remove("activeTwo");
    if (window.scrollY > 50) {
      navElement.current?.classList.add("activeTwo");
    } else {
      navElement.current?.classList.remove("activeTwo");
    }

  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  const handleClick = () => {
    setActive(!active);
  };

  const dispatch = useDispatch();
  const likedItems = useSelector((state) => state.likedSlice.likedItems);
  if (isPending) {
    return <Loader />
  }
  return (
    <>
      <div ref={navElement} className={`nav df-jsb ${active ? "active" : ""}`}>
        <Link to="/">A-Cars</Link>
        <div className="links df">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
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
          </div>
          <div className="user dfAc">
            <div className="fa fa-user" onClick={() => showUserModal(!userModal)}></div>
            <div className={`userContainer fldc ${userModal ? "active" : ""}`}>
              <p className="dfAc" style={{ backgroundColor: user.data?.color }}>
                {user.data?.username?.slice(0, 2)}
              </p>
              <p>{user.data?.username}</p>
              <button className="btn" onClick={mutate}>Logout</button>
            </div>
          </div>
          <div className={`fa ${active ? "fa-times" : "fa-bars"}`} onClick={handleClick}></div>
        </div>
        <div className={`likedItemsSection ${showme.show ? "active" : ""}`}>
          <div className="fatty">
            <div className="fa fa-times" onClick={() => showme.setShow(false)}></div>
          </div>
          {likedItems.length >= 1 ? (
            <div className="likedItemsContainer">
              {likedItems.map((likedItem, id) => (
                <div className="likedItems df-jsb-ac" key={id}>
                  <div className="image">
                    <picture>
                      <img src={likedItem.image} alt={likedItem.name} />
                    </picture>
                  </div>
                  <p>{likedItem.name}</p>
                  <button onClick={() => dispatch(removeFromLiked(likedItem))}>
                    Remove
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="emptyLikeContainer dfAc" style={{ padding: "0 4%", textAlign: "center" }}>
              <h3>
                Add Products You Like To Favorites <div className="fa fa-heart" style={{ color: "var(--primary-color)" }}></div>
              </h3>
            </div>
          )}
        </div>
      </div>
      {error && (<>
        {toast("Can't logout", { containerId: 'A' })}
        <Navigate to="/" />
      </>)
      }
    </>

  );
};

export default Navbar;