import { DarkButton } from "@/components/common/CustomButtons";
import { TextInput } from "@/components/common/customInput";
import { EmailIcon } from "@/lib/svg_icons";
import { useTranslations } from "next-intl";
import AuthHeading from "../common/AuthHeading";
import { authStatus } from "@/lib/constants";

const ForgotPasswordForm = ({ changeState, email, changeEmail }) => {
  const t = useTranslations("forgotPassword");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    changeState(authStatus.otp);
  };

  return (
    <>
      <AuthHeading heading={t("heading")}>
        {<span className="text-[0.9rem]">{t("subHeading")}</span>}
      </AuthHeading>
      <form onSubmit={handleSubmit}>
        <TextInput
          className="text-sm"
          customIcon={<EmailIcon />}
          type="email"
          label={t("email")}
          placeholder={t("emailPlaceholder")}
          value={email}
          onChange={(e) => changeEmail(e.target.value)}
          required={true}
        />
        <DarkButton isSubmit={true} className="w-full p-7 text-lg mt-4">
          {t("sent_otp")}
        </DarkButton>
      </form>
    </>
  );
};

export default ForgotPasswordForm;
