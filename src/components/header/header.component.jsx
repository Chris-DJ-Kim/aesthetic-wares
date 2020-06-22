import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/bowl.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link className="home" to="/">
      <Logo />
    </Link>
    <div className="links">
      <Link className="link" to="/shop">
        Shop
      </Link>
      <Link className="link" to="/signin">
        Sign In
      </Link>
      <Link className="link">Cart</Link>
    </div>
  </div>
);

export default Header;
