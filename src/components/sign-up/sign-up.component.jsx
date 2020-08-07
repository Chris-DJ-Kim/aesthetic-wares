import React from "react";
import { connect } from "react-redux";

import "./sign-up.styles.scss";

import PersonalizedButton from "../personalized-button/personalized-button.component";
import CustomFormInput from "../custom-form-input/custom-form-input.component";

import { signUpStart } from "../../redux/user/user.actions";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      message: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;

    if (password !== confirmPassword) {
      this.setState({
        email: "",
        password: "",
        confirmPassword: "",
        message: "Passwords don't match!",
      });
      alert("Passwords do not match");
      return;
    }

    signUpStart({ email, password });
  };
  render() {
    const { email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <CustomFormInput
            type="email"
            name="email"
            value={email}
            label="Email"
            onChange={this.handleChange}
          />
          <CustomFormInput
            type="password"
            name="password"
            value={password}
            label="Password"
            onChange={this.handleChange}
          />
          <CustomFormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            onChange={this.handleChange}
          />
          <div className="button">
            <PersonalizedButton>Sign Up</PersonalizedButton>
          </div>
          {this.state.message}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
