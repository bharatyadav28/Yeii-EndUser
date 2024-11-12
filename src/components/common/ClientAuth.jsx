"use client";
import React from "react";
import { BackwardButton } from "@/components/common/CustomButtons";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

function ClientAuth({ route, heading, showHeader, children }) {
  const router = useRouter();
  const pathname = usePathname();
  const showLogo = !pathname.includes("profile");
  return (
    <>
      {showHeader && (
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <BackwardButton onClick={() => router.push(route)} />
            {heading && (
              <h1 className="text-2xl font-bold text-center text-white ">
                {heading}
              </h1>
            )}
          </div>
          {showLogo && (
            <Image alt="logo" src="/logo2.png" width={60} height={60} />
          )}
        </div>
      )}
      <div className="relative flex flex-col justify-center items-center h-full gap-5 overflow-y-auto">
        {children}
      </div>
    </>
  );
}

export default ClientAuth;
