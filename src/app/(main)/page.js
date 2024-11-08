import DashboardPage from "@/components/common/DashboardPage";
import PageHeading from "@/components/common/PageHeading";
import Home from "@/components/home/Home";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("homepage");
  return (
    <DashboardPage>
      <PageHeading pageName={t("heading")} />
      <Home />
    </DashboardPage>
  );
};

export default page;
