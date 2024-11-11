"use client";

import { locationIcon } from "@/lib/svg_icons";
import { CalendarIcon, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import LocationSidebar from "../common/LocationSidebar";
import { SearchInput } from "../common/customInput";
import CustomDialog from "../common/CustomDialog";
import { Calendar } from "../ui/calendar";
import { useTranslations } from "next-intl";

const CustomHeader = () => {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [date, setDate] = useState(new Date());
  const t = useTranslations("calender");

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleOpen = () => {
    setOpenDialog((prev) => !prev);
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
          {/* <div className="flex bg-white rounded-2xl p-3 px-4 text-[var(--main-gray)] w-[28vw]">
            <Search />
            <input
              className="pl-2 outline-none placeholder:text-sm placeholder:text-[var(--main-gray)]"
              placeholder="Search"
            />
          </div> */}
          <SearchInput className="w-[28vw]" placeholder="Search" />
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
        className="w-[320px]"
        open={openDialog}
        handleOpen={handleOpen}
        title={t("title")}
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md "
          classNames={{}}
        />
      </CustomDialog>
    </>
  );
};

export default CustomHeader;
