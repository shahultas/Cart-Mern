import React, { useState } from "react";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  // useState section
  const [menu, setMenu] = useState("shop");

  return (
    // html section
    <div className="navbar">
      <div className="nav-logo">
        {/* log section */}
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        {/* links section */}
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop{menu === "shop" ? <hr /> : <></>}</Link>
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/mens">
            Men
            {menu === "men" ? <hr /> : <></>}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/womens">
            Women
            {menu === "women" ? <hr /> : <></>}
          </Link>
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">
            Kids
            {menu === "kids" ? <hr /> : <></>}
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
