import React, { useState } from "react";
import { connect } from "react-redux";

import "./sign-in.styles.scss";

import PersonalizedButton from "../personalized-button/personalized-button.component";
import CustomFormInput from "../custom-form-input/custom-form-input.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart({ email, password });

    // this.setState({
    //   email: "",
    //   password: "",
    //   message: "Unrecognized User",
    // });
  };

  return (
    <div className="sign-in">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <CustomFormInput
          name="email"
          type="email"
          value={email}
          label="Email"
          onChange={handleChange}
          required
        />
        <CustomFormInput
          name="password"
          type="password"
          value={password}
          label="Password"
          onChange={handleChange}
          required
        />

        <div className="buttons">
          <PersonalizedButton type="submit">Sign In</PersonalizedButton>
          <PersonalizedButton
            type="button"
            onClick={googleSignInStart}
            googleSignIn
          >
            Sign In with Google
          </PersonalizedButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart(email, password)),
});

export default connect(null, mapDispatchToProps)(SignIn);
