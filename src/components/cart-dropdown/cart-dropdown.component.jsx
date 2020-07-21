import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import PersonalizedButton from "../personalized-button/personalized-button.component";
import CartItems from "../cart-items/cart-items.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className="dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItems key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty">Your cart is empty</span>
      )}
    </div>
    <PersonalizedButton
      onClick={() => {
        history.push("/cart");
        dispatch(toggleCartHidden());
      }}
    >
      Checkout
    </PersonalizedButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
