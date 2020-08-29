import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainPageContainer = styled.div`
  height: 600px;
  width: 100%;
`;

export const MainPageImageContainer = styled.div`
  height: 100%;
  display: block;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ShopButtonLink = styled(Link)`
  width: 20%;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  margin: 15px auto;
  font-size: 15px;
  background-color: black;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border: 0;

  &:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
  }

  @media screen and (max-width: 800px) {
    width: unset;
  }
`;
