import React from "react";

import "./cart.styles.scss";

const Cart = () => (
  <div>
    <div className="cart">
      <div className="cart-header">
        <div className="header-item">
          <span>Product</span>
        </div>
        <div className="header-item">
          <span>Name</span>
        </div>
        <div className="header-item">
          <span>Quantity</span>
        </div>
        <div className="header-item">
          <span>Price</span>
        </div>
      </div>
    </div>
  </div>
);

export default Cart;
