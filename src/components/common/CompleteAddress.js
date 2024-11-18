import { useTranslations } from "next-intl";
import AddressCard from "./AddressCard";
import { status } from "@/lib/constants";
import { BriefcaseBusiness, Home, MapPin } from "lucide-react";
import { HostelIcon, locationIconBlack } from "@/lib/svg_icons";
import { useState } from "react";
import { TextInput } from "./customInput";
import { DarkButton } from "./CustomButtons";

const selectedAddress = {
  type: "Home",
  address:
    "Av. Insurgentes Sur 3000, Ciudad Universitaria, 04510 Ciudad de México, CDMX",
};
const CompleteAddress = ({ changeState }) => {
  const t = useTranslations("locationSidebar");
  const [address, setAddress] = useState({
    address1: "home",
    address2: "",
    address3: "",
  });
  const handleChange = (value) => {
    setAddress({ ...address, address1: value });
  };
  const list = [
    {
      label: t("home"),
      icon: <Home size={14} />,
      value: "home",
    },
    {
      label: t("work"),
      icon: <BriefcaseBusiness size={14} />,
      value: "work",
    },
    {
      label: t("hostel"),
      icon: <HostelIcon />,
      value: "hostel",
    },
    {
      label: t("other"),
      icon: <MapPin size={14} />,
      value: "other",
    },
  ];
  return (
    <>
      <h1 className="text-lg font-bold text-center mt-2 mb-6">
        {t("enter_complete_address")}
      </h1>

      <div className="text-sm font-medium">{t("delivering_your_order")}</div>
      <AddressCard
        onClick={() => changeState(status.change_location)}
        address={selectedAddress}
        isCompleteScreen={true}
      />

      <form className="flex flex-col gap-4 p-4 bg-white rounded-2xl">
        <div className="text-sm font-medium ">{t("address_details")}</div>
        <div className="flex gap-2">
          {list.map((item) => (
            <label
              key={item.value}
              className={`flex-grow flex items-center justify-center  px-4 py-2 border rounded-lg cursor-pointer transition ${
                address.address1 === item.value
                  ? "border-[var(--main-pink)] bg-pink-50 text-[var(--main-pink)]"
                  : "border-gray-300 bg-white "
              }`}
            >
              <input
                type="radio"
                name="address"
                value={item.value}
                checked={address.address1 === item.value}
                onChange={() => handleChange(item.value)}
                className="hidden"
              />
              <span className="mr-2">{item.icon}</span>
              <span className="text-[0.65rem] font-medium">{item.label}</span>
            </label>
          ))}
        </div>
        <TextInput
          divClass="!border-2 p-4 !m-0"
          containerClass="!p-0 "
          className="!p-0 !m-0 !text-sm"
          placeholder={t("flat_house_floor_building")}
          label={t("flat_house_floor_building")}
          value={address.address2}
          onChange={(e) => setAddress({ ...address, address2: e.target.value })}
        />
        <TextInput
          divClass="!border-2 p-4 !mb-0"
          containerClass="!p-0 "
          className="!p-0 !m-0 !text-sm"
          placeholder={t("nearby_landmark")}
          label={t("nearby_landmark")}
          value={address.address3}
          onChange={(e) => setAddress({ ...address, address3: e.target.value })}
        />
      </form>

      <DarkButton className="mt-8 text-base w-full">
        {t("confirm_address")}
      </DarkButton>
    </>
  );
};

export default CompleteAddress;
