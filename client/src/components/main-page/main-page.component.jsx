import React from "react";

import {
  MainPageContainer,
  MainPageImageContainer,
  ShopButtonLink,
} from "./main-page.styles";
import { Link } from "react-router-dom";

const Mainpage = () => {
  const Background = "https://i.ibb.co/HX1vCzS/main-page.jpg";
  return (
    <MainPageContainer>
      <MainPageImageContainer
        style={{
          backgroundImage: `url(${Background})`,
        }}
      ></MainPageImageContainer>
      <ShopButtonLink to="/shop">SHOP NOW</ShopButtonLink>
    </MainPageContainer>
  );
};

export default Mainpage;
