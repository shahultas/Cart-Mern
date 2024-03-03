import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/logo_big.png";
import instagram_icon from "../../assets/instagram_icon.png";
import pintester_icon from "../../assets/pintester_icon.png";
import whatsapp_icon from "../../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      {/* footer logo section */}
      <div className="footer-logo">
        <img src={footer_logo} alt="Footer logo" />
        <p>SHOPPER</p>
      </div>
      {/* Footer link section */}
      <div className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Officers</li>
        <li>About</li>
        <li>Contact</li>
      </div>
      {/* Footer social icon section */}
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      {/* footer copyright section */}
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
