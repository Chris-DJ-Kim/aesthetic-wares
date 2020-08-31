import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  text-align: center;
  @media screen and (max-width: 800px) {
    width: unset;
  }
`;

export const ButtonContainer = styled.div`
  display: inline-block;
`;
