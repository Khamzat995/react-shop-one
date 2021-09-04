import React from "react";
import icon from "./assets/shopping-cart.png";

function Header() {
  return (
    <div className="header">
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-md">
            <a className="navbar-brand" href="#">
              Intocode Coding Shopcamp Express
            </a>
          </div>
        </nav>
      </>
      <>
        <img className="icon" src={icon} alt="cart" />
      </>
    </div>
  );
}

export default Header;
