import React from "react";

import Signin from "../components/SignInForm";
import SignUp from "../components/SignUpForm";

const LogReg = () => {
  return (
    <div className="container-flex">
      <Signin />
      <SignUp />
    </div>
  );
};

export default LogReg;