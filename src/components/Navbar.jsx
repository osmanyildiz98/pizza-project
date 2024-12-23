import React from "react";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a className="navLinks" href="">
        <img src="./navbar/hamburger-icon.png" />
        Hamburger
      </a>

      <a className="navLinks" href="">
        <img src="./navbar/pizza-icon.png" />
        Pizza
      </a>

      <a className="navLinks" href="">
        <img src="./navbar/grilled-icon.png" />
        Grilled
      </a>

      <a className="navLinks" href="">
        <img src="./navbar/pasta-icon.png" />
        Pasta
      </a>

      <a className="navLinks" href="">
        <img src="./navbar/vegetarian-icon.png" />
        Vegetarian
      </a>
    </nav>
  );
}

export default Navbar;
