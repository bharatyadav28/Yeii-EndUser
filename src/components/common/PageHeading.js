import { useTranslations } from "next-intl";
import CustomHeader from "../home/CustomHeader";

// Page heading
const PageHeading = ({ pageName, showHeader, className }) => {
  const t = useTranslations();
  return (
    <div
      className={
        " flex justify-between items-center bg-[var(--light-gray)] p-5 pt-7 " +
        className
      }
    >
      <h1 className="text-2xl font-medium p-2">
        <span className="text-[#00131F] mr-1 font-bold">{pageName}</span>
        {pageName !== "My Cart" && (
          <span className="text-[var(--medium-gray)]">{t("dashboard")}</span>
        )}
      </h1>
      {showHeader && <CustomHeader />}
    </div>
  );
};

export default PageHeading;
