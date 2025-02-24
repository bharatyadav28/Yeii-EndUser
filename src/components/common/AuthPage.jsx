import React from "react";
import ClientAuth from "./ClientAuth";
import { MainLogo } from "@/lib/svg_icons";

const AuthPage = ({
  children,
  route,
  heading,
  showHeader,
  className,
  showLogo,
}) => {
  return (
    <div
      className={`relative w-full flex flex-col !h-screen bg-[url('/profile-main-bg.png')] bg-cover bg-center ${className}`}
    >
      {showLogo && (
        <div className=" flex items-center gap-2 mx-10 py-3 pb-0">
          <MainLogo width={131} height={104} />
          <h1 className="text-[#E6235C] text-[1.7rem] font-bold">
            Brincos Dieras
          </h1>
        </div>
      )}
      <div className=" relative bottom-10 w-full h-full px-6 py-5 pt-0 flex flex-col">
        <ClientAuth route={route} heading={heading} showHeader={showHeader}>
          {children}
        </ClientAuth>
      </div>
    </div>
  );
};

export default AuthPage;
