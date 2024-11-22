import { CustomButton } from "@/components/common/CustomButtons";
import { authStatus } from "@/lib/constants";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const EmailCard = ({ email, changeState }) => {
  const t = useTranslations("otpPage");
  const router = useRouter();

  return (
    <div className="flex items-center justify-between p-3 px-5 rounded-xl bg-white opacity-50">
      <div className="flex items-center gap-3">
        <Mail className="text-lg" />
        <p>{email}</p>
      </div>
      <CustomButton
        onClick={() => changeState(authStatus.forgot_password)}
        className="px-5 py-0 rounded-xl w-max bg-transparent hover:bg-[var(--main-gray)] duration-300 text-black !border-[light-gray] border-[2px]"
      >
        {t("change")}
      </CustomButton>
    </div>
  );
};

export default EmailCard;
