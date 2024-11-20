import { useTranslations } from "next-intl";
import React from "react";
import { useSelector } from "react-redux";
import { DarkButton } from "../common/CustomButtons";
import { ChevronRight } from "lucide-react";

const PaymentSummary = () => {
  const t = useTranslations("cartPage");
  const items = useSelector((state) => state.cart.items);

  const totalItems = Object.keys(items).length;
  const couponApplied = "50OFF";
  const discount = "-80";
  const actualPrice = 880;
  const discountedPrice = 800;

  return (
    <>
      <div className="bg-white p-4 py-3 rounded-2xl flex flex-col gap-1">
        <div className="text-base font-medium">{t("payment_summary")}</div>
        <div>
          <div className="flex justify-between items-center text-xs text-[var(--main-gray)]">
            {t("total_items")}
            <span className="text-base">{totalItems}</span>
          </div>
          <div className="flex justify-between items-center text-xs text-[var(--main-gray)]">
            {t("coupon_applied")}
            <span className="text-base">{couponApplied}</span>
          </div>
          <div className="flex justify-between items-center text-xs text-[var(--main-gray)]">
            {t("discount")}
            <span className="text-base">{discount}</span>
          </div>
        </div>
        <div className="text-xs flex justify-between items-center text-[var(--main-gray)]">
          {t("total_cost")}
          <span>
            <span className="text-base text-black pr-1 font-medium">
              ${discountedPrice}
            </span>
            <span className="strikethrough">{actualPrice}</span>
          </span>
        </div>
      </div>
      <DarkButton className="flex justify-between w-full py-7 rounded-2xl">
        <div className="flex flex-col items-start">
          <div className="text-lg">${discountedPrice}</div>
          <div className="text-[0.65rem]">{t("total_amount")}</div>
        </div>
        <div className="flex items-center text-base">
          {t("place_order")}
          <ChevronRight />
        </div>
      </DarkButton>
    </>
  );
};

export default PaymentSummary;
