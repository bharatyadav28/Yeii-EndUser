import React from "react";
import CustomDialog from "./CustomDialog";
import { useDispatch, useSelector } from "react-redux";
import {
  addRequestSuccess,
  cancelAddRequest,
} from "@/lib/store/feature/cart/slice";
import { DarkButton, LightButton } from "./CustomButtons";
import { cartNoticeIcon } from "@/lib/svg_icons";
import { useTranslations } from "next-intl";

const CartNotice = () => {
  const t = useTranslations("cartNotice");
  const canAdd = useSelector((state) => state.cart.canAdd);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addRequestSuccess());
  };
  const handleCancel = () => {
    dispatch(cancelAddRequest());
  };
  return (
    <CustomDialog
      className="w-80 !bg-white"
      crossStyle="-top-2 -right-4 !p-0 !text-black !bg-[var(--light-gray)] "
      open={!canAdd}
      handleOpen={handleCancel}
    >
      <div className="flex flex-col items-center gap-5">
        {cartNoticeIcon}
        <div className="text-lg font-bold">{t("heading")}</div>
        <div className="text-sm text-[var(--main-gray)] text-center">
          {t("content")}
        </div>
        <div className="flex gap-4">
          <LightButton onClick={handleCancel} className="w-32">
            {t("cancel")}
          </LightButton>
          <DarkButton onClick={handleClick} className="w-32">
            {t("confirm")}
          </DarkButton>
        </div>
      </div>
    </CustomDialog>
  );
};

export default CartNotice;
