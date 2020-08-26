import styled from "styled-components";

export const CartIconContainer = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding-top: 25px;

  .shopping-icon {
    width: 25px;
    height: 25px;
  }
`;

export const CountSpan = styled.span`
  position: absolute;
  font-size: 10px;
  color: white;
  font-weight: bold;
  padding-top: 3px;
  padding-left: 5px;
`;
