import { CarouselItem } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

const CarouselCard = ({ item }) => {
  return (
    <CarouselItem className="basis-36 cursor-pointer p-0">
      <Card className=" w-36 h-32 flex flex-col justify-center items-center gap-4 p-4 bg-white rounded-2xl border-none">
        {item.icon}
        <div className="text-sm font-medium text-gray-700">{item.name}</div>
      </Card>
    </CarouselItem>
  );
};

export default CarouselCard;
