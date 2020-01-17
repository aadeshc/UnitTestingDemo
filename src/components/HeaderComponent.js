import React from "react";
import "../css/style.css";
import Logo from "../../src/logo.png";

export const mymethod = () => {
  var json = {};

  return 4;
};

const Header = props => {
  return (
    <header className="HeaderComponent" data-test="HeaderComponent">
      <div className="container">
        <div className="wrap">
          <span className="logo">
            <img
              src={Logo}
              alt="logo"
              className="LogoImage"
              data-test="LogoImage"
            ></img>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
