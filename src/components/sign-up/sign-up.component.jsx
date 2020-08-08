import React, { useState } from "react";
import { connect } from "react-redux";

import "./sign-up.styles.scss";

import PersonalizedButton from "../personalized-button/personalized-button.component";
import CustomFormInput from "../custom-form-input/custom-form-input.component";

import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { email, password, confirmPassword } = userCredentials;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setUserCredentials({
        email: "",
        password: "",
        confirmPassword: "",
      });
      alert("Passwords don't match!");
      return;
    }

    signUpStart({ email, password });
  };

  return (
    <div className="sign-up">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <CustomFormInput
          type="email"
          name="email"
          value={email}
          label="Email"
          onChange={handleChange}
        />
        <CustomFormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          onChange={handleChange}
        />
        <CustomFormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          onChange={handleChange}
        />
        <div className="button">
          <PersonalizedButton>Sign Up</PersonalizedButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
