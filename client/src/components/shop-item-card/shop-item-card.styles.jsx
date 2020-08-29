import styled from "styled-components";
import PersonalizedButton from "../personalized-button/personalized-button.component";

export const ShopItemCardContainer = styled.div`
  height: 425px;
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0 10px;

  &:hover {
    .image {
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 800px) {
    width: 35vw;

    &:hover {
      .image {
        opacity: unset;
      }
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  min-height: 300px;
  min-width: 300px;
`;

export const AddToCartButton = styled(PersonalizedButton)`
  @media screen and (max-width: 800px) {
    display: block;
    min-width: unset;
    min-height: 60px;
    top: 325px;
  }
`;
