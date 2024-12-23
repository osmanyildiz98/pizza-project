import React from "react";
import { FaUser } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import "../css/Header.css";

function Header() {
  return (
    <header>
      <div className="header-title">
        <img className="header-logo" src="./logo/bitte-bytes-logo.png" />
        <h1>Bitte Bytes</h1>
      </div>
      <div className="header-icons">
        <FaUser />
        <FaShoppingBasket />
      </div>
    </header>
  );
}

export default Header;
