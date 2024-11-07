import DashboardPage from "@/components/common/DashboardPage";
import PageHeading from "@/components/common/PageHeading";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("homepage");
  return (
    <DashboardPage>
      <PageHeading pageName={t("heading")} />
    </DashboardPage>
  );
}
