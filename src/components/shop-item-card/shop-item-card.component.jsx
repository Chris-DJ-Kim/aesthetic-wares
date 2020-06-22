import React from "react";

import "./shop-item-card.styles.scss";

const ShopItemCard = ({ item }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="shop-item-card">
      {name}
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      {price}
    </div>
  );
};

export default ShopItemCard;
