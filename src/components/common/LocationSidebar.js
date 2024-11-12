import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import LocationComponent from "./LocationComponent";
import { status } from "@/lib/constants";
import MapComponent from "./MapComponent";
import ChangeLocation from "./ChangeLocation";
import CompleteAddress from "./CompleteAddress";

const LocationSidebar = ({ open, onOpenChange }) => {
  const [sideBarState, setSideBarState] = useState(status.location);

  const handleClick = () => {
    switch (sideBarState) {
      case status.change_location:
        setSideBarState(status.map);
        break;
      case status.complete_address:
        setSideBarState(status.map);
        break;
      case status.map:
        setSideBarState(status.location);
        break;
      default:
        onOpenChange();
        break;
    }
  };

  const changeState = (value) => {
    setSideBarState(value);
  };
  const getComponent = () => {
    switch (sideBarState) {
      case status.location:
        return <LocationComponent changeState={changeState} />;
      case status.map:
        return <MapComponent changeState={changeState} />;
      case status.change_location:
        return <ChangeLocation changeState={changeState} />;
      case status.complete_address:
        return <CompleteAddress changeState={changeState} />;
      default:
        break;
    }
  };

  return (
    open && (
      <>
        <div
          onClick={onOpenChange}
          className="w-screen h-screen bg-black/50 fixed top-0 left-0 right-0 bottom-0 z-[900]"
        />
        <div className="bg-[var(--light-gray)] fixed top-0 left-0 bottom-0 w-[500px] z-[1000] animate-slide p-6 pb-0 flex flex-col">
          <button
            onClick={handleClick}
            className="p-3 bg-white rounded-full absolute"
          >
            <ChevronLeft size={18} />
          </button>
          {getComponent()}
        </div>
      </>
    )
  );
};

export default LocationSidebar;
