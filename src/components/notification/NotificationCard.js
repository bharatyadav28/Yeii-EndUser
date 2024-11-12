import { alertIcon, notifyIcon, offersIcon } from "@/lib/svg_icons";
import { Check } from "lucide-react";

const NotificationCard = ({ item }) => {
  const getIcon = (icon) => {
    switch (icon) {
      case "delivered":
        return <Check color="lightGreen" />;

      case "offer":
        return offersIcon;
      default:
        return <Check color="lightGreen" />;
    }
  };
  return (
    <div className="flex justify-between items-center py-2 border-b-2">
      <div className="flex items-center gap-2">
        <div className="w-[60px] h-[60px] flex justify-center items-center bg-white rounded-full">
          {getIcon(item.icon)}
        </div>
        <div>
          <div className="text-base font-semibold">{item.title}</div>
          <div className="text-xs text-[var(--main-gray)] ">{item.message}</div>
        </div>
      </div>
      <div className="text-[10px]">{item.time}</div>
    </div>
  );
};

export default NotificationCard;
