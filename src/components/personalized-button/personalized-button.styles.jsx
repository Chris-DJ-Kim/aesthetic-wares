import styled, { css } from "styled-components";

const buttonStyles = css`
  color: white;
  background-color: black;
  border: none;

  :hover {
    background-color: white;
    color: black;
    border: 2px solid black;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  :hover {
    background-color: #db4437;
    border: none;
  }
`;

const shopItemCardStyles = css`
  color: white;
  background-color: black;
  border: none;
  opacity: 0.7;
  position: absolute;
  top: 350px;
  width: 75%;

  :hover {
    opacity: 0.8;
  }
`;

const getButtonStyles = (props) => {
  if (props.googleSignIn) {
    return googleSignInStyles;
  } else if (props.isShopItemCard) {
    return shopItemCardStyles;
  }
  return buttonStyles;
};

export const PersonalizedButtonContainer = styled.button`
  min-width: 2px;
  width: auto;
  height: 30px;
  padding: 0 10px 0 10px;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 1px;
  font-family: "Poppins", sans-serif;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  cursor: pointer;

  ${getButtonStyles}
`;
