import React from "react";
import { useTranslations } from "next-intl";

import AuthPage from "@/components/common/AuthPage";
import MainContent from "@/components/common/MainContent";
import Policy from "@/components/common/Policy";

const PrivacyPolicyPage = () => {
  const t = useTranslations("profilePage");

  return (
    <AuthPage
      showHeader={true}
      heading={t("privacy_policy")}
      route="/profile/"
      className="bg-[url('/profile-main-bg.png')]"
    >
      <MainContent className="mt-8 !bg-[#fff] ">
        <Policy title={t("privacy_policy")}>
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
        </Policy>
      </MainContent>
    </AuthPage>
  );
};

export default PrivacyPolicyPage;
