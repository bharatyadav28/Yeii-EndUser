import shopsList from "@/lib/dummyData/shopsList.json";
import ShopCard from "./ShopCard";
import { useRouter } from "next/navigation";
const ShopsList = ({ query }) => {
  console.log(shopsList);
  const router = useRouter();
  const handleCardClick = (id) => {
    router.push(`/search/shop/${id}?query=${query}`);
  };
  return (
    <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 !overflow-y-auto rounded-t-2xl">
      {shopsList.map((item) => (
        <ShopCard onClick={handleCardClick} key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ShopsList;
