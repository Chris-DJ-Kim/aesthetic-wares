import React from "react";

import "./main-page.styles.scss";
import { Link } from "react-router-dom";

const Mainpage = () => {
  const Background = "https://i.ibb.co/HX1vCzS/main-page.jpg";
  return (
    <div className="main-page">
      <div
        className="main-image"
        style={{
          backgroundImage: `url(${Background})`,
        }}
      ></div>
      <Link className="button" to="/shop">
        SHOP NOW
      </Link>
    </div>
  );
};

export default Mainpage;
