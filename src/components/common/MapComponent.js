import { useState } from "react";
import { SearchInput } from "./customInput";
import { useTranslations } from "next-intl";
import { DarkButton, LightButton } from "./CustomButtons";
import { status } from "@/lib/constants";

const MapComponent = ({ changeState }) => {
  const t = useTranslations("locationSidebar");
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <h1 className="text-lg font-bold text-center mt-2">
        {t("select_location")}
      </h1>

      <SearchInput
        className="mt-8"
        placeholder={t("search_placeholder")}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <LightButton onClick={() => changeState(status.change_location)}>
        {t("change")}
      </LightButton>
      <DarkButton onClick={() => changeState(status.complete_address)}>
        {t("confirm_location")}
      </DarkButton>
    </>
  );
};

export default MapComponent;
