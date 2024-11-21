"use client";

import { PasswordInput, TextInput } from "@/components/common/customInput";
import { useState } from "react";
import { DarkButton, LightButton } from "@/components/common/CustomButtons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { EmailIcon, googleIcon, UserIcon } from "@/lib/svg_icons";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const t = useTranslations("loginPage");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await userLogin({ email, password, type: "supplier" });

    // if (!response.success) {
    //   return;
    // }

    router.push("/");
  };

  return (
    <div className="w-96">
      <form onSubmit={handleSubmit}>
        {/* Email */}
        <TextInput
          divClass="border-2"
          className="text-sm"
          customIcon={<EmailIcon />}
          type="email"
          label={t("email")}
          placeholder={t("emailPlaceholder")}
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <PasswordInput
          className="border-2"
          label={t("password")}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required={true}
        />

        {/* Forgot password */}
        <div className="flex justify-end items-end mb-6 text-xs">
          <Link
            href="/forgot_password"
            className="text-[var(--lightblue)] hover:underline"
          >
            {t("forgotPassword")}
          </Link>
        </div>

        {/* Login Button */}
        <DarkButton
          isSubmit={true}
          className="w-full text-base p-7 rounded-[15px]"
        >
          {t("login")}
        </DarkButton>
      </form>
      <p className="text-center text-gray-400 mt-4 text-xs">
        {t("dontHaveAccount")}{" "}
        <Link
          href="/signup"
          className="text-[var(--lightblue)] hover:underline"
        >
          {t("createAccount")}
        </Link>
      </p>
      <p className="text-xs text-center text-[var(--main-gray)] font-bold my-5">
        {t("or")}
      </p>
      <LightButton className="!bg-white border-2 w-full text-base mb-2 ">
        {googleIcon}
        {t("continue_with_google")}
      </LightButton>
      <LightButton
        onClick={() => router.push("/")}
        className="!bg-white border-2 w-full text-base"
      >
        {<UserIcon fill="black" />}
        {t("continue_as_guest")}
      </LightButton>
    </div>
  );
};

export default LoginForm;
