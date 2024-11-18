import { useTranslations } from "next-intl";
import { SearchInput } from "./customInput";
import { useState } from "react";
import CustomSidebar from "./CustomSidebar";
import { coupons } from "@/lib/dummyData/offersData.json";
import { DiscountIcon } from "@/lib/svg_icons";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

const CouponCard = ({ coupon, t }) => {
  const [open, setOpen] = useState(false);
  const isApplied = coupon.id === 1;

  return (
    <div className="p-4 bg-white rounded-2xl text-[0.67rem] ">
      <div className="border-b-2 border-dashed pb-4 flex items-center justify-between ">
        <div className="">
          <div className="flex items-center gap-1 text-xl font-bold">
            <DiscountIcon width={20} height={20} /> {coupon.offerCode}
          </div>
          <div className="text-[var(--lightblue)]">{coupon.description}</div>
        </div>
        {isApplied ? (
          <div className="flex items-center gap-1 text-sm text-green-500">
            <Check size={15} /> {t("applied")}
          </div>
        ) : (
          <button className="text-sm text-[var(--main-pink)] ">
            {t("apply")}
          </button>
        )}
      </div>
      <div className="flex items-center justify-between pt-5">
        <div>{coupon.details}</div>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-1 text-[var(--main-gray)]"
        >
          {t("view_details")}{" "}
          {open ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
        </button>
      </div>
      {open && <div className="text-xl font-bold">{coupon.details}</div>}
    </div>
  );
};
const CouponSidebar = ({ open, onOpenChange }) => {
  const t = useTranslations("couponSidebar");
  const [inputValue, setInputValue] = useState("");

  return (
    <CustomSidebar
      open={open}
      onOpenChange={onOpenChange}
      handleClick={onOpenChange}
      className="animate-slide-right"
    >
      <h1 className="text-lg font-bold text-center mt-2">
        {t("apply_coupon")}
      </h1>

      <SearchInput
        className="mt-8"
        placeholder={t("type_and_apply_coupon")}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        searchIcon={false}
      >
        <div className="text-sm text-gray-300">{t("apply")}</div>
      </SearchInput>
      <h1 className="text-lg font-bold mt-4 ">{t("best_offers")}</h1>
      <div className="flex flex-col gap-3 overflow-y-auto rounded-t-2xl pb-6 mt-3">
        {coupons.map((coupon) => (
          <CouponCard key={coupon.id} coupon={coupon} t={t} />
        ))}
      </div>
    </CustomSidebar>
  );
};

export default CouponSidebar;
