import React from "react";

import SHOP_ITEMS from "./shop.items";
import ShopItem from "../../components/shop-item/shop-item.component";

class Shop extends React.Component {
  constructor() {
    super();

    this.state = {
      merchandise: SHOP_ITEMS,
    };
  }

  render() {
    const merchandise = this.state.merchandise;
    return (
      <div>
        {merchandise.map(({ id, label, items }) => (
          <div key={id}>
            <ShopItem label={label} items={items} />
          </div>
        ))}
      </div>
    );
  }
}

export default Shop;
