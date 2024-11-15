import {
  DiscountIcon,
  locationIconBlack,
  RatingHalf,
  RatingIcon,
} from "@/lib/svg_icons";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const ShopCard = ({ item, onClick }) => {
  const getRatings = (rating) => {
    const arr = [
      <RatingHalf key={0} />,
      <RatingHalf key={1} />,
      <RatingHalf key={2} />,
      <RatingHalf key={3} />,
      <RatingHalf key={4} />,
    ];

    for (let i = 0; i < rating; i++) {
      arr[i] = <RatingIcon key={i} />;
    }
    return arr;
  };
  return (
    <div
      onClick={() => onClick(item.shopId)}
      className="flex items-center gap-2 bg-white p-2 rounded-3xl cursor-pointer"
    >
      <Image
        src="/offerImage.png"
        width={100}
        height={100}
        alt={item.title}
        className="w-[140px] h-[140px] rounded-3xl "
      />
      <div className="flex-grow flex items-center justify-between">
        <div className="flex flex-col gap-2 items-start">
          <h1 className="text-base font-bold">{item.title}</h1>
          <div className="flex items-center text-xs gap-3">
            {locationIconBlack} {item.distance}
          </div>
          <div className="flex items-center text-[0.5rem]">
            {getRatings(item.rating)}{" "}
            <span className="font-bold ml-2">{item.rating}</span>{" "}
            {"(" + item.reviews + ")"}
          </div>
          <div className="flex items-center gap-1 text-[0.54rem] p-2 rounded-full bg-[#10B6FF0A]">
            <DiscountIcon width={15} /> {item.discount}
          </div>
        </div>
        <ChevronRight />
      </div>
    </div>
  );
};

export default ShopCard;
