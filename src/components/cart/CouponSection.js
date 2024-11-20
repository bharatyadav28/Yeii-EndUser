import { DiscountIcon } from "@/lib/svg_icons";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { LightButton } from "../common/CustomButtons";
import { ChevronRight, X } from "lucide-react";
import CouponSidebar from "../common/CouponSidebar";

const CouponSection = () => {
  const t = useTranslations("cartPage");
  const [isApplied, setIsApplied] = useState(true);
  const [open, setOpen] = useState(false);

  const price = "$75";
  const couponCount = 7;

  const handleApply = () => {
    setIsApplied((prev) => !prev);
  };

  const onOpenChange = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      {isApplied ? (
        <div className="flex items-center justify-between p-4 py-3 rounded-full bg-[var(--main-green)]">
          <div className="flex items-center gap-1">
            {
              <DiscountIcon
                width={24}
                height={25}
                fill={{
                  upper: "white",
                  inner: "green",
                }}
              />
            }
            <div className="text-sm text-white">
              {t("you_saved")} {price} {t("on_this_order")}
            </div>
          </div>
          <LightButton
            onClick={handleApply}
            className="!p-0 !w-6 !h-6 !bg-transparent hover:!bg-transparent !text-white"
          >
            <X />
          </LightButton>
        </div>
      ) : (
        <div
          onClick={onOpenChange}
          className="flex items-center justify-between p-4 py-3 rounded-full bg-white cursor-pointer"
        >
          <div className="flex items-center gap-1">
            {
              <DiscountIcon
                width={24}
                height={25}
                fill={{
                  upper: "var(--main-pink)",
                }}
              />
            }
            <div className="text-sm">{t("apply_coupon")}</div>
          </div>
          <LightButton className="!p-0 !w-20 flex items-center !h-6 !bg-transparent hover:!bg-transparent !text-[var(--main-gray)] text-[0.6rem]">
            {couponCount} {t("more_offers")}
            <ChevronRight />
          </LightButton>
        </div>
      )}
      <CouponSidebar open={open} onOpenChange={onOpenChange} />
    </>
  );
};

export default CouponSection;
