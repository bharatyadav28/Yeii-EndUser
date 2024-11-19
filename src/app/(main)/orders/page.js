import { useTranslations } from "next-intl";

import DashboardPage from "@/components/common/DashboardPage";
import PageHeading from "@/components/common/PageHeading";
import OrdersList from "@/components/orders/OrdersList";

const OrdersPage = () => {
  const t = useTranslations("orderDetails");

  return (
    <DashboardPage>
      <PageHeading pageName={t("Orders")} />
      <OrdersList />
    </DashboardPage>
  );
};

export default OrdersPage;
