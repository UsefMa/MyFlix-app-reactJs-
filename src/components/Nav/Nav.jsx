import React from "react";
import "./NavStyle.css";

const Nav = () => {
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <p>MyFlix</p>
        </div>
        <div className="nav_btns">
          <button className="sign_in">Sign In</button>
          <button className="sign_up">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Nav;
