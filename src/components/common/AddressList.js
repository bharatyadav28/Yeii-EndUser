import addressData from "@/lib/dummyData/addressData.json";
import { useTranslations } from "next-intl";
import AddressCard from "./AddressCard";

const AddressList = () => {
  const t = useTranslations("locationSidebar");
  const { selectedAddress, savedAddresses, recentLocations } = addressData;

  return (
    <div className="overflow-y-auto rounded-2xl pb-4">
      {selectedAddress && (
        <>
          <h1 className="text-base font-bold my-2 ">{t("selected_address")}</h1>
          <AddressCard isSelected={true} address={selectedAddress} />
        </>
      )}
      {savedAddresses && (
        <>
          <h1 className="text-base font-bold my-2 ">{t("saved_address")}</h1>
          {savedAddresses.map((address) => (
            <AddressCard key={address.id} address={address} />
          ))}
        </>
      )}
      {recentLocations && (
        <>
          <h1 className="text-base font-bold my-2 ">{t("recent_locations")}</h1>
          {recentLocations.map((address) => (
            <AddressCard key={address.id} isRecent={true} address={address} />
          ))}
        </>
      )}
    </div>
  );
};

export default AddressList;
