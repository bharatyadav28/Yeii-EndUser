import { useTranslations } from "next-intl";
import ProductsCard from "./ProductsCard";

const RecommendedList = ({ data }) => {
  const t = useTranslations("shopPage");
  return (
    <div>
      <h1 className="text-base font-semibold">
        {t("recommended")} {"(" + data.length + ")"}
      </h1>
      {data.map((item) => (
        <ProductsCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default RecommendedList;
