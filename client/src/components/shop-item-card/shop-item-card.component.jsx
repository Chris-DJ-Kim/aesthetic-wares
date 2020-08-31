import React from "react";
import { connect } from "react-redux";

import {
  ShopItemCardContainer,
  LabelContainer,
  ImageContainer,
  AddToCartButton,
} from "./shop-item-card.styles";

import { addItem } from "../../redux/cart/cart.actions";

const ShopItemCard = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <ShopItemCardContainer>
      <LabelContainer> {name}</LabelContainer>
      <ImageContainer
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></ImageContainer>
      {price}
      <AddToCartButton isShopItemCard onClick={() => addItem(item)}>
        Add To Cart
      </AddToCartButton>
    </ShopItemCardContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ShopItemCard);
