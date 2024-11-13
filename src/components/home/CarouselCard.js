"use client";

import { Card } from "../ui/card";

const CarouselCard = ({ item, onClick }) => {
  return (
    <Card
      onClick={() => onClick(item.name)}
      className=" w-36 h-32 flex flex-col justify-center items-center gap-4 p-4 bg-white rounded-2xl border-none"
    >
      {item.icon}
      <div className="text-sm font-medium text-gray-700">{item.name}</div>
    </Card>
  );
};

export default CarouselCard;
