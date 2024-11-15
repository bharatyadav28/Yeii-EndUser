import { useState } from "react";
import Calendar from "../common/Calender";
import MenuButton from "../common/MenuButton";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";
import ShopsList from "./ShopsList";

const list = ["All", "Open", "Closed"];
const SearchResults = ({ date, category, type, query }) => {
  const t = useTranslations("searchPage");
  const [selectedDate, setSelectedDate] = useState(date || new Date());

  // console.log({ date, query, category, type });
  return (
    <div className=" !flex-grow flex flex-col bg-[var(--light-gray)] w-full px-6 pt-3 overflow-hidden">
      {/* calender */}
      {query && (
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={(d) => setSelectedDate(d)}
          className="!m-0 !mb-4"
        />
      )}
      <MenuButton list={list} Icon={ChevronDown} label={t("sort_by")} t={t} />
      <ShopsList query={query} />
    </div>
  );
};

export default SearchResults;
