"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";

import AuthPage from "@/components/common/AuthPage";
import MainComp from "@/components/manage_account/MainComp";

const ManageProfile = () => {
  const t = useTranslations("profilePage");
  const [isEdit, setIsEdit] = useState(true);
  return (
    <AuthPage
      showHeader={true}
      heading={t("manage_account")}
      route="/profile"
      className="overflow-y-auto"
    >
      <MainComp isEdit={isEdit} setIsEdit={() => setIsEdit((prev) => !prev)} />
    </AuthPage>
  );
};

export default ManageProfile;
