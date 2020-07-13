import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/bowl.svg";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="home" to="/">
      <Logo />
    </Link>
    <div className="links">
      <Link className="link" to="/shop">
        Shop
      </Link>
      {currentUser ? (
        <div className="link" onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link className="link" to="/signin">
          Sign In
        </Link>
      )}
      <Link className="link" to="/cart">
        Cart
      </Link>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
