import DashboardPage from "@/components/common/DashboardPage";
import MainHeader from "@/components/common/MainHeader";
import ShopComp from "@/components/shop/ShopComp";

const Shop = ({ params }) => {
  const { path, shopId } = params;

  return (
    <DashboardPage className="relative overflow-y-auto bg-[var(--light-gray)]">
      <MainHeader className="h-48 !block p-4" route={`/${path}`} />
      <ShopComp />
    </DashboardPage>
  );
};

export default Shop;
