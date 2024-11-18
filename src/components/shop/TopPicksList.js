import { useTranslations } from "next-intl";
import CustomCarousel from "../common/CustomCarousel";
import { CarouselItem } from "../ui/carousel";
import { Star } from "@/lib/svg_icons";
import { Card } from "../ui/card";
import Image from "next/image";
import { AddButton } from "../common/CustomButtons";
import { useSelector } from "react-redux";

const ItemCard = ({ item, t, handleClick, addProduct, removeProduct }) => {
  const count = useSelector((state) => state.cart.items[item.id]?.count || 0);

  const onCountChange = (cnt) => {
    //console.log({ count, cnt });
    if (cnt > count) {
      addProduct(item);
    } else if (cnt < count) removeProduct(item.id);
  };

  return (
    <CarouselItem className="basis-44 cursor-pointer p-0">
      <Card
        onClick={() => handleClick(item.id, item)}
        className=" w-44 h-56 flex flex-col items-center gap-2 p-2 bg-white rounded-2xl border-none"
      >
        <div className="w-[155px] h-[100px] overflow-hidden rounded-2xl">
          <Image
            src={item.image_url}
            height={200}
            width={200}
            alt={item.name}
          />
        </div>
        <div className="text-sm font-bold text-gray-700">{item.name}</div>
        <div className="text-sm">{item.price}</div>

        <AddButton count={count} onClick={onCountChange}>
          {t("add")}
        </AddButton>
      </Card>
    </CarouselItem>
  );
};
const TopPicksList = ({ data, handleClick, addProduct, removeProduct }) => {
  const t = useTranslations("shopPage");

  return (
    <CustomCarousel
      classNames={{
        className: "!bg-[var(--color)]",
        titleClass: "!text-base text-[var(--main-pink)] relative",
      }}
      title={
        <>
          <Star className="absolute -top-2 left-3" width={8} height={8} />
          <Star className="absolute -top-2 left-44" width={10} height={10} />
          {t("top_picks")}
          <Star className="absolute left-6" width={6} height={6} />
          <Star className="absolute left-32" width={10} height={10} />
        </>
      }
    >
      {data.map((item, index) => (
        <ItemCard
          key={index}
          item={item}
          t={t}
          handleClick={handleClick}
          addProduct={addProduct}
          removeProduct={removeProduct}
        />
      ))}
    </CustomCarousel>
  );
};

export default TopPicksList;
