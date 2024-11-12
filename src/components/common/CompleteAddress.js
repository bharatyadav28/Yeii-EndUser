import { useTranslations } from "next-intl";

const CompleteAddress = () => {
  const t = useTranslations("locationSidebar");
  return (
    <>
      <h1 className="text-lg font-bold text-center mt-2">
        {t("enter_complete_address")}
      </h1>
    </>
  );
};

export default CompleteAddress;
