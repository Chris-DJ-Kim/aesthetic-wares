import React from "react";
import { connect } from "react-redux";

import "./sign-in.styles.scss";

import PersonalizedButton from "../personalized-button/personalized-button.component";
import CustomFormInput from "../custom-form-input/custom-form-input.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart({ email, password });

    // this.setState({
    //   email: "",
    //   password: "",
    //   message: "Unrecognized User",
    // });
  };

  render() {
    const { googleSignInStart } = this.props;
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
              onClick={googleSignInStart}
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

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart(email, password)),
});

export default connect(null, mapDispatchToProps)(SignIn);
