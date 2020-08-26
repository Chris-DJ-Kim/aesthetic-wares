import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import {
  CheckOutItemContainer,
  ImageContainer,
  ImageImage,
  ArrowContainer,
  NameSpan,
  QuantityContainer,
  NumberSpan,
  PriceSpan,
} from "./checkout-item.styles";

const CheckOutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <ImageImage src={imageUrl} alt="item" />
      </ImageContainer>
      <NameSpan>{name}</NameSpan>
      <QuantityContainer>
        <ArrowContainer onClick={() => removeItem(cartItem)}>
          &#10094;
        </ArrowContainer>
        <NumberSpan>{quantity}</NumberSpan>
        <ArrowContainer onClick={() => addItem(cartItem)}>
          &#10095;
        </ArrowContainer>
      </QuantityContainer>
      <PriceSpan>{price}</PriceSpan>
      <ArrowContainer onClick={() => clearItem(cartItem)}>
        &#10006;
      </ArrowContainer>
    </CheckOutItemContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItem);
