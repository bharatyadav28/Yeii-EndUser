import Image from "next/image";
import { AddButton } from "../common/CustomButtons";
import { useTranslations } from "use-intl";
import { RatingHalf, RatingIcon } from "@/lib/svg_icons";

const ProductsCard = ({ item, className, handleClick }) => {
  const t = useTranslations("shopPage");

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
      onClick={() => handleClick(item.id)}
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
        <div className="text-[0.5rem] flex items-center gap-2 mb-3">
          <div className="flex items-center">{getRatings()}</div>
          {item.rating.average + "(" + item.rating.total_reviews + ")"}
        </div>
        <AddButton>{t("add")}</AddButton>
      </div>
    </div>
  );
};

export default ProductsCard;
