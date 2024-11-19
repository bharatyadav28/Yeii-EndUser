import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import LocationComponent from "./LocationComponent";
import { status } from "@/lib/constants";
import MapComponent from "./MapComponent";
import ChangeLocation from "./ChangeLocation";
import CompleteAddress from "./CompleteAddress";
import CustomSidebar from "./CustomSidebar";

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
    <CustomSidebar
      open={open}
      onOpenChange={onOpenChange}
      handleClick={handleClick}
      className="left-0  animate-slide"
    >
      {getComponent()}
    </CustomSidebar>
  );
};

export default LocationSidebar;
