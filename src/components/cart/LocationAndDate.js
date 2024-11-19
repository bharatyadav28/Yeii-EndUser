import { locationIconBlack } from "@/lib/svg_icons";
import { LightButton } from "../common/CustomButtons";
import { useTranslations } from "next-intl";
import { CalendarIcon, ChevronRight } from "lucide-react";
import { useState } from "react";
import CalenderDialog from "../common/CalenderDialog";
import { getMonth } from "date-fns";
import { getMonthAndDate } from "@/lib/functions";
import LocationSidebar from "../common/LocationSidebar";

const LocationAndDate = () => {
  const t = useTranslations("cartPage");
  const [date, setDate] = useState(new Date());
  const [openDialog, setOpenDialog] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpen = () => setOpenDialog((prev) => !prev);
  const onOpenChange = () => setOpenSidebar((prev) => !prev);

  return (
    <>
      <div className="bg-white rounded-2xl">
        <div className="flex items-center gap-2 border-b-2 p-4">
          <div className="bg-[var(--light-gray)] p-4 rounded-full">
            {locationIconBlack}
          </div>
          <div className="flex-grow">
            <div className="text-base">Home</div>
            <div className="text-xs text-[var(--main-gray)]">
              4517 Washington Ave. Manchester, Kentucky 39495
            </div>
          </div>
          <LightButton
            onClick={onOpenChange}
            className="!bg-white border-2 !p-0 w-24 text-xs !text-[var(--main-pink)]"
          >
            {t("change")}
            <ChevronRight color="lightgray" />
          </LightButton>
        </div>
        <div className="flex items-center gap-2 p-4 ">
          <div className="bg-[var(--light-gray)] p-4 rounded-full">
            <CalendarIcon size={19} />
          </div>
          <div className="flex-grow">
            <div className="text-xs text-gray-700">{t("dates_for_rent")}</div>
            <div>{getMonthAndDate(date)}</div>
          </div>
          <LightButton
            onClick={handleOpen}
            className="!bg-white  border-2 !p-0 w-24 text-xs !text-[var(--main-pink)]"
          >
            {t("edit")}
            <ChevronRight color="lightgray" />
          </LightButton>
        </div>
      </div>
      <CalenderDialog
        openDialog={openDialog}
        handleOpen={handleOpen}
        date={date}
        setSelectedDate={(d) => setDate(d)}
        handleContinue={handleOpen}
      />
      <LocationSidebar open={openSidebar} onOpenChange={onOpenChange} />
    </>
  );
};

export default LocationAndDate;
