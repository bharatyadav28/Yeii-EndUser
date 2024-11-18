"use client";
import { shop } from "@/lib/dummyData/shopData.json";
import { DiscountIcon, locationIconBlack, starIcon } from "@/lib/svg_icons";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { SearchInput } from "../common/customInput";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import RecommendedList from "./RecommendedList";
import { useSearchParams } from "next/navigation";
import TopPicksList from "./TopPicksList";
import ProductDetails from "./ProductDetails";
import CouponSidebar from "../common/CouponSidebar";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "@/lib/store/feature/cart/slice";
import CartNotice from "../common/CartNotice";

const ShopComp = () => {
  const t = useTranslations("shopPage");
  const params = useSearchParams();
  const [searchInput, setSearchInput] = useState("");
  const [openDetials, setOpenDetails] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [id, setId] = useState(null);
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();

  const handleOpenDetails = () => {
    setOpenDetails((prev) => !prev);
  };

  const handleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };

  const handleProductClick = (id, product) => {
    console.log(id);
    setId(id);
    setProduct(product);
    handleOpenDetails();
  };

  const addProduct = (item) => {
    dispatch(
      addItem({
        suppierId: shop.id,
        type: "product",
        item,
      })
    );
  };
  const removeProduct = (id) => {
    dispatch(removeItem({ id }));
  };

  const query = params.get("query");
  const category = params.get("category");
  const date = params.get("date");
  const type = params.get("type");

  return (
    <>
      <CartNotice />
      <div className=" absolute top-20 left-[50%] -translate-x-[50%] bottom-0 w-[60%] rounded-t-3xl flex flex-col gap-7">
        <div className=" flex flex-col items-center bg-white gap-3 p-5 rounded-3xl">
          <Image
            src={shop.image}
            alt={shop.name}
            width={140}
            height={140}
            className="rounded-full w-[140px] h-[140px] "
          />
          <h1 className="text-base font-bold">{shop.name}</h1>
          <div className="flex items-center gap-6 text-xs text-[var(--main-gray)] ">
            <div className="flex items-center gap-2">
              {locationIconBlack} {shop.address}
            </div>
            <div className="flex items-center gap-2">
              {starIcon} {shop.rating.average}
              {"(" + shop.rating.total_reviews + ")"}
            </div>
          </div>
        </div>

        {/* selected offer */}
        {shop.offers && (
          <div
            onClick={handleSidebar}
            className="bg-white rounded-2xl flex items-center justify-between p-2 px-3 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <DiscountIcon width="44" />
              <div className="">
                <div className="text-base font-semibold">
                  {shop.offers[0].description}
                </div>
                <div className="text-[0.67rem] text-[var(--lightblue)] ">
                  {shop.offers[0].discount} {t("offer_selected")}
                </div>
              </div>
            </div>
            <div className="flex items-center text-[0.5rem] text-[var(--main-gray)]">
              {shop.offers.length - 1} {t("more_offers")}{" "}
              <ChevronRight size={24} />
            </div>
          </div>
        )}

        {/* product search */}
        <div className="flex flex-col gap-3">
          <h1 className="text-base font-semibold">{t("explore_products")}</h1>
          <SearchInput
            placeholder={t("search_products")}
            className="rounded-3xl"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        {/* top picks */}
        {query && (
          <TopPicksList
            handleClick={handleProductClick}
            data={shop.top_picks}
            addProduct={addProduct}
            removeProduct={removeProduct}
          />
        )}

        {/* recommended */}
        <RecommendedList
          handleClick={handleProductClick}
          data={shop.recommended}
          addProduct={addProduct}
          removeProduct={removeProduct}
        />

        {/* product details dialog */}
        {product && (
          <ProductDetails
            product={product}
            openDetials={openDetials}
            handleOpenDetails={handleOpenDetails}
            addProduct={addProduct}
            removeProduct={removeProduct}
          />
        )}
      </div>
      <CouponSidebar open={openSidebar} onOpenChange={handleSidebar} />
    </>
  );
};

export default ShopComp;
