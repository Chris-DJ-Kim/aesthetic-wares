import React from "react";

import "./custom-form-input.styles.scss";

const CustomFormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="input-components">
    <input
      className="custom-form-input"
      onChange={handleChange}
      {...otherProps}
    />
    <label className="custom-form-input-label">{label}</label>
  </div>
);

export default CustomFormInput;
