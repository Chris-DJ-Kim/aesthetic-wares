import React from "react";
import { withRouter } from "react-router-dom";

import {
  ShopItemContainer,
  LabelContainer,
  CardContainer,
} from "./shop-item-preview.styles";

import ShopItemCard from "../shop-item-card/shop-item-card.component";

const ShopItemPreview = ({ label, items, history, match, routeName }) => {
  return (
    <ShopItemContainer>
      <LabelContainer
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {label}
      </LabelContainer>

      <CardContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <ShopItemCard key={item.id} item={item} />
          ))}
      </CardContainer>
    </ShopItemContainer>
  );
};

export default withRouter(ShopItemPreview);
