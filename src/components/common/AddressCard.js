import { locationIcon, locationIconBlack, recentIcon } from "@/lib/svg_icons";
import { Check, EllipsisVertical } from "lucide-react";
import { useTranslations } from "next-intl";
import { LightButton } from "./CustomButtons";

const AddressCard = ({
  address,
  isSelected,
  isCompleteScreen,
  mapAddress,
  onClick,
}) => {
  const t = useTranslations("locationSidebar");

  return (
    <div className="bg-white p-4 rounded-2xl my-2">
      {mapAddress && (
        <div className="text-[0.65rem] text-[var(--lightblue)] pb-2">
          {t("delivering_your_order")}
        </div>
      )}
      <div className="flex items-center gap-2">
        <div className="p-2 bg-white rounded-full border-[1px] self-start text-white">
          {isSelected || mapAddress || isCompleteScreen
            ? locationIcon
            : locationIconBlack}
        </div>

        <div>
          <div className="text-sm font-bold flex items-center gap-1">
            {address.type}{" "}
            {isSelected && (
              <Check size={15} className="text-[var(--main-pink)]" />
            )}
          </div>
          <div className="text-[0.67rem] text-[var(--main-gray)] max-w-[80%] py-1">
            {address.address}
          </div>
        </div>
        {!mapAddress && !isCompleteScreen && (
          <button className="p-1 bg-white rounded-full border-[1px] border-[var(--light-gray)]">
            <EllipsisVertical size={10} className="text-[var(--main-pink)]" />
          </button>
        )}
        {(mapAddress || isCompleteScreen) && (
          <LightButton
            className="text-xs !p-0 w-20  font-bold !text-[var(--main-pink)] border-2 !bg-white  "
            onClick={onClick}
          >
            {t("change")}
          </LightButton>
        )}
      </div>
    </div>
  );
};

export default AddressCard;
