"use client";

import ItemsList from "@/components/cart/ItemsList";
import { DarkButton, LightButton } from "../common/CustomButtons";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Recommended from "./Recommended";
import LocationAndDate from "./LocationAndDate";
import PaymentSummary from "./PaymentSummary";
import CouponSection from "./CouponSection";

const CartMain = () => {
  const t = useTranslations("cartPage");
  const cartObj = useSelector((state) => state.cart.items);
  const supplierId = useSelector((state) => state.cart.supplierId);
  const router = useRouter();

  const cartArr = [];
  const keys = Object.keys(cartObj);
  keys.forEach((key) => cartArr.push(cartObj[key]));
  return cartArr.length ? (
    <div className="flex flex-grow overflow-hidden p-6 gap-5">
      <div className="flex-grow flex flex-col overflow-hidden">
        <ItemsList cartArr={cartArr} />
        <LightButton
          onClick={() => router.push(`/cart/shop/${supplierId}`)}
          className="w-full !bg-white !text-[var(--main-pink)]"
        >
          <Plus /> {t("add_more")}
        </LightButton>
      </div>
      <div className="flex flex-col gap-4 w-full !h-full bg-[var(--light-gray)] rounded-2xl p-3 max-w-[42%]">
        <Recommended />
        <LocationAndDate />
        <CouponSection />
        <PaymentSummary />
      </div>
    </div>
  ) : (
    <div className="w-full h-full flex flex-col justify-center items-center gap-4 ">
      <div className="text-xl font-bold">{t("cart_is_empty")}</div>
      <DarkButton onClick={() => router.push("/")}>
        {t("go_to_home")}
      </DarkButton>
    </div>
  );
};

export default CartMain;
