"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  cartIcon,
  homeIcon,
  notifiIcon,
  ordersIcon,
  profIcon,
  sidebarIcon,
} from "@/lib/svg_icons";
import { useTranslations } from "next-intl";

// Single sidebar link
const SidebarLink = ({ title, href, Icon }) => {
  const pathname = usePathname();

  const getPathname = (path) => {
    return path.includes("offers") || path.includes("search")
      ? "/"
      : "/" + path.split("/")[1];
  };
  const isActive = getPathname(pathname) === href;

  let classes =
    "flex px-6 py-3 rounded-2xl items-center text-[var(--light)] font-medium  gap-3 ";

  if (isActive) {
    classes += "bg-[var(--main-pink)]";
  }

  return (
    <Link href={href}>
      <div className={classes}>
        <Icon isSelected={isActive} />
        <div>{title}</div>
      </div>
    </Link>
  );
};

// Sidebar component
const Sidebar = ({ className }) => {
  const t = useTranslations("sidebar");
  const menuLinks = [
    {
      title: t("home"),
      href: "/",
      icon: homeIcon,
    },
    {
      title: t("orders"),
      href: "/orders",
      icon: ordersIcon,
    },
    {
      title: t("cart"),
      href: "/cart",
      icon: cartIcon,
    },
    {
      title: t("notification"),
      href: "/notification",
      icon: notifiIcon,
    },
    {
      title: t("profile"),
      href: "/profile",
      icon: profIcon,
    },
  ];

  return (
    <div
      className={`bg-[url('/sidebar.png')] bg-cover bg-center fixed left-0 z-10 inset-y-0 max-h-screen flex flex-col py-[2rem] ${className} `}
    >
      <div className="flex justify-center px-4 ">{sidebarIcon}</div>

      <div className="mt-[3rem] mx-7 flex flex-col gap-4">
        {menuLinks?.map((item, index) => (
          <SidebarLink
            key={index}
            title={item.title}
            href={item.href}
            Icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
