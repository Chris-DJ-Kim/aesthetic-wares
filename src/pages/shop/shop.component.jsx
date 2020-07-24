import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ShopItem from "../../components/shop-item/shop-item.component";

import { selectMerchandise } from "../../redux/shop/shop.selectors";

const Shop = ({ merchandise }) => (
  <div>
    {merchandise.map(({ id, label, items }) => (
      <div key={id}>
        <ShopItem label={label} items={items} />
      </div>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  merchandise: selectMerchandise,
});

export default connect(mapStateToProps)(Shop);
