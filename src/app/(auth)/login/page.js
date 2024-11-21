import Login from "@/components/auth/Login";
import AuthHeading from "@/components/common/AuthHeading";
import { MainLogo } from "@/lib/svg_icons";
import { useTranslations } from "next-intl";

const LoginPage = () => {
  const t = useTranslations("loginPage");
  return (
    <div className="relative w-full h-screen">
      <div className="h-full w-[50%] bg-[url('/login-bg.jpeg')] bg-cover bg-center"></div>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#1F000799]">
        <div className="absolute top-[50%] -translate-y-[50%] left-[12%] flex flex-col items-center">
          <MainLogo width={250} height={200} />
          <h1 className="text-5xl text-white font-bold">Brincos Dieras</h1>
        </div>
        <div className="absolute top-0 right-0 bottom-0 w-[57%] bg-white rounded-l-[80px] flex flex-col items-center justify-center">
          <AuthHeading heading={t("heading")}>{t("subHeading")}</AuthHeading>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
