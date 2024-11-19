"use client";

import CustomCarousel from "../common/CustomCarousel";
import CarouselCard from "./CarouselCard";
import OfferBox from "../common/OfferBox";
import OfferCard from "./OfferCard";
import {
  buffeIcon,
  cakeIcon,
  cameraIcon,
  candyIcon,
  decorationIcon,
  drinkIcon,
  eventIcon,
  flowerIcon,
  icecreamIcon,
  takoIcon,
  videoIcon,
} from "@/lib/svg_icons";
import { Ellipsis } from "lucide-react";
import offersData from "@/lib/dummyData/offersData.json";
import { CarouselItem } from "../ui/carousel";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";

const servicesList = [
  { icon: decorationIcon, name: "Decoration" },
  { icon: videoIcon, name: "Animations" },
  { icon: cameraIcon, name: "Photograph" },
  { icon: eventIcon, name: "Event rooms" },
  { icon: videoIcon, name: "Animations" },
  { icon: decorationIcon, name: "Decoration" },
  { icon: cameraIcon, name: "Photograph" },
  {
    icon: <Ellipsis size={30} className="text-yellow-400" />,
    name: "Others",
  },
];
const productList = [
  { icon: cakeIcon, name: "Cakes" },
  { icon: icecreamIcon, name: "Ice-creams" },
  { icon: flowerIcon, name: "Flower shop" },
  { icon: drinkIcon, name: "Drinks" },
  { icon: takoIcon, name: "Tacos" },
  { icon: candyIcon, name: "Candy" },
  { icon: buffeIcon, name: "Buffet" },
  {
    icon: <Ellipsis size={30} className="text-blue-400" />,
    name: "Others",
  },
];

const Home = () => {
  const t = useTranslations("homepage");
  const params = useSearchParams();
  const router = useRouter();

  const date = params.get("date");

  const handleCardClick = (value) => {
    console.log(value);
    router.push(`/search?${date ? "date=" + date + "&" : ""}category=${value}`);
  };

  let { offers } = offersData;
  offers = offers.slice(0, 3);

  return (
    <>
      <div className="p-6 flex flex-col">
        {date && (
          <div className="text-sm pb-2">
            {t("showing_results")}{" "}
            <span className="text-[var(--main-pink)] font-bold">{date}</span>
          </div>
        )}
        <OfferBox t={t} title={t("offers")}>
          {offers.map((item, index) => (
            <OfferCard
              key={index}
              item={item}
              className="w-[32%]"
              path="offers"
            />
          ))}
        </OfferBox>
        <CustomCarousel
          classNames={{
            className: " mt-5",
          }}
          title={t("top_services")}
        >
          {servicesList.map((item, index) => (
            <CarouselItem key={index} className="basis-36 cursor-pointer p-0">
              <CarouselCard onClick={handleCardClick} item={item} />
            </CarouselItem>
          ))}
        </CustomCarousel>
        <CustomCarousel
          classNames={{
            className: " mt-5",
          }}
          title={t("top_products")}
        >
          {productList.map((item, index) => (
            <CarouselItem key={index} className="basis-36 cursor-pointer p-0">
              <CarouselCard onClick={handleCardClick} item={item} />
            </CarouselItem>
          ))}
        </CustomCarousel>
      </div>
    </>
  );
};

export default Home;
