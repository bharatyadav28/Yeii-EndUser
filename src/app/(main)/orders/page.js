import { profileBg } from "@/lib/svg_icons";

const page = () => {
  return (
    <div className="flex justify-center bg-[var(--light-gray)] rounded-2xl m-5 overflow-hidden">
      <div className="!blur-3xl flex">{profileBg}</div>
    </div>
  );
};

export default page;
