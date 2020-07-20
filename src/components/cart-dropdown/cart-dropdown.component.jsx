import React from "react";

import PersonalizedButton from "../personalized-button/personalized-button.component";

import "./cart-dropdown.styles.scss";

const CartDropDown = () => (
  <div className="dropdown">
    <div className="cart-items"></div>
    <PersonalizedButton>Checkout</PersonalizedButton>
  </div>
);

export default CartDropDown;
