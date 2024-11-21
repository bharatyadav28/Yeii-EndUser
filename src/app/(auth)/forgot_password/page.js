import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import AuthHeading from "@/components/common/AuthHeading";
import AuthPage from "@/components/common/AuthPage";
import { useTranslations } from "next-intl";

const ForgotPassword = () => {
  const t = useTranslations("forgotPassword");
  return (
    <AuthPage showLogo={true}>
      <AuthHeading className="w-1/3 !mb-0" heading={t("heading")}>
        {t("subHeading")}
      </AuthHeading>
      <ForgotPasswordForm />
    </AuthPage>
  );
};

export default ForgotPassword;
