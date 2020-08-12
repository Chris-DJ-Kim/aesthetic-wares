import React from "react";
import { connect } from "react-redux";

import "./shop-item-card.styles.scss";

import PersonalizedButton from "../personalized-button/personalized-button.component";
import { addItem } from "../../redux/cart/cart.actions";

const ShopItemCard = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="shop-item-card">
      {name}
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      {price}
      <PersonalizedButton isShopItemCard onClick={() => addItem(item)}>
        Add to Cart
      </PersonalizedButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ShopItemCard);
