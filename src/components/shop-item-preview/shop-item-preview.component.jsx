import React from "react";

import "./shop-item-preview.styles.scss";

import ShopItemCard from "../shop-item-card/shop-item-card.component";

const ShopItemPreview = ({ label, items }) => {
  return (
    <div className="shop-item">
      {label}
      <div className="card">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <ShopItemCard key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default ShopItemPreview;
