const { useState } = require("react");
const { TransparentButton } = require("./CustomButtons");
const { default: ListModal } = require("./ListModel");

const MenuButton = ({ label, Icon, list, isCheckBox = false, t }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <div className="relative">
      <TransparentButton
        className="text-[0.8rem] flex items-center  w-max  !py-4 !border-0  rounded-full gap-0"
        onClick={handleMenuOpen}
      >
        <div> {label}</div>
        <Icon className="ml-1" size={16} />
      </TransparentButton>
      {menuOpen && (
        <ListModal
          handleOpen={handleMenuOpen}
          list={list}
          label={label}
          isCheckBox={isCheckBox}
          t={t}
        />
      )}
    </div>
  );
};

export default MenuButton;
