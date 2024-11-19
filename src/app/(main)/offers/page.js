import DashboardPage from "@/components/common/DashboardPage";
import MainHeader from "@/components/common/MainHeader";
import OfferCard from "@/components/home/OfferCard";
import { offersIcon } from "@/lib/svg_icons";
import offersData from "@/lib/dummyData/offersData.json";

const OffersPage = () => {
  const heading = <h1 className="text-xl font-bold text-white ">Offers</h1>;

  const { offers } = offersData;
  return (
    <DashboardPage>
      <MainHeader heading={heading} icon={offersIcon} route="/" />
      <div className="p-6 bg-[var(--light-gray)] grid grid-cols-3 gap-3 overflow-y-auto ">
        {offers.map((item) => (
          <OfferCard key={item.id} item={item} path="offers" />
        ))}
      </div>
    </DashboardPage>
  );
};

export default OffersPage;
