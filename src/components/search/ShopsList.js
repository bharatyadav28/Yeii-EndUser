import shopsList from "@/lib/dummyData/shopsList.json";
import ShopCard from "./ShopCard";
import { useRouter } from "next/navigation";
import { noShops } from "@/lib/svg_icons";
import { useTranslations } from "next-intl";
const ShopsList = ({ query }) => {
  const t = useTranslations("searchPage");
  // const shopsList = [];
  console.log(shopsList);
  const router = useRouter();
  const handleCardClick = (id) => {
    router.push(`/search/shop/${id}?${query ? "query=" + query : ""}`);
  };
  return shopsList.length ? (
    <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 !overflow-y-auto rounded-t-2xl">
      {shopsList.map((item) => (
        <ShopCard onClick={handleCardClick} key={item.id} item={item} />
      ))}
    </div>
  ) : (
    <div className="self-center mt-[20%] flex flex-col items-center gap-2 text-[var(#303F49)] text-base ">
      {noShops}
      <div className="text-black">{t("no_shop_available")}</div>
      <div>{t("try_different_date")}</div>
    </div>
  );
};

export default ShopsList;
