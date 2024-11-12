import React from "react";
import { useTranslations } from "next-intl";

import AuthPage from "@/components/common/AuthPage";
import MainContent from "@/components/common/MainContent";
import OptionCard from "@/components/profile/OptionCard";
import {
  notificationIcon,
  businessAvailabilityIcon,
  languageIcon,
  resetPasswordIcon,
  deleteAccountIcon,
} from "@/lib/svg_icons";

function SettingsPage() {
  const t = useTranslations("profilePage");

  const settingsMenu = [
    {
      id: 1,
      icon: languageIcon,
      title: t("language"),
      route: "/language",
    },
    {
      id: 2,
      icon: resetPasswordIcon,
      title: t("reset_Password"),
      route: "/reset-password",
    },

    {
      id: 3,
      icon: deleteAccountIcon,
      title: t("delete_account"),
      route: "#",
    },
  ];

  return (
    <div>
      <AuthPage showHeader={true} heading={t("settings")} route="/profile/">
        <div className="flex flex-col gap-3 px-5 mt-10 overflow-y-auto bg-[#fff] w-full !h-max  mb-auto rounded-xl pt-2 pb-1">
          {settingsMenu.map((option) => (
            <OptionCard
              key={option.id}
              option={option}
              isSettings={true}
              // extraInfo={getExtraInfo(option)}
              isLanguage={option.title === t("language")}
              className={`pb-5 !rounded-none ${
                option.id === settingsMenu.length ? "border-none" : ""
              }`}
            />
          ))}
        </div>
      </AuthPage>
    </div>
  );
}

export default SettingsPage;
