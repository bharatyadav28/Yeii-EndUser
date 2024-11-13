"use client";
import DashboardPage from "@/components/common/DashboardPage";
import MainHeader from "@/components/common/MainHeader";
import SearchResults from "@/components/search/SearchResults";
import { searchPageLogo } from "@/lib/svg_icons";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

const SearchPage = () => {
  const t = useTranslations("searchPage");
  const params = useSearchParams();

  const query = params.get("query");
  const category = params.get("category");
  const date = params.get("date");
  const type = params.get("type");

  const heading = (
    <div>
      <p className="text-xs text-white">{t("showing_result_for")}</p>
      <h1 className="text-3xl font-bold text-white">{category}</h1>
    </div>
  );
  // console.log({ query: params.get("query"), category: params.get("category") });
  return (
    <DashboardPage>
      <MainHeader heading={heading} icon={searchPageLogo} />
      <SearchResults
        date={date}
        category={category}
        type={type}
        query={query}
      />
    </DashboardPage>
  );
};

export default SearchPage;
