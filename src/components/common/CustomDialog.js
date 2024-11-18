import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { BackwardButton, CrossButton } from "./CustomButtons";

function CustomDialog({
  open,
  handleOpen,
  className,
  title,
  children,
  showBackward,
  titleRightContent,
  crossStyle,
}) {
  let classes =
    "max-w-full w-[10rem] min-h-[10rem] !bg-[var(--light-gray)] !rounded-3xl overflow-y-auto py-4";
  if (className) {
    classes += " " + className;
  }
  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogTitle className="hidden"></DialogTitle>
      <DialogDescription className="hidden"></DialogDescription>
      <DialogContent className={classes}>
        <div className="flex flex-col">
          <div className="relative flex justify-center">
            {showBackward && (
              <div className="absolute left-0 top-0 ">
                <BackwardButton onClick={handleOpen} />
              </div>
            )}
            <CrossButton
              onClick={handleOpen}
              className={
                "absolute p-5 right-5 top-5 z-[1000] !bg-[#665749] !text-white " +
                crossStyle
              }
            />
            {title && (
              <div className=" mt-2 text-lg font-semibold "> {title}</div>
            )}
            {titleRightContent && (
              <div className="absolute right-0 top-2 ">{titleRightContent}</div>
            )}
          </div>
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CustomDialog;
