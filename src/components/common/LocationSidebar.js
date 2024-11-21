import { useState } from "react";
import LocationComponent from "./LocationComponent";
import { status } from "@/lib/constants";
import MapComponent from "./MapComponent";
import ChangeLocation from "./ChangeLocation";
import CompleteAddress from "./CompleteAddress";
import CustomSidebar from "./CustomSidebar";

const LocationSidebar = ({ open, onOpenChange }) => {
  const [sideBarState, setSideBarState] = useState(status.location);

  const slides = {
    [status.location]: LocationComponent,
    [status.map]: MapComponent,
    [status.change_location]: ChangeLocation,
    [status.complete_address]: CompleteAddress,
  };

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

  const Handler = slides[sideBarState];

  return (
    <CustomSidebar
      open={open}
      onOpenChange={onOpenChange}
      handleClick={handleClick}
      className="left-0  animate-slide"
    >
      <Handler changeState={changeState} />
    </CustomSidebar>
  );
};

export default LocationSidebar;
