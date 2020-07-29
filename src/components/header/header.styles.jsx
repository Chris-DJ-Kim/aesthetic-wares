import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  margin-bottom: 25px;
  justify-content: space-between;
  display: flex;
`;

export const LogoContainer = styled(Link)`
  height: 70%;
  width: 40px;
`;

export const LinksContainer = styled.div`
  align-items: center;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const LinkLink = styled(Link)`
  padding: 15px 15px;
  cursor: pointer;
`;
