import ForgotPasswordComp from "@/components/auth/ForgotPasswordComp";
import AuthPage from "@/components/common/AuthPage";

const ForgotPassword = () => {
  return (
    <AuthPage showLogo={true}>
      <ForgotPasswordComp />
    </AuthPage>
  );
};

export default ForgotPassword;
