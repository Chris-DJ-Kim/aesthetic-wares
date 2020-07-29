import React from "react";

import { PersonalizedButtonContainer } from "./personalized-button.styles";

const PersonalizedButton = ({ children, ...otherProps }) => (
  <PersonalizedButtonContainer {...otherProps}>
    {children}
  </PersonalizedButtonContainer>
);

export default PersonalizedButton;
