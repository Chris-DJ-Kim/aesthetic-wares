import styled from "styled-components";

export const ShopItemCardContainer = styled.div`
  height: 425px;
  width: 25vw;
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
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  min-height: 300px;
  min-width: 300px;
`;
