"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { ChevronDown, ListFilter } from "lucide-react";

import MainContent from "../common/MainContent";
import NoItem from "../common/NoItem";
import { emptyOrdersIcon } from "@/lib/svg_icons";
import { DarkButton } from "../common/CustomButtons";
import ordersData from "@/lib/dummyData/ordersData.json";
import OrderItem from "./OrderItem";
import { useGetLast12Months } from "@/lib/functions";
import { SearchInput } from "../common/customInput";
import MenuButton from "../common/MenuButton";

function OrdersList({ data }) {
  const router = useRouter();
  const t = useTranslations("orderDetails");
  const { orders } = ordersData;
  const { months } = useGetLast12Months();

  const emptyHeading = t("emptyHeading");
  const emptySubHeading = (
    <>
      <p>{t("emptySubHeading")}</p>
      <DarkButton className="mt-4 w-full" onClick={() => router.push("/")}>
        {t("explore_now")}
      </DarkButton>
    </>
  );

  const noOrders = orders.length === 0;
  return (
    <MainContent className="!overflow-hidden flex flex-col !py-0 px-5  !bg-[#fff] !my-5">
      <div className="bg-[var(--light-gray)] h-full px-4 rounded-2xl  py-5">
        {noOrders ? (
          <NoItem
            icon={emptyOrdersIcon}
            heading={emptyHeading}
            subHeading={emptySubHeading}
          />
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex gap-4  items-center pb-2">
              <SearchInput
                className="bg-[var(--light)] rounded-full py-2 border-none w-[20rem]"
                placeholder={"Search"}
                onChange={() => {}}
              />

              <MenuButton
                label={t("filter")}
                Icon={ListFilter}
                isCheckBox={true}
                list={months}
                t={t}
              />
              <MenuButton
                label={t("sortBy")}
                Icon={ChevronDown}
                list={[
                  t("order_accepted"),
                  t("order_shipped"),
                  t("cancelled"),
                  t("out_for_delivery"),
                  t("delivered"),
                ]}
                t={t}
              />
            </div>
            <div className="overflow-y-auto rounded-t-xl flex-grow">
              <div className="flex items-center w-full text-center">
                {/* Left line: Dark on the right, fades to the left */}
                <div className="flex-grow h-px bg-gradient-to-l from-gray-400 to-transparent"></div>

                {/* Text */}
                <span className="px-4 text-[var(--main-pink)] mt-2 mb-3 text-sm">
                  {t("this_week")}{" "}
                  <span className="text-[#212121CC]">({orders.length})</span>
                </span>

                {/* Right line: Dark on the left, fades to the right */}
                <div className="flex-grow h-px bg-gradient-to-r from-gray-400 to-transparent"></div>
              </div>
              <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4  mt-2 ">
                {orders?.map((order) => (
                  <OrderItem key={order._id} order={order} t={t} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </MainContent>
  );
}

export default OrdersList;
