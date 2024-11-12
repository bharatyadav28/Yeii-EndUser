import { locationIcon, locationIconBlack, recentIcon } from "@/lib/svg_icons";
import { Check, EllipsisVertical } from "lucide-react";
import React from "react";

const AddressCard = ({ address, isSelected, isRecent }) => {
  return (
    <div className="flex bg-white items-center gap-2 p-4 rounded-2xl my-2">
      {isRecent ? (
        <div className="self-start p-2">{recentIcon}</div>
      ) : (
        <div className="p-2 bg-white rounded-full border-[1px] self-start text-white">
          {isSelected ? locationIcon : locationIconBlack}
        </div>
      )}
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
      {!isRecent && (
        <button className="p-1 bg-white rounded-full border-[1px] border-[var(--light-gray)]">
          <EllipsisVertical size={10} className="text-[var(--main-pink)]" />
        </button>
      )}
    </div>
  );
};

export default AddressCard;
