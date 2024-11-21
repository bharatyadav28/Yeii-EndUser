import SignupForm from "@/components/auth/SignupForm";
import AuthHeading from "@/components/common/AuthHeading";
import AuthPage from "@/components/common/AuthPage";
import { useTranslations } from "next-intl";

const SignupPage = () => {
  const t = useTranslations("signupPage");
  return (
    <AuthPage showLogo={true}>
      <AuthHeading className="!mb-0" heading={t("heading")}></AuthHeading>
      <SignupForm />
    </AuthPage>
  );
};

export default SignupPage;
