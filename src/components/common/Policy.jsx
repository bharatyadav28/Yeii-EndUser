import React from "react";

import { YeiiText } from "@/lib/svg_icons";

function Policy({ title, children }) {
  return (
    <div>
      <div className="flex items-center gap-[0.7rem] text-[1.75rem] font-bold mb-4 ">
        <div className="">{title}</div>
        {/* <div className="app-name">Yeii</div> */}
        <div>{YeiiText}</div>
      </div>
      <div className="text-[#808080]  text-[0.875rem] flex flex-col gap-3 mr-8">
        {children}
      </div>
    </div>
  );
}

export default Policy;
