import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import PersonalizedButton from "../personalized-button/personalized-button.component";
import CartItems from "../cart-items/cart-items.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import {
  DropdownContainer,
  CartItemsContainer,
  EmptyMessageSpan,
} from "./cart-dropdown.styles";

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <DropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItems key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageSpan>Your cart is empty</EmptyMessageSpan>
      )}
    </CartItemsContainer>
    <PersonalizedButton
      onClick={() => {
        history.push("/cart");
        dispatch(toggleCartHidden());
      }}
    >
      Checkout
    </PersonalizedButton>
  </DropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
