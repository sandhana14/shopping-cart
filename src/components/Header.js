import React from "react";
import { Link } from "react-router-dom";

function Header({ countcartitems }) {
  return (
    <header className="row block center">
      <div className="logo">
        <img
          src="https://img.icons8.com/clouds/100/000000/shopping-cart-promotion.png"
          alt="shopping-cart-logo"
        />
      </div>
      <div className="header-title">
        <h1>Shopping cart</h1>
      </div>
      <div>
        <Link to="/">Home</Link>

        <img
          className="cart-icon"
          src="https://img.icons8.com/fluent-systems-filled/48/000000/fast-cart.png"
          alt="cart"
        />
        <Link to="/cart">
          Cart
          {countcartitems ? (
            <button className="badge">{countcartitems}</button>
          ) : (
            ""
          )}
        </Link>
      </div>
    </header>
  );
}

export default Header;
