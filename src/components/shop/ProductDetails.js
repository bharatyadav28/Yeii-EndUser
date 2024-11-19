// import product from "@/lib/dummyData/productDetails.json";
import CustomDialog from "../common/CustomDialog";
import Image from "next/image";
import { RatingHalf, RatingIcon } from "@/lib/svg_icons";
import { useTranslations } from "next-intl";
import { AddButton } from "../common/CustomButtons";
import { useSelector } from "react-redux";

const ProductDetails = ({
  openDetials,
  handleOpenDetails,
  addProduct,
  removeProduct,
  product,
}) => {
  const t = useTranslations("shopPage");
  const count = useSelector(
    (state) => state.cart.items[product.id]?.count || 0
  );

  const onCountChange = (cnt) => {
    //console.log({ count, cnt });
    if (cnt > count) {
      addProduct(product);
    } else if (cnt < count) removeProduct(product.id);
  };

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
    <CustomDialog
      open={openDetials}
      handleOpen={handleOpenDetails}
      className="p-0 border-none w-[582px] !bg-white "
    >
      <>
        <div className="w-[582px] h-[330px] overflow-hidden relative">
          <Image
            className="absolute "
            src={product.image_url}
            width={582}
            height={350}
            alt={product.name}
          />
        </div>
        <div className="p-5">
          <div className="border-b-2 border-dashed pb-2">
            <h1 className="text-lg font-semibold">{product.name}</h1>
            <div className="flex justify-between items-center">
              <div className="text-base text-[var(--lightblue)]">
                {product.price}
              </div>
              <div className="text-[0.5rem] flex items-center gap-2 mb-3">
                <div className="flex items-center">
                  {getRatings(product.rating.average)}
                </div>
                {product.rating.average +
                  "(" +
                  product.rating.total_reviews +
                  ")"}
              </div>
            </div>
          </div>
          <div className="py-2 w-[60%] mb-2">
            <h1 className="text-base font-semibold">
              {t("product_description")}
            </h1>
            <div className="text-xs text-[var(--main-gray)] mt-2">
              {product.description}
            </div>
          </div>
          <AddButton
            count={count}
            onClick={onCountChange}
            className="w-full !py-5 !h-12"
          >
            {t("add")}
          </AddButton>
        </div>
      </>
    </CustomDialog>
  );
};

export default ProductDetails;
