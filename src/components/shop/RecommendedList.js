import { useTranslations } from "next-intl";
import ProductsCard from "./ProductsCard";

const RecommendedList = ({ data, handleClick, addProduct, removeProduct }) => {
  const t = useTranslations("shopPage");
  return (
    <div className="pb-5">
      <h1 className="text-base font-semibold">
        {t("recommended")} {"(" + data.length + ")"}
      </h1>
      {data.map((item) => (
        <ProductsCard
          handleClick={handleClick}
          key={item.id}
          item={item}
          addProduct={addProduct}
          removeProduct={removeProduct}
        />
      ))}
    </div>
  );
};

export default RecommendedList;
