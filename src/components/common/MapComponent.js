import { useState } from "react";
import { SearchInput } from "./customInput";
import { useTranslations } from "next-intl";
import { DarkButton, LightButton } from "./CustomButtons";
import { status } from "@/lib/constants";
import AddressCard from "./AddressCard";

const selectedAddress = {
  type: "Home",
  address:
    "Av. Insurgentes Sur 3000, Ciudad Universitaria, 04510 Ciudad de México, CDMX",
};
const MapComponent = ({ changeState }) => {
  const t = useTranslations("locationSidebar");
  const [inputValue, setInputValue] = useState("quantam it innovation");
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
      {/* Map */}
      <div className="overflow-y-auto mt-3 rounded-t-3xl pb-5">
        <div className="mt-2 mb-4 border-2 rounded-3xl overflow-hidden max-w-full  w-[450px] h-[450px] ">
          <div
            id="my-map-canvas"
            style={{ height: "100%", width: "100%", maxWidth: "100%" }}
          >
            <iframe
              style={{ height: "100%", width: "100%", border: 0 }}
              src={`https://www.google.com/maps/embed/v1/search?q=${inputValue}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
              allowFullScreen
            ></iframe>
          </div>
          {/* <a
          className="code-for-google-map"
          href="https://www.bootstrapskins.com/themes"
          id="enable-maps-data"
        >
          premium bootstrap themes
        </a> */}
          <style>{`
        #my-map-canvas img.text-marker {
          max-width: none !important;
          background: none !important;
        }
        img {
          max-width: none;
        }
      `}</style>
        </div>

        <AddressCard
          showHeader={true}
          address={selectedAddress}
          mapAddress={true}
          onClick={() => changeState(status.change_location)}
        />

        <DarkButton
          className="w-full text-base mt-3"
          onClick={() => changeState(status.complete_address)}
        >
          {t("confirm_location")}
        </DarkButton>
      </div>
    </>
  );
};

export default MapComponent;
