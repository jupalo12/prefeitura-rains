import React from "react";
import "../pages/index.css";
import Logo from "../data/prefeitura-logo.png";

const Splash = () => {
  return (
    <div className="main">
      <div className="center puff-in-center"></div>
      <img className="logoSplash puff-in-center" src={Logo} alt="" />
    </div>
  );
};

export default Splash;
