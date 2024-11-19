import CartMain from "@/components/cart/CartMain";
import DashboardPage from "@/components/common/DashboardPage";
import PageHeading from "@/components/common/PageHeading";
import { useTranslations } from "next-intl";

const CartPage = () => {
  const t = useTranslations("cartPage");
  return (
    <DashboardPage>
      <PageHeading pageName={t("my_cart")} />
      <CartMain />
    </DashboardPage>
  );
};

export default CartPage;
