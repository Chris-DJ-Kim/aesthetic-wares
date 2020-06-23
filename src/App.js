import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component.jsx";
import Shop from "./pages/shop/shop.component";
import LogIn from "./pages/login/log-in";
import Cart from "./pages/cart/cart.component";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={LogIn} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    );
  }
}

export default App;
