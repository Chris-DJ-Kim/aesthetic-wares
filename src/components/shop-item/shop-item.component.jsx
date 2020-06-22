import React from "react";

import "./shop-item.styles.scss";

import ShopItemCard from "../shop-item-card/shop-item-card.component";

const ShopItem = ({ label, items }) => {
  return (
    <div className="shop-item">
      {label}
      <div className="card">
        {items.map((item) => (
          <ShopItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ShopItem;
