import React from "react";
import { useNavigate } from "react-router-dom";
//src
import "./HeaderPage.scss";

const HeaderPage = () => {
  const navigate = useNavigate();

  return (
    <div className="header-page-container">
      <div className="header-page-main">
        <img
          className="header-page-logo-img"
          src="./assets/icons/logo.svg"
          alt="logo"
          onClick={() => navigate("/")}
        />
        {/* <div className="header-page-logo">
        
        <p className="header-page-logo-title">GALLUS MEDIA</p>
      </div> */}
        <div className="header-page-actions">
          <p>About Us</p>
          <p>Contact Us</p>
          <p onClick={() => navigate("/sign-in")}>Login</p>
          <p onClick={() => navigate("/sign-up")} className="black-rounded-btn">
            Sign up
          </p>
        </div>
      </div>
    </div>
  );
};
export default HeaderPage;
