import React from "react";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";

const Navbar = () => {
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
        <li>Shop</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
