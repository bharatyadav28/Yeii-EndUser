import notificationData from "@/lib/dummyData/notificationData.json";
import { useTranslations } from "next-intl";
import NoItems from "../common/NoItem";
import NotificationList from "./NotificationList";
import { noNotificationIcon } from "@/lib/svg_icons";
import MainContent from "../common/MainContent";

const NotifictionMain = () => {
  const { notifications } = notificationData;
  const t = useTranslations("notificationPage");

  return (
    <MainContent className="m-6 !w-[96%]">
      {notifications.length === 0 ? (
        <NoItems
          icon={noNotificationIcon}
          heading={t("no_noti_heading")}
          subHeading={t("no_noti_subHeading")}
        />
      ) : (
        <NotificationList notifications={notifications} />
      )}
    </MainContent>
  );
};

export default NotifictionMain;
