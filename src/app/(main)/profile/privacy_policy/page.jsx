import React from "react";
import { useTranslations } from "next-intl";

import AuthPage from "@/components/common/AuthPage";
import MainContent from "@/components/common/MainContent";
import Policy from "@/components/common/Policy";

const PrivacyPolicyPage = () => {
  const t = useTranslations("profilePage");

  return (
    <div>
      <AuthPage
        showHeader={true}
        heading={t("privacy_policy")}
        route="/profile/"
      >
        <MainContent className="mt-8 !bg-[#fff] ">
          <Policy title={t("privacy_policy")}>
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
          </Policy>
        </MainContent>
      </AuthPage>
    </div>
  );
};

export default PrivacyPolicyPage;
