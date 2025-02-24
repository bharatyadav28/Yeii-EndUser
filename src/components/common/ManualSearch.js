import { BackwardButton } from "./CustomButtons";
import { useTranslations } from "next-intl";
import { SearchInput } from "./customInput";
import {
  cakeIcon,
  cameraIcon,
  candyIcon,
  decorationIcon,
  drinkIcon,
  eventIcon,
  flowerIcon,
  icecreamIcon,
  recentIcon,
  takoIcon,
  videoIcon,
} from "@/lib/svg_icons";
import CarouselCard from "../home/CarouselCard";
import { useState } from "react";
import { useRouter } from "next/navigation";

const recentSearchList = [
  "Decoration",
  "Animations",
  "Photograph",
  "Drinks",
  "Cakes",
];

const servicesList = [
  { icon: decorationIcon, name: "Decoration" },
  { icon: videoIcon, name: "Animations" },
  { icon: cameraIcon, name: "Photograph" },
  { icon: eventIcon, name: "Event rooms" },
  { icon: videoIcon, name: "Animations" },
  { icon: decorationIcon, name: "Decoration" },
];
const productList = [
  { icon: cakeIcon, name: "Cakes" },
  { icon: icecreamIcon, name: "Ice-creams" },
  { icon: flowerIcon, name: "Flower shop" },
  { icon: drinkIcon, name: "Drinks" },
  { icon: takoIcon, name: "Tacos" },
  { icon: candyIcon, name: "Candy" },
];

const ManualSearch = ({ open, handleOpen }) => {
  const t = useTranslations("manualSearch");
  const [searchValue, setSearchValue] = useState("");
  const route = useRouter();

  const handleSearch = (value) => {
    route.push(`/search?query=${searchValue}&category=${value}`);
  };

  return (
    open && (
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-[var(--light-gray)] z-[1000] p-6 flex flex-col items-center gap-8  overflow-y-auto">
        <div className="w-full flex items-center ">
          <BackwardButton onClick={handleOpen} />
          <h1 className="text-lg font-semibold flex-grow text-center ">
            {t("search")}
          </h1>
        </div>
        <div className="w-[60%] flex flex-col gap-6">
          <SearchInput
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder={t("search_for")}
          />
          <div>
            <h1 className="text-base font-semibold">{t("recent_search")}</h1>
            <div className="flex flex-col gap-3 my-4">
              {recentSearchList.map((search, index) => (
                <div
                  key={index}
                  className="text-sm flex gap-3 text-[var(--main-gray)]"
                >
                  {recentIcon} {search}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-lg font-semibold">{t("top_services")}</h1>
            <div className="flex gap-3 my-4">
              {servicesList.map((item, index) => (
                <CarouselCard onClick={handleSearch} key={index} item={item} />
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-lg font-semibold">{t("top_products")}</h1>
            <div className="flex gap-3 my-4">
              {productList.map((item, index) => (
                <CarouselCard onClick={handleSearch} key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ManualSearch;
