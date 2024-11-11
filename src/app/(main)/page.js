import DashboardPage from "@/components/common/DashboardPage";
import PageHeading from "@/components/common/PageHeading";
import Home from "@/components/home/Home";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("homepage");
  return (
    <DashboardPage>
      <PageHeading pageName={t("heading")} showHeader={true} />
      <Home />
    </DashboardPage>
  );
};

export default Page;
