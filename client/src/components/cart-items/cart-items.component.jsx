import React from "react";

import { CartItemContainer, InfoContainer } from "./cart-items.styles";

const CartItems = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt="item" />
    <InfoContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </InfoContainer>
  </CartItemContainer>
);

export default CartItems;
