import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component.jsx";
import Shop from "./pages/shop/shop.component";
import SignIn from "./pages/sign-in/sign-in.component";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
