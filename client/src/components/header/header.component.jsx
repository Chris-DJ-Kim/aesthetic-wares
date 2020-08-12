import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from "../../assets/bowl.svg";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import {
  HeaderContainer,
  LogoContainer,
  LinksContainer,
  LinkLink,
} from "./header.styles";

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <LinksContainer>
      <LinkLink to="/shop">Shop</LinkLink>
      {currentUser ? (
        <LinkLink as="div" onClick={signOutStart}>
          Sign Out
        </LinkLink>
      ) : (
        <LinkLink to="/signin">Sign In</LinkLink>
      )}
      <CartIcon />
    </LinksContainer>
    {hidden ? null : <CartDropDown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
