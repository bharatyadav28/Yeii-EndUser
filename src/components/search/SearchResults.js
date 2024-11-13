import { useState } from "react";
import Calendar from "../common/Calender";

const SearchResults = ({ date, category, type, query }) => {
  const [selectedDate, setSelectedDate] = useState(date || new Date());

  // console.log({ date, query, category, type });
  return (
    <div className="bg-[var(--light-gray)] w-full !h-full p-6">
      {/* calender */}
      {!query && (
        <Calendar
          selectedDate={selectedDate}
          setSelectedDate={(d) => setSelectedDate(d)}
          className="mt-0 m-0"
        />
      )}
    </div>
  );
};

export default SearchResults;
