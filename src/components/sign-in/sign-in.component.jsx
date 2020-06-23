import React from "react";

import "./sign-in.styles.scss";

import PersonalizedButton from "../personalized-button/personalized-button.component";
import CustomFormInput from "../custom-form-input/custom-form-input.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      this.setState({
        email: "",
        password: "",
        message: "Unrecognized User",
      });
    }
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Sign In</h2>
        <form onSubmit={this.handleSubmit}>
          <CustomFormInput
            name="email"
            type="email"
            value={this.state.email}
            label="Email"
            onChange={this.handleChange}
            required
          />
          <CustomFormInput
            name="password"
            type="password"
            value={this.state.password}
            label="Password"
            onChange={this.handleChange}
            required
          />

          <div className="buttons">
            <PersonalizedButton type="submit">Sign In</PersonalizedButton>
            <PersonalizedButton
              type="button"
              onClick={signInWithGoogle}
              googleSignIn
            >
              Sign In with Google
            </PersonalizedButton>
          </div>
          {this.state.message}
        </form>
      </div>
    );
  }
}

export default SignIn;
