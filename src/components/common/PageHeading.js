import { useTranslations } from "next-intl";

// Page heading
const PageHeading = ({ pageName, leftContent }) => {
  const t = useTranslations();
  return (
    <div className=" flex justify-between items-center bg-[var(--light-gray)] p-6 pt-8">
      <h1 className="text-2xl font-medium ">
        <span className="text-[#00131F] mr-1 font-bold">{pageName}</span>
        <span className="text-[var(--medium-gray)]">{t("dashboard")}</span>
      </h1>
      {/* {avalability && <AvalabilitySwitch />} */}
    </div>
  );
};

export default PageHeading;
