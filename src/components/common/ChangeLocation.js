import { useTranslations } from "next-intl";
import RecentLocations from "./RecentLocations";
import data from "@/lib/dummyData/addressData.json";
import { DarkButton } from "./CustomButtons";
import { status } from "@/lib/constants";

const ChangeLocation = ({ changeState }) => {
  const t = useTranslations("locationSidebar");
  const { recentLocations } = data;
  return (
    <>
      <h1 className="text-lg font-bold text-center mt-2 mb-5">
        {t("change_location")}
      </h1>
      <RecentLocations t={t} recentLocations={recentLocations} />
      <DarkButton
        onClick={() => changeState(status.complete_address)}
        className="w-full mt-8 text-base "
      >
        {t("confirm")}
      </DarkButton>
    </>
  );
};

export default ChangeLocation;
