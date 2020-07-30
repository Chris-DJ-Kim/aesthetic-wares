import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ShopItemPreview from "../shop-item-preview/shop-item-preview.component";

import { selectMerchandiseForPreview } from "../../redux/shop/shop.selectors.js";

const ShopOverview = ({ merchandise }) => (
  <div>
    {merchandise.map(({ id, ...otherMerchandiseProps }) => (
      <ShopItemPreview key={id} {...otherMerchandiseProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  merchandise: selectMerchandiseForPreview,
});

export default connect(mapStateToProps)(ShopOverview);
