import React, { useState } from "react";
import Image from "next/image";
import { NotepadText, ChevronRight, Check } from "lucide-react";

import CustomDialog from "../common/CustomDialog";
import {
  CustomButton,
  DarkButton,
  LightButton,
  TransparentButton,
} from "../common/CustomButtons";
import { CustomCheckBox } from "../common/customInput";
import { useTranslations } from "next-intl";
import { copyIcon, addressIcon, calendarIcon } from "@/lib/svg_icons";

function OrderDetails({ openDialog, handleOpenDialog, order }) {
  const [orderStatus, setOrderStatus] = useState(false);
  const t = useTranslations("orderDetails");

  const handeOrderStatus = () => {
    setOrderStatus((prev) => !prev);
  };

  const orderStatusOptions = [
    {
      id: 1,
      label: t("order_placed"),
    },
    {
      id: 2,
      label: t("order_accepted"),
    },
    {
      id: 3,
      label: t("order_dispatched"),
    },
    {
      id: 4,
      label: t("order_shipped"),
    },
    {
      id: 5,
      label: t("out_for_delivery"),
    },
    {
      id: 6,
      label: t("delivered"),
    },
  ];
  return (
    <>
      <CustomDialog
        open={openDialog}
        handleOpen={handleOpenDialog}
        title={t("order_details")}
        className="w-[48rem] h-max max-h-[calc(100%-12rem)] !overflow-x-hidden"
      >
        {order && (
          <>
            <div className="flex gap-4 mt-6 text-sm">
              <div className="flex gap-1">
                <div className="text-[#303F49] font-semibold">
                  {t("order_id")}
                </div>
                <div className="text-[#4D5A62CC]">- 123456</div>
              </div>
              <div className="flex gap-1">
                <div className="text-[#303F49] font-semibold">
                  {t("placed_on")}
                </div>
                <div className="text-[#4D5A62CC]  ">- 9.00 am, 14 Aug 2024</div>
              </div>
            </div>
            <div className="grid grid-cols-[54%,44%] gap-4 mt-4">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-4 rounded-xl h-[20rem] overflow-auto bg-[var(--light)] p-2">
                    {order?.items?.map((item) => (
                      <div className="flex gap-4" key={item.id}>
                        <div className="w-[8rem] h-[6rem] overflow-hidden relative rounded-lg">
                          <Image
                            src={order.item?.images[0] || "/diningTable.jpeg"}
                            alt={item.name}
                            sizes="100"
                            layout="fill"
                            className="rounded-lg object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-1 mt-3 ">
                          <div className="text-[1rem] text-[#13070B] font-medium">
                            {item.name}
                          </div>
                          <div className="text-[#4E4548]">
                            {t("qyt")} : {item.quantity}
                          </div>
                          <div className="text-[var(--lightblue)] font-medium mt-1">
                            ${item.actualPrice}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex  rounded-xl h-max  bg-[var(--light)] p-5">
                  <div className="w-full ">
                    <div className="relative mx-auto w-[90%] h-max  ">
                      <div className="border-[1px] border-dashed mt-2 w-full"></div>
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 p-1 bg-[var(--main-yellow)] rounded-full ">
                        <Check size={15} color="white" />
                      </div>
                      <div className="absolute left-1/2  top-1/2 transform -translate-y-1/2 -translate-x-1/2 p-1  rounded-full bg-[var(--main-yellow)] ">
                        <Check size={15} color="white" />
                      </div>
                      <div className="absolute right-0  top-1/2 transform -translate-y-1/2 p-1 bg-[var(--main-yellow)] rounded-full ">
                        <Check size={15} color="white" />
                      </div>
                    </div>
                    <div className="flex justify-between text-[10px] mt-5">
                      <div>{t("order_accepted")}</div>
                      <div className="mr-5">{t("out_for_delivery")}</div>
                      <div className="mr-2">{t("delivered")}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" flex flex-col gap-4">
                <div className=" flex flex-col gap-2">
                  <div className="flex rounded-xl h-max  bg-[var(--light)] pt-4 pb-4 px-4 gap-2">
                    <div className="bg-[#F5F6F7] p-2 rounded-full h-min">
                      {addressIcon}
                    </div>

                    <div className="flex flex-col">
                      <div className="text-[#13070B] font-semibold">Home</div>
                      <div className="text-[#8C8688] text-[0.75rem]">
                        4517 Washington Ave. Manchester, Kentucky 39495
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="font-medium text-[1.1rem] ">
                    {t("client_location")}
                  </div>
                  <div className="flex flex-col rounded-xl h-max  bg-[var(--light)] pt-4 pb-4 px-4 gap-1">
                    <div className="text-[#303F49] text-[0.88rem]">
                      {t("location")}
                    </div>
                    <div className="text-[var(--main-gray)] text-[0.8rem] gap-2 max-w-[10rem]">
                      {order.customerDetails.address}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="font-medium text-[1.1rem] ">
                    {t("customer_details")}
                  </div>
                  <div className="flex flex-col rounded-xl h-max  bg-[var(--light)] pt-4 pb-4 px-4">
                    <div className="flex gap-2">
                      <div className="rounded-full w-[64px] h-[64px] overflow-hidden">
                        <Image
                          alt={order.customerDetails.name}
                          src={order.customerDetails.profileImage}
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className=" flex flex-col gap-[0.1rem] ">
                        <div className="text-[#00131F] font-semibold">
                          {order.customerDetails.name}
                        </div>
                        <div className="text-[#6E7980] text-xs flex items-center gap-1">
                          {order.customerDetails.email}
                          <button>{copyIcon}</button>
                        </div>
                        <div className="text-[#6E7980] text-xs flex items-center gap-1">
                          {1234567890}
                          <button>{copyIcon}</button>
                        </div>
                      </div>
                    </div>

                    <div className="border-[1px] border-dashed my-3" />
                    <div className=" mt-1 flex flex-col gap-1">
                      <div className="text-[#4D5A62] text-xs">
                        {order.deliveryAddress}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </CustomDialog>

      <CustomDialog
        open={orderStatus}
        handleOpen={handeOrderStatus}
        title={t("order_status")}
        className="w-[25rem] h-max !bg-[#fff]  "
        anableCross={true}
      >
        <div className="flex flex-col  ">
          <div className=" mt-2 text-[0.8rem] text-[#6E7980] self-center">
            {t("order_status_heading")}
          </div>

          <div className="flex flex-col mt-6">
            {orderStatusOptions.map((option, index) => (
              <div
                key={option.id}
                className=" py-[0.8rem] border-b border-[#E6E9EB]"
              >
                <div className="flex items-center gap-2">
                  <CustomCheckBox className="border border-[#E6E9EB]" />
                  <div className="text-[var(--main-gray)]">{option.label}</div>
                </div>
                {/* {index === orderStatusOptions.length - 1 && (
                  <hr className="border border-[#E6E9EB]  mt-2" />
                )} */}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 mt-8">
            <TransparentButton className=" text-[#5F5F5F] font-semibold">
              {t("rewind_status")}
            </TransparentButton>
            <DarkButton
              className="font-semibold w-full"
              onClick={handeOrderStatus}
            >
              {t("confirm")}
            </DarkButton>
          </div>
        </div>
      </CustomDialog>
    </>
  );
}

export default OrderDetails;
