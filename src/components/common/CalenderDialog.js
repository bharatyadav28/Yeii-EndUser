import { useTranslations } from "next-intl";
import CustomDialog from "./CustomDialog";
import Calendar from "./Calender";
import { DarkButton, LightButton } from "./CustomButtons";

const CalenderDialog = ({
  openDialog,
  handleOpen,
  date,
  setSelectedDate,
  handleContinue,
}) => {
  const t = useTranslations("calender");
  return (
    <CustomDialog
      className="w-[350px] !bg-white"
      open={openDialog}
      handleOpen={handleOpen}
      title={t("title")}
      crossStyle="top-0 right-0 !bg-[var(--light-gray)] !text-black p-0"
    >
      <p className="mt-2 mb-2 text-[0.67rem] text-[var(--main-gray)] text-center  ">
        {t("subHeading")}
      </p>
      <Calendar
        selectedDate={date}
        setSelectedDate={setSelectedDate}
        expanded={true}
      />
      <div className="flex justify-end gap-1">
        <LightButton
          onClick={handleOpen}
          className="border-2  w-20 text-xs rounded-xl !bg-white hover:!bg-[var(--light-gray) !py-[0.5rem] h-max border-[#F6F6F6] "
        >
          {t("cancel")}
        </LightButton>
        <DarkButton
          onClick={handleContinue}
          className="p-1 w-20 text-xs rounded-xl !py-[0.5rem] h-max"
        >
          {t("continue")}
        </DarkButton>
      </div>
    </CustomDialog>
  );
};

export default CalenderDialog;
