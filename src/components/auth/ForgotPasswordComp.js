"use client";

import { authStatus } from "@/lib/constants";
import { useState } from "react";
import ForgotPasswordForm from "./ForgotPasswordForm";
import OtpFrom from "./OtpForm";
import ResetPassword from "./ResetPassword";

const ForgotPasswordComp = () => {
  const [compState, setCompState] = useState(authStatus.forgot_password);
  const [email, setEmail] = useState("");

  const changeState = (value) => {
    setCompState(value);
  };

  const changeEmail = (value) => {
    setEmail(value);
  };

  const slides = {
    [authStatus.forgot_password]: ForgotPasswordForm,
    [authStatus.otp]: OtpFrom,
    [authStatus.reset_password]: ResetPassword,
  };

  const Handler = slides[compState];
  return (
    <div className="w-[480px]">
      <Handler
        changeState={changeState}
        email={email}
        changeEmail={changeEmail}
      />
    </div>
  );
};

export default ForgotPasswordComp;
