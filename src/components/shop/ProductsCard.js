import Image from "next/image";
import { LightButton } from "../common/CustomButtons";
import { Plus, Star } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "use-intl";
import { RatingHalf, RatingIcon } from "@/lib/svg_icons";
import { CounterInput } from "../common/customInput";

const ProductsCard = ({ item, className }) => {
  const t = useTranslations("shopPage");
  const [cnt, setCnt] = useState(0);

  const changeCount = () => setCnt(1);

  const getRatings = () => {
    const arr = [
      <RatingHalf key={0} />,
      <RatingHalf key={1} />,
      <RatingHalf key={2} />,
      <RatingHalf key={3} />,
      <RatingHalf key={4} />,
    ];

    for (let i = 0; i < item.rating.average; i++) {
      arr[i] = <RatingIcon key={i} />;
    }
    return arr;
  };
  return (
    <div
      className={
        "my-2 p-3 bg-white rounded-3xl flex items-center gap-3 " + className
      }
    >
      <Image
        src={item.image_url}
        width={100}
        height={100}
        alt={item.name}
        className="w-[140px] h-[140px] rounded-2xl "
      />
      <div className="flex flex-col gap-1">
        <div className="text-sm font-semibold">{item.name}</div>
        <div className="text-sm text-black/75 font-semibold">{item.price}</div>
        <div className="text-[0.5rem] flex items-center gap-2">
          <div className="flex items-center">{getRatings()}</div>
          {item.rating.average + "(" + item.rating.total_reviews + ")"}
        </div>
        {cnt > 0 ? (
          <CounterInput value={cnt} onChange={(data) => setCnt(data)} />
        ) : (
          <LightButton
            onClick={changeCount}
            className="!text-[var(--main-pink)] py-1 font-bold mt-4"
          >
            <Plus /> {t("add")}
          </LightButton>
        )}
      </div>
    </div>
  );
};

export default ProductsCard;
