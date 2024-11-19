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
            placeholder="Search"
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
      <CustomDialog
        className="w-[320px] !bg-white"
        open={openDialog}
        handleOpen={handleOpen}
        title={t("title")}
        crossStyle="top-0 right-0 !bg-[var(--light-gray)] !text-black p-0"
      >
        <p className="text-[0.67rem] text-[var(--main-gray)] text-center  ">
          {t("subHeading")}
        </p>
        <Calendar
          selectedDate={date}
          setSelectedDate={(date) => setDate(date)}
          expanded={true}
        />
        <div className="flex justify-end gap-1">
          <LightButton
            onClick={handleOpen}
            className="border-2 p-1 w-20 text-xs rounded-2xl !bg-white hover:!bg-[var(--light-gray)] "
          >
            Cancel
          </LightButton>
          <DarkButton
            onClick={handleCalenderSearch}
            className="p-1 w-20 text-xs rounded-2xl"
          >
            Continue
          </DarkButton>
        </div>
      </CustomDialog>
      <ManualSearch
        open={openManualSearch}
        handleOpen={handleManualSearchOpen}
      />
    </>
  );
};

export default CustomHeader;
