import React from "react";

import SHOP_ITEMS from "./shop.items";
import ShopItem from "../../components/shop-item/shop-item.component";
import Header from "../../components/header/header.component";

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
        <Header />
        {merchandise.map(({ id, label, items }) => (
          <div>
            <ShopItem key={id} label={label} items={items} />
          </div>
        ))}
      </div>
    );
  }
}

export default Shop;
