"use client";
import { Eye, EyeClosed, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { LockIcon } from "@/lib/svg_icons";

export const TextInput = (props) => {
  const {
    customIcon,
    label,
    onChange,
    value,
    className,
    iconClasses,
    divClass,
    containerClass,
  } = props;
  let classes = `w-full border-none outline-none text-lg disabled:cursor-not-allowed ${
    !customIcon && "ml-4 "
  } ${className}`;

  return (
    <div
      className={`flex items-center bg-white rounded-[0.9rem] py-2 mb-2 ${divClass}`}
    >
      {customIcon && (
        <span className={`px-5 ${iconClasses}`}>{customIcon}</span>
      )}
      <div className={`w-full pr-5 ${containerClass}`}>
        {label && (
          <label className="text-[var(--main-gray)] text-[10px]">{label}</label>
        )}
        <input
          onChange={onChange}
          value={value}
          {...props}
          className={classes}
        />
      </div>
    </div>
  );
};

export const TextArea = (props) => {
  const { customIcon, label, className, divClass } = props;

  let classes = `resize-none disabled:cursor-not-allowed ${
    !customIcon && "ml-4"
  } ${className}`;
  return (
    <div
      className={`flex items-center bg-white rounded-[15px] py-2 mb-2 ${divClass}`}
    >
      {customIcon && <span className="px-5 py-4 self-start">{customIcon}</span>}
      <div className="w-full pr-5">
        {label && (
          <label className="text-[var(--main-gray)] text-[10px]">{label}</label>
        )}
        <Textarea {...props} className={classes} />
      </div>
    </div>
  );
};

export const SelectInput = (props) => {
  const { customIcon, label, onChange, value, className, placeholder, menu } =
    props;

  return (
    <div className={`flex items-center bg-white rounded-[15px] mb-2 `}>
      {customIcon && <span className="px-5 py-4 self-start">{customIcon}</span>}
      <div className="w-full pr-2">
        {label && (
          <label className="text-[var(--main-gray)] text-[10px]">{label}</label>
        )}

        <Select
          className="p-0"
          onValueChange={onChange}
          defaultValue={value}
          {...props}
        >
          <SelectTrigger
            className={
              "rounded-[15px] pl-0 !w-full disabled:cursor-not-allowed text-sm " +
              className
            }
          >
            <SelectValue placeholder={placeholder || "Select One"} />
          </SelectTrigger>
          <SelectContent>
            {menu?.map((item) => {
              return (
                <SelectItem key={item} value={item}>
                  {item}{" "}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export const PasswordInput = (props) => {
  const { onChange, value, label, className } = props;
  const [showPassword, setShowPassword] = useState("");
  return (
    <div
      className={`flex items-center bg-white rounded-[15px] py-2 mb-3 ${className}`}
    >
      <span className="px-5">
        <LockIcon color="gray" />
      </span>
      <div className="w-full">
        <label className="text-[var(--main-gray)] text-[10px]">{label}</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="*********"
          onChange={onChange}
          value={value}
          {...props}
          className="w-full border-none outline-none text-sm"
        />
      </div>
      <span className="px-5">
        {!showPassword ? (
          <Eye onClick={() => setShowPassword(!showPassword)} color="gray" />
        ) : (
          <EyeClosed
            onClick={() => setShowPassword(!showPassword)}
            color="gray"
          />
        )}
      </span>
    </div>
  );
};

export const CustomCheckBox = ({ className, onChange, value }) => {
  return (
    <Checkbox
      onCheckedChange={onChange}
      checked={value}
      className={`h-7 w-7 data-[state=checked]:bg-[var(--main-pink)] border-[var(--main-pink)] disabled:cursor-not-allowed ${className}`}
    />
  );
};

export const IconButton = ({ onClick, className, children, ...props }) => {
  let classes =
    " bg-[var(--light)] hover:bg-[var(--light)]  text-black p-0 text-sm  rounded-full my-0 ";
  if (className) {
    classes += " " + className;
  }

  return (
    <Button {...props} className={classes} type="button" onClick={onClick}>
      {children}
    </Button>
  );
};

export const CounterInput = (props) => {
  const { onChange, value, className } = props;
  const [inputValue, setInputValue] = useState(value || 0);

  useEffect(() => {
    onChange(inputValue);
  }, [inputValue]);
  let classes = "!bg-[#E5E5E5] !hover:bg-[#E5E5E5] p-4 ";

  return (
    <div
      className={
        "flex bg-[var(--light)] justify-center items-center px-5  text-[0.8rem] rounded-xl " +
        className
      }
    >
      <IconButton
        className={classes}
        onClick={(e) => {
          e.stopPropagation();
          setInputValue((prev) => Number(prev) - 1);
        }}
        disabled={props.disabled}
      >
        -
      </IconButton>
      <div>{value}</div>
      <IconButton
        className={classes}
        onClick={(e) => {
          e.stopPropagation();
          setInputValue((prev) => Number(prev) + 1);
        }}
        disabled={props.disabled}
      >
        +
      </IconButton>
    </div>
  );
};

export const SearchInput = ({ children, ...props }) => {
  const { className, inputClass, value, onChange, placeholder, searchIcon } =
    props;
  return (
    <div
      className={
        "flex items-center bg-white rounded-2xl p-3 px-4 text-[var(--main-gray)] " +
        className
      }
    >
      {searchIcon !== false && <Search />}
      <input
        {...props}
        className={
          "pl-2 outline-none placeholder:text-sm placeholder:text-[var(--main-gray)] w-full " +
          inputClass
        }
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {children}
    </div>
  );
};
