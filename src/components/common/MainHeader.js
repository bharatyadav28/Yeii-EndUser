"use client";
import { useRouter } from "next/navigation";
import { BackwardButton } from "./CustomButtons";

const MainHeader = ({ className, heading, route, icon }) => {
  const router = useRouter();

  return (
    <div
      className={
        "flex justify-between items-center bg-[url('/header-bg.png')] px-5 " +
        className
      }
    >
      <div className="flex items-center gap-4">
        <BackwardButton className="p-4" onClick={() => router.push(route)} />
        {heading}
      </div>
      {icon}
    </div>
  );
};

export default MainHeader;
