import React, { useState } from "react";
import {
  format,
  addDays,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
  subDays,
} from "date-fns";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import { useTranslations } from "next-intl";

const Calendar = ({ expanded, selectedDate, setSelectedDate }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [expandCalender, setExpandCalender] = useState(expanded);
  const t = useTranslations("calender");

  function isWeekend(date) {
    const newDate = new Date(date);
    const day = newDate.getDay();
    return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
  }

  const renderHeader = () => {
    const dateArr = format(currentMonth, "MMMM yyyy").split(" ");
    return (
      <div className="flex justify-between items-center mb-5">
        {/* <div className="text-lg font-semibold text-black">{t("title")}</div> */}
        <span className="text-sm text-black">
          {t(dateArr[0]) + " " + dateArr[1]}
        </span>
        <div className="flex  gap-2">
          <button
            onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
            className="text-black"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
            className="text-black"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    );
  };

  const RenderDays = () => {
    const days = [];
    const dateFormat = "EEE";

    for (let i = 0; i < 7; i++) {
      days.push(
        <div
          key={i}
          className={`text-center text-xs text-${
            i === 0 || i === 6 ? "[var(--lightblue)]" : "black"
          }`}
        >
          {t(format(addDays(startOfWeek(new Date()), i), dateFormat))}
        </div>
      );
    }

    return <div className="grid grid-cols-7 gap-1 mb-4">{days}</div>;
  };

  const RenderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            key={day}
            className={`text-center text-xs p-2 px-3 my-1 cursor-pointer rounded-2xl ${
              isSameDay(day, selectedDate)
                ? "bg-[var(--main-pink)] text-white"
                : isWeekend(format(day, "yyyy-MM-dd"))
                ? "hover:bg-black/50 duration-300 hover:text-black text-[var(--lightblue)]"
                : "text-black hover:bg-black/50 duration-300"
            }`}
            onClick={() => setSelectedDate(cloneDay)}
          >
            {isSameMonth(day, monthStart) ? formattedDate : ""}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7 " key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  const MiniCalender = () => {
    const daysArray = Array.from({ length: 7 }, (_, index) =>
      addDays(subDays(selectedDate, selectedDate.getDay()), index)
    );
    return (
      <div className="grid grid-cols-7 gap-2 text-center mb-1">
        {daysArray.map((date, index) => (
          <div
            key={index}
            className={`p-2 py-3 rounded-lg cursor-pointer ${
              format(date, "dd") === format(selectedDate, "dd")
                ? "bg-white text-pink-600"
                : "text-black"
            }`}
            onClick={() => setSelectedDate(date)}
          >
            <div className="font-bold text-[17px]">{format(date, "dd")}</div>
            <div
              className={`text-xs ${
                format(date, "dd") === format(selectedDate, "dd") &&
                "text-black"
              }`}
            >
              {t(format(date, "E"))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-2 mb-2 mt-4">
      <div className={`w-full mx-auto `}>
        {renderHeader()}
        {expandCalender ? (
          <>
            <RenderDays />
            <RenderCells />
          </>
        ) : (
          <MiniCalender />
        )}
      </div>
      {!expanded && (
        <button
          onClick={() => setExpandCalender((prev) => !prev)}
          className="self-center bg-black/20 rounded-full p-1"
        >
          {expandCalender ? (
            <ChevronUp color="white" size={14} />
          ) : (
            <ChevronDown color="white" size={14} />
          )}
        </button>
      )}
    </div>
  );
};

export default Calendar;
