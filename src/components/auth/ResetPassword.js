import { useTranslations } from "next-intl";

import NewPassword from "@/components/auth/NewPassword";
import AuthHeading from "@/components/common/AuthHeading";
import AuthPage from "@/components/common/AuthPage";

const ResetPassword = () => {
  const t = useTranslations("resetPage");

  return (
    <>
      <AuthHeading heading={t("heading")}>{t("subHeading")}</AuthHeading>
      <NewPassword />
    </>
  );
};

export default ResetPassword;
