import { ChevronLeft } from "lucide-react";

const CustomSidebar = ({
  open,
  onOpenChange,
  handleClick,
  children,
  className,
}) => {
  return (
    open && (
      <>
        <div
          onClick={onOpenChange}
          className=" bg-black/50 fixed top-0 left-0 right-0 bottom-0 z-[900]"
        />
        <div
          className={
            "bg-[var(--light-gray)] fixed top-0 right-0 bottom-0 w-[500px] z-[1000] p-6 pb-0 flex flex-col " +
            className
          }
        >
          <button
            onClick={handleClick}
            className="p-3 bg-white rounded-full absolute"
          >
            <ChevronLeft size={18} />
          </button>
          {children}
        </div>
      </>
    )
  );
};

export default CustomSidebar;
