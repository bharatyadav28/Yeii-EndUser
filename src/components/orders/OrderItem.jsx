import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight, Check } from "lucide-react";

import ItemCard from "./ItemCard";
import { deliveryIcon } from "@/lib/svg_icons";
import OrderDetails from "./OrderDetails";

function OrdersListItem({ order, t }) {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog((prev) => !prev);
  };

  let status = <div></div>;
  const statusClasses =
    "flex justify-center items-center gap-2 text-[0.7rem] p-2 rounded- w-[8rem]";
  switch (order.deliveryStatus) {
    case "Out for delivery":
      status = (
        <div className={statusClasses + " text-[#FFDB10]  bg-[#ffdb100f] "}>
          {deliveryIcon}
          {t(order.deliveryStatus)}
        </div>
      );
      break;
    case "Delivered":
      status = (
        <div className={statusClasses + " text-[#6DDC00]  bg-[#6ddc0014] "}>
          <Check size={15} />
          {t(order.deliveryStatus)}
        </div>
      );
      break;
  }
  return (
    <>
      <div className="flex flex-col">
        <div className="text-[#13070B80] text-[0.625rem] mb-2">
          {t("order_id")} : {order.orderId}
        </div>
        <div
          onClick={handleOpenDialog}
          className="bg-[var(--light)]  flex flex-col gap-3 w-full min-w-[12rem]  p-4 rounded-2xl  cursor-pointer"
        >
          {/* header */}
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-full w-[35px] h-[35px] overflow-hidden">
                <Image
                  alt={order.shopName}
                  src={order.shopImage[0] || "/diningTable.jpeg"}
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <h1 className="font-bold text-sm">{order.shopName}</h1>
                <p className="text-[10px] text-[var(--main-gray)] ">
                  {order.shopAddress?.substring(0, 20)}
                </p>
              </div>
            </div>

            <div>{status}</div>
          </div>

          <div className="border-[1px] border-dashed"></div>
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col gap-2">
              {order?.items?.slice(0, 2).map((item, index) => (
                <ItemCard key={item._id} item={item} index={index} />
              ))}
            </div>

            <div className="text-center">
              <div className="text-xs text-[var(--main-gray)] ">
                {t("total")}
              </div>
              <div className="text-[var(--lightblue)] font-semibold">
                ${order.totalAmount}
              </div>
            </div>
          </div>
          {order.items.length > 2 && (
            <div className="flex text-[10px] items-center text-[var(--main-gray)] mb-1 justify-center">
              {order.items.length - 2} {" " + t("more_product") + " "}
              <ChevronRight size={15} />
            </div>
          )}
          {/* </div> */}
        </div>
      </div>

      <OrderDetails
        openDialog={openDialog}
        handleOpenDialog={handleOpenDialog}
        order={order}
      />
    </>
  );
}

export default OrdersListItem;
