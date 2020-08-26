import React from "react";
import { connect } from "react-redux";

import { ShopItemCardContainer, ImageContainer } from "./shop-item-card.styles";

import PersonalizedButton from "../personalized-button/personalized-button.component";
import { addItem } from "../../redux/cart/cart.actions";

const ShopItemCard = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <ShopItemCardContainer>
      {name}
      <ImageContainer
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></ImageContainer>
      {price}
      <PersonalizedButton isShopItemCard onClick={() => addItem(item)}>
        Add to Cart
      </PersonalizedButton>
    </ShopItemCardContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ShopItemCard);
