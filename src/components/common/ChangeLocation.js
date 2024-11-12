import { useTranslations } from "next-intl";

const ChangeLocation = () => {
  const t = useTranslations("locationSidebar");
  return (
    <>
      <h1 className="text-lg font-bold text-center mt-2">
        {t("change_location")}
      </h1>
    </>
  );
};

export default ChangeLocation;
