import styled from "styled-components";

export const ShopItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const LabelContainer = styled.div`
  cursor: pointer;
  width: 4%;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 100px 0;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;
  }
`;
