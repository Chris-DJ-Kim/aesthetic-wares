import React from "react";
import { withRouter } from "react-router-dom";

import "./shop-item-preview.styles.scss";

import ShopItemCard from "../shop-item-card/shop-item-card.component";

const ShopItemPreview = ({ label, items, history, match, routeName }) => {
  return (
    <div className="shop-item">
      <div
        className="label"
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {label}
      </div>

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

export default withRouter(ShopItemPreview);
