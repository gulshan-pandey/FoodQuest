import React from "react";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  
  // If no dependency array ==> use effect is called on every render
  //If dependency array is empty =[] ==> useEffect is called on initial render(just once)
  //If dependency array is [btnName] ==> useEffect is called on every change in btnName
  useEffect(() => {
    console.log("Header rendered");
  }, [btnName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>

          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName} {/* button name  */}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
