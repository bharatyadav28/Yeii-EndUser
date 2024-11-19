import { useTranslations } from "next-intl";
import recommendedData from "@/lib/dummyData/RecommendedData.json";
import Image from "next/image";
import { DarkButton } from "../common/CustomButtons";
import { Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/lib/store/feature/cart/slice";

const ProductCard = ({ product, addProduct }) => {
  return (
    <div className="relative min-w-[100px] pt-2">
      <DarkButton
        onClick={() => addProduct(product)}
        className="absolute !p-0 !w-5 !h-5 rounded-sm -right-2 top-0"
      >
        <Plus />
      </DarkButton>
      <Image
        src={product.image_url}
        width={100}
        height={100}
        alt={product.name}
        className="w-[100px] h-[100px] rounded-2xl"
      />
      <div className="text-xs py-1">{product.name}</div>
      <div className="text-sm text-gray-700">{product.price}</div>
    </div>
  );
};
const Recommended = () => {
  const t = useTranslations("cartPage");
  const suppierId = useSelector((state) => state.cart.suppierId);
  const dispatch = useDispatch();

  const { recommended } = recommendedData;

  const addProduct = (item) => {
    dispatch(
      addItem({
        suppierId: suppierId,
        type: item.type ?? "service",
        item,
      })
    );
  };
  return (
    <div className="bg-white rounded-2xl p-5 max-w-[100%]">
      <div className="mb-3">{t("recommended_products")}</div>
      <div className="flex gap-3 !overflow-x-auto w-full">
        {recommended.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addProduct={addProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
