import React, { useState } from "react";
import { SearchInput } from "./customInput";
import { LocateFixedIcon, Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { status } from "@/lib/constants";
import AddressList from "./AddressList";

const LocationComponent = ({ changeState }) => {
  const t = useTranslations("locationSidebar");
  const [inputValue, setInputValue] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <h1 className="text-lg font-bold text-center mt-2">{t("my_location")}</h1>

      <SearchInput
        className="mt-8"
        placeholder={t("search_placeholder")}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <div className="mt-4 mb-2 text-[var(--main-pink)] text-sm font-semibold bg-white rounded-2xl flex flex-col">
        <button
          onClick={() => changeState(status.map)}
          className="flex items-center gap-2 p-5 py-7 border-b-2 border-dashed"
        >
          <LocateFixedIcon size={20} />
          {t("use_my_location")}
        </button>
        <button
          onClick={() => setIsLoggedIn(true)}
          className="flex items-center gap-2 p-5 py-7"
        >
          <Plus size={20} />{" "}
          {t(isLoggedIn ? "add_new_address" : "login_to_add")}
        </button>
      </div>
      {isLoggedIn && <AddressList />}
    </>
  );
};

export default LocationComponent;
