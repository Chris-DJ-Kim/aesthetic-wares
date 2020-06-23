import React from "react";

import "./personalized-button.stylers.scss";

const PersonalizedButton = ({ children, googleSignIn, ...otherProps }) => (
  <button
    className={`${googleSignIn ? "google-sign-in" : ""} personalized-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default PersonalizedButton;
