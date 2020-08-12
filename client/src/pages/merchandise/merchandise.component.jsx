import React from "react";
import { connect } from "react-redux";

import ShopItemCard from "../../components/shop-item-card/shop-item-card.component";

import { selectOneMerchandise } from "../../redux/shop/shop.selectors.js";

import "./merchandise.styles.scss";

const MerchandisePage = ({ merchandise }) => {
  const { label, items } = merchandise;
  return (
    <div className="merchandise-page">
      <div className="label">{label}</div>
      <div className="items">
        {items.map((item) => (
          <ShopItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  merchandise: selectOneMerchandise(ownProps.match.params.merchandiseId)(state),
});

export default connect(mapStateToProps)(MerchandisePage);
