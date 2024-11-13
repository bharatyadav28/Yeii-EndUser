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
    <div className="px-6 pt-3 pb-10 overflow-hidden">
      <MainContent>
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
    </div>
  );
};

export default NotifictionMain;
