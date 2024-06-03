import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the cart using selector
  const cartItems = useSelector((store) => store.cart.items);
  const cartItemCount = cartItems.length;

  return (
    <div className="header flex justify-between border-2 shadow-md bg-pink-200 mb-2">
      <div className="logo-container">
        <img className="logo w-40" src={LOGO_URL} alt="app-logo" />
      </div>
      <div className="nav-items">
        <ul className="flex m-8 p-2">
          <li className="p-2">
            {onlineStatus ? "Online Status: 🟢" : "Offline Status: 🔴"}
          </li>
          <li className="p-2 hover:bg-gray-200 transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 hover:bg-gray-200 transition duration-300">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-2 hover-bg-gray-200 transition duration-300">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-2 hover-bg-gray-200 transition duration-300">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-2 hover-bg-gray-200 transition duration-300 font-bold text-lg">
            <Link to="/cart">
              Cart- ({cartItemCount} Item{cartItemCount !== 1 ? "s" : ""})
            </Link>
          </li>
          <button
            className="bg-red-500 w-12 p-1 m-1"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
          <li className="p-2 transition duration-300">
            <h2>{loggedInUser}</h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
