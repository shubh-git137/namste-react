import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header flex justify-between border-2 shadow-md bg-pink-200 mb-2">
      <div className="logo-container">
        <img className="logo w-40" src={LOGO_URL} alt="app-logo" />
      </div>
      <div className="nav-items">
        <ul className="flex m-8 p-2">
          <li className="p-2">{onlineStatus?"Online Status:":"Offline Status:"} {onlineStatus ? "🟢" : "🔴"  }</li>
          <li className="p-2 hover:bg-gray-200 transition duration-300">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="p-2 hover:bg-gray-200 transition duration-300">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="p-2 hover:bg-gray-200 transition duration-300">
            <Link to={"/contact"}>Contact Us</Link>{" "}
          </li>
          <li className="p-2 hover:bg-gray-200 transition duration-300">
            <Link to={"/grocery"}>Grocery</Link>{" "}
          </li>
          <li className="p-2 hover:bg-gray-200 transition duration-300" >Cart</li>
          <button
            className="bg-red-500 w-12 p-1 m-1"
            onClick={() =>
              btnName == "Login" ? setbtnName("Logout") : setbtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
