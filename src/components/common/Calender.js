import React, { useRef, useState } from "react";
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
  getMonth,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

const Calendar = ({ expanded, selectedDate, setSelectedDate, className }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
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
    const scrollRef = useRef(null);

    const [startDate, setStartDate] = useState(
      addDays(
        selectedDate,
        -(selectedDate.getDate() === new Date().getDate() &&
        selectedDate.getMonth() === new Date().getMonth()
          ? 0
          : 5)
      )
    );
    const [daysArray, setDaysArray] = useState(
      Array.from({ length: 20 }, (_, index) => addDays(startDate, index))
    );

    // console.log(startDate.getDate(), new Date().getDate());

    const scrollLeft = () => {
      if (scrollRef.current) {
        // Scroll the container to the left
        scrollRef.current.scrollBy({ left: -100, behavior: "smooth" });

        // Check if the user has reached the start of the current dates displayed
        if (scrollRef.current.scrollLeft <= 50) {
          // Update start date to 20 days before the current first date in daysArray
          const newStartDate = subDays(daysArray[0], 20);

          // Add the previous 20 dates to the beginning of the array
          const newDaysArray = Array.from({ length: 20 }, (_, index) =>
            addDays(newStartDate, index)
          );

          // Extend the daysArray with the new dates at the start
          setDaysArray((prevDays) => [...newDaysArray, ...prevDays]);

          // Update the start date to the new starting point
          setStartDate(newStartDate);
        }
      }
    };
    // Function to scroll and load the next set of dates
    const scrollRight = () => {
      if (scrollRef.current) {
        // Scroll the container
        scrollRef.current.scrollBy({ left: 100, behavior: "smooth" });

        // Check if we've reached the end of the current dates displayed
        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth - 50 // Buffer to trigger loading new dates slightly before end
        ) {
          // Update start date to the next day after the last date in daysArray
          const newStartDate = addDays(daysArray[daysArray.length - 1], 1);

          // Add the next 20 dates
          const newDaysArray = Array.from({ length: 20 }, (_, index) =>
            addDays(newStartDate, index)
          );

          // Extend the daysArray with the new dates
          setDaysArray((prevDays) => [...prevDays, ...newDaysArray]);

          // Update the start date to the new starting point
          setStartDate(newStartDate);
        }
      }
    };

    return (
      <div className="flex items-center">
        {startDate.getDate() !== new Date().getDate() && (
          <button onClick={scrollLeft} className="mr-2">
            <ChevronLeft size={20} className="text-black cursor-pointer" />
          </button>
        )}
        <div
          ref={scrollRef}
          className="flex items-center overflow-x-auto scrollbar-hide"
        >
          {daysArray.map((date, index) => {
            const isStartOfMonth =
              index === 0 || getMonth(date) !== getMonth(daysArray[index - 1]);

            return (
              <React.Fragment key={index}>
                {date.getDate() == 1 && (
                  <div className="bg-pink-200 text-[var(--main-pink)] font-bold text-lg p-4 py-1 rounded-lg -rotate-90">
                    {format(date, "MMM")}
                  </div>
                )}
                <div
                  className={`flex flex-col items-center justify-center w-12 p-2 m-1 cursor-pointer rounded-lg ${
                    isSameDay(date, selectedDate)
                      ? "bg-[var(--main-pink)] text-white"
                      : "text-black"
                  }`}
                  onClick={() => setSelectedDate(date)}
                >
                  <div className="font-bold text-lg">{format(date, "dd")}</div>
                  <div className="text-xs">{t(format(date, "E"))}</div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <button onClick={scrollRight} className="ml-2">
          <ChevronRight size={20} className="text-black cursor-pointer" />
        </button>
      </div>
    );
  };

  return (
    <div className={"flex flex-col gap-2 mb-2 mt-4 " + className}>
      <div className={`w-full mx-auto `}>
        {expanded ? (
          <>
            {renderHeader()}
            <RenderDays />
            <RenderCells />
          </>
        ) : (
          <MiniCalender />
        )}
      </div>
    </div>
  );
};

export default Calendar;
