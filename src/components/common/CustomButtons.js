"use client";

import { ChevronLeft as BackIcon, Plus, X } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { CounterInput } from "./customInput";

export const CustomButton = ({
  children,
  className,
  onClick,
  isSubmit,
  ...props
}) => {
  let classes = " w-[10rem] rounded-xl py-6  hover:opacity-90 transition-all";
  if (className) {
    classes = classes + " " + className;
  }

  return (
    <Button
      {...props}
      className={classes}
      onClick={onClick}
      type={isSubmit ? "submit" : "button"}
    >
      {children}
    </Button>
  );
};

export const DarkButton = ({
  children,
  className,
  onClick,
  isSubmit,
  ...props
}) => {
  let classes = "dark-btn";
  if (className) {
    classes = classes + " " + className;
  }

  return (
    <CustomButton
      {...props}
      className={classes}
      onClick={onClick}
      isSubmit={isSubmit}
    >
      {children}
    </CustomButton>
  );
};

export const LightButton = ({
  children,
  className,
  onClick,
  isSubmit,
  ...props
}) => {
  let classes = "light-btn hover:!bg-[var(--light-gray)] ";
  if (className) {
    classes = classes + " " + className;
  }

  return (
    <CustomButton
      {...props}
      className={classes}
      onClick={onClick}
      isSubmit={isSubmit}
    >
      {children}
    </CustomButton>
  );
};

export const TransparentButton = ({
  children,
  className,
  onClick,
  isSubmit,
  ...props
}) => {
  let classes =
    "bg-[#fff] hover:bg-[#fff] hover:opacity-90 border border-[#ddd] text-black";
  if (className) {
    classes = classes + " " + className;
  }

  return (
    <CustomButton
      {...props}
      className={classes}
      onClick={onClick}
      isSubmit={isSubmit}
    >
      {children}
    </CustomButton>
  );
};

export const BackwardButton = (props) => {
  const { onClick, className } = props;
  let classes = "m-0 p-3  bg-[var(--light)] text-black rounded-full";
  if (className) {
    classes += " " + className;
  }
  return (
    <button {...props} onClick={onClick} className={classes}>
      <BackIcon size={15} color="black" background="white" />
    </button>
  );
};

export const CrossButton = (props) => {
  const { onClick, className } = props;

  let classes = "rounded-full w-8 h-8 p-0 ";
  if (className) {
    classes += " " + className;
  }
  return (
    <LightButton {...props} onClick={onClick} className={classes}>
      <X size={20} />
    </LightButton>
  );
};

export const AddButton = ({ children, ...props }) => {
  const { onClick, className } = props;

  const [cnt, setCnt] = useState(0);

  const changeCount = (e) => {
    e.stopPropagation();
    setCnt(1);
  };

  let classes = " !justify-between !p-0 self-stretch";

  return cnt > 0 ? (
    <CounterInput
      className={classes}
      value={cnt}
      onChange={(data) => setCnt(data)}
    />
  ) : (
    <LightButton
      onClick={changeCount}
      className={
        "!text-[var(--main-pink)] hover:!bg-pink-100 py-1 font-bold " +
        className
      }
    >
      <Plus /> {children}
    </LightButton>
  );
};
