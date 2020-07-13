import React from "react";

import "./log-in.styles.scss";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const LogIn = () => (
  <div>
    <div className="log-in">
      <SignIn />
      <SignUp />
    </div>
  </div>
);

export default LogIn;
