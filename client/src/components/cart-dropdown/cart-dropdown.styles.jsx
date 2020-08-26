import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: absolute;
  width: 250px;
  height: 350px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  background-color: white;
  top: 100px;
  right: 100px;
  z-index: 5;
  padding: 20px;

  ::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 20px;
  }

  button {
    margin-top: auto;
  }
`;

export const CartItemsContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export const EmptyMessageSpan = styled.span`
  font-size: 20px;
  margin: 50px auto;
`;
