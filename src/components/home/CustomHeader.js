"use client";

import { locationIcon, profileBg } from "@/lib/svg_icons";
import { CalendarIcon, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import LocationSidebar from "../common/LocationSidebar";
import { SearchInput } from "../common/customInput";
import CustomDialog from "../common/CustomDialog";
import { useTranslations } from "next-intl";
import Calendar from "../common/Calender";
import { DarkButton, LightButton } from "../common/CustomButtons";
import ManualSearch from "../common/ManualSearch";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import CalenderDialog from "../common/CalenderDialog";

const CustomHeader = () => {
  const t = useTranslations("calender");

  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openManualSearch, setOpenManualSearch] = useState(false);
  const [date, setDate] = useState(new Date());
  const router = useRouter();

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleOpen = () => {
    setOpenDialog((prev) => !prev);
  };

  const handleManualSearchOpen = () => {
    setOpenManualSearch((prev) => !prev);
  };

  const handleCalenderSearch = () => {
    console.log(date);
    router.push(`/?date=${format(date, "dd/MM/yyyy")}`);
    handleOpen();
  };

  return (
    <>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="p-4 bg-white rounded-full">{locationIcon}</div>
          <div>
            <div className="text-sm font-semibold">Home</div>
            <button
              onClick={handleClick}
              className="text-xs text-[var(--main-gray)] flex items-center cursor-pointer"
            >
              123 Chennai, India <ChevronDown size={13} />
            </button>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <SearchInput
            onClick={handleManualSearchOpen}
            className="w-[28vw]"
            placeholder={t("search")}
          />
          <button
            onClick={handleOpen}
            className="bg-white p-4 rounded-2xl cursor-pointer"
          >
            <CalendarIcon size={19} />
          </button>
        </div>
      </div>
      <LocationSidebar open={open} onOpenChange={handleClick} />
      <CalenderDialog
        openDialog={openDialog}
        handleOpen={handleOpen}
        date={date}
        setSelectedDate={(date) => setDate(date)}
        handleContinue={handleCalenderSearch}
      />

      <ManualSearch
        open={openManualSearch}
        handleOpen={handleManualSearchOpen}
      />
    </>
  );
};

export default CustomHeader;
