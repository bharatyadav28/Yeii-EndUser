import { recentIcon } from "@/lib/svg_icons";

const RecentLocations = ({ recentLocations, t }) => {
  return (
    recentLocations && (
      <>
        <h1 className="text-base font-bold my-2 ">{t("recent_locations")}</h1>
        <div className="bg-white rounded-3xl overflow-y-auto ">
          {recentLocations.map((address) => (
            <div
              key={address.id}
              className="flex items-center gap-2 p-4 border-b-[1px] cursor-pointer"
            >
              <div className="self-start p-2">{recentIcon}</div>
              <div>
                <div className="text-sm font-bold flex items-center gap-1">
                  {address.type}
                </div>
                <div className="text-[0.67rem] text-[var(--main-gray)] max-w-[80%] py-1">
                  {address.address}
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  );
};

export default RecentLocations;
