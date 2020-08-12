import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./cart.styles.scss";

const Cart = ({ cartItems, total }) => (
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
        <div className="header-item">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem cartItem={cartItem} key={cartItem.id} />
      ))}
      <div className="total">
        <span>Total: ${total}</span>
      </div>
      <div className="warning">
        *Please use following info for testing*
        <br />
        4242 4242 4242 4242 - Exp: Any future date - CVV: Any three numbers
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);
