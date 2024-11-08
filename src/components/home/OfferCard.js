import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OfferCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl flex justify-between items-center min-w-[32%] p-2">
      <div className="flex flex-col gap-2 p-2">
        <div className="text-2xl text-[var(--lightblue)] font-bold ">
          {item.discount}Off{" "}
          <span className="text-sm text-gray-500 font-light ">on</span>
        </div>
        <div className="flex gap-1">
          <Image
            src={item.image}
            alt={item.title}
            width={100}
            height={100}
            className="w-[24px] h-[24px] rounded-full overflow-hidden "
          />
          {item.title}
        </div>
        <Link
          href={item.link}
          className="text-sm text-[var(--main-pink)] flex items-center gap-1 "
        >
          Visit shop <ChevronRight size={14} />
        </Link>
      </div>
      <Image src={item.image} alt={item.title} width={178} height={158} />
    </div>
  );
};

export default OfferCard;
