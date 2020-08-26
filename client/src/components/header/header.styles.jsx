import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  margin-bottom: 25px;
  justify-content: space-between;
  display: flex;

  @media screen and (max-width: 800px) {
    height: 50px;
    padding: 10px;
    margin-bottom: 15px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 70%;
  width: 40px;
  @media screen and (max-width: 800px) {
    width: 25px;
  }
`;

export const LinksContainer = styled.div`
  align-items: center;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 75%;
  }
`;

export const LinkLink = styled(Link)`
  padding: 15px 15px;
  cursor: pointer;
`;
