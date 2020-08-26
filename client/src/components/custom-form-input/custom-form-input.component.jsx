import React from "react";

import {
  InputComponentsContainer,
  CustomFormInputInput,
  CustomFormLabel,
} from "./custom-form-input-styles";

const CustomFormInput = ({ handleChange, label, ...otherProps }) => (
  <InputComponentsContainer>
    <CustomFormInputInput onChange={handleChange} {...otherProps} />
    <CustomFormLabel>{label}</CustomFormLabel>
  </InputComponentsContainer>
);

export default CustomFormInput;
