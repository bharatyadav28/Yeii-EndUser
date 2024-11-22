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
import { useTranslations } from "next-intl";
import { addressIcon, calendarIcon } from "@/lib/svg_icons";

function OrderDetails({ openDialog, handleOpenDialog, order }) {
  const t = useTranslations("orderDetails");

  return (
    <>
      <CustomDialog
        open={openDialog}
        handleOpen={handleOpenDialog}
        title={t("order_details")}
        className="w-[48rem] h-max max-h-[calc(100%-12rem)] !overflow-x-hidden"
        crossStyle="hidden"
        showBackward={true}
      >
        {order && (
          <div className="flex flex-col ">
            <div className="flex gap-4 mt-6 text-sm">
              <div className="flex gap-1">
                <div className="text-[#303F49] font-semibold">
                  {t("order_id")}
                </div>
                <div className="text-[#4D5A62CC]">- {order.orderId}</div>
              </div>
              <div className="flex gap-1">
                <div className="text-[#303F49] font-semiold">
                  {t("placed_on")}
                </div>
                <div className="text-[#4D5A62CC]  ">
                  - {order.placeTime}, {order.placedOn}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-[54%,44%] gap-4 mt-4 h-full ">
              {/* Left Content */}
              <div className="flex flex-col gap-5 h-full ">
                <div className="flex flex-col  gap-2">
                  <div className="flex flex-col gap-4 rounded-xl  overflow-auto bg-[var(--light)] p-2 h-[24.4rem]">
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
                            ${item.price}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex  rounded-xl h-[5rem]  bg-[var(--light)] p-5">
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

              {/* Right Content */}
              <div className=" flex flex-col gap-4">
                <div className=" flex flex-col gap-2">
                  <div className="flex flex-col gap-2 bg-[var(--light)] p-2 rounded-xl py-3">
                    <div className="flex rounded-xl h-max px-1 gap-3">
                      <div className="bg-[#F5F6F7]  rounded-full p-3 h-[3rem] flex justify-center items-center">
                        {addressIcon}
                      </div>

                      <div className="flex flex-col">
                        <div className="text-[#13070B] font-medium">Home</div>
                        <div className="text-[#8C8688] text-[0.75rem]">
                          {order.address}
                        </div>
                      </div>
                    </div>

                    <div className="border-[1px] border-dashed my-1" />
                    <div className="flex rounded-xl h-max  px-1 gap-3">
                      <div className="bg-[#F5F6F7]  rounded-full p-3 h-[3rem] flex justify-center items-center">
                        {calendarIcon}
                      </div>

                      <div className="flex flex-col">
                        <div className="text-[#4E453F] text-[0.75rem] ">
                          Dates for rent
                        </div>
                        <div className=" font-medium">{order.dateForRent}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col  rounded-xl  bg-[var(--light)] p-4 py-5">
                  <div className="font-medium text-[1.1rem]">
                    Payment Summary
                  </div>

                  <div className="flex flex-col  my-3">
                    <div className="flex justify-between text-[#4E4548]">
                      <div className=" text-xs">{t("discount")}</div>
                      <div className="font-medium text-base">
                        %{order.discount}
                      </div>
                    </div>
                    <div className="flex justify-between text-[#4E4548]">
                      <div className=" text-xs">{t("total_items")}</div>
                      <div className="font-medium text-base">
                        {order.items.length}
                      </div>
                    </div>

                    <div className="flex justify-between text-[#4E4548]">
                      <div className=" text-xs">{t("total_cost")}</div>
                      <div className="font-medium text-base">
                        $400
                        <span className="line-through ml-2 text-[#7D7779]">
                          {order.totalAmount}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="border-[1px] border-dashed mb-2 " />
                    <div className="flex justify-between text-[#4E4548] text-sm py-1">
                      <div className="font-semibold">{t("payment_status")}</div>
                      <div className="text-[var(--main-green)] flex  gap-1 items-center">
                        <Check size={18} />
                        {t("paid")}
                      </div>
                    </div>
                    <div className="border-[1px] border-dashed mt-2" />
                  </div>

                  <button className="flex gap-2 justify-center items-center text-[var(--main-pink)] text-base mt-4">
                    <NotepadText size={20} />
                    <div>{t("generate_invoice")}</div>
                    <div className="ml-4">
                      <ChevronRight size={20} color="#B0B0B0" />
                    </div>
                  </button>
                </div>

                <TransparentButton
                  className="w-full bg-[var(--light-gray)] hover:bg-[var(--light-gray)] hover:opacity-80"
                  onClick={handleOpenDialog}
                >
                  Cancel Order
                </TransparentButton>
              </div>
            </div>
          </div>
        )}
      </CustomDialog>
    </>
  );
}

export default OrderDetails;
