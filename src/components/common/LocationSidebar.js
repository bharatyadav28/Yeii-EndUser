import { ChevronLeft, LocateFixedIcon, Plus } from "lucide-react";
import { SearchInput } from "./customInput";
import { useTranslations } from "next-intl";
import { useState } from "react";

const LocationSidebar = ({ open, onOpenChange }) => {
  const t = useTranslations("locationSidebar");
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    onOpenChange();
  };

  return (
    open && (
      <>
        <div
          onClick={handleClick}
          className="w-screen h-screen bg-black/50 fixed top-0 left-0 right-0 bottom-0 z-[900]"
        />
        <div className="bg-[var(--light-gray)] fixed top-0 left-0 bottom-0 w-[500px] z-[1000] animate-slide p-6 pb-0 flex flex-col">
          <button
            onClick={handleClick}
            className="p-3 bg-white rounded-full absolute"
          >
            <ChevronLeft size={18} />
          </button>
          <h1 className="text-lg font-bold text-center mt-2">{t("heading")}</h1>

          <SearchInput
            className="mt-8"
            placeholder={t("search_placeholder")}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <div className="mt-4 text-[var(--main-pink)] text-sm font-semibold bg-white rounded-2xl flex flex-col">
            <button className="flex items-center gap-2 p-5 py-7 border-b-2 border-dashed">
              <LocateFixedIcon size={20} />
              {t("use_my_location")}
            </button>
            <button className="flex items-center gap-2 p-5 py-7">
              <Plus size={20} /> {t("login_to_add")}
            </button>
          </div>
        </div>
      </>
    )
  );
};

export default LocationSidebar;
