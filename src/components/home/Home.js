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

const Home = () => {
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

  const handleCardClick = (value) => {
    console.log(value);
  };
  let { offers } = offersData;
  offers = offers.slice(0, 3);
  return (
    <div className="p-6 flex flex-col gap-6">
      <OfferBox title="Offers">
        {offers.map((item, index) => (
          <OfferCard
            key={index}
            item={item}
            className="w-[32%]"
            path="offers"
          />
        ))}
      </OfferBox>
      <CustomCarousel title="Our Top Services Categories">
        {servicesList.map((item, index) => (
          <CarouselItem key={index} className="basis-36 cursor-pointer p-0">
            <CarouselCard onClick={handleCardClick} item={item} />
          </CarouselItem>
        ))}
      </CustomCarousel>
      <CustomCarousel title="Our Top Products Categories">
        {productList.map((item, index) => (
          <CarouselItem
            onClick={handleCardClick}
            key={index}
            className="basis-36 cursor-pointer p-0"
          >
            <CarouselCard item={item} />
          </CarouselItem>
        ))}
      </CustomCarousel>
    </div>
  );
};

export default Home;
