"use server";

import { cookies } from "next/headers";

export const setCart = async (cart) => {
  cookies().set("cart", JSON.stringify(cart));
};

export const getCart = () => {
  console.log(cookies().get("cart").value);
  return JSON.parse(cookies().get("cart").value);
};
