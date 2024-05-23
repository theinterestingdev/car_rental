"use server";

import connect from "@/lib/database";
import { sendEmail } from "@/lib/sendEmail";
import Order from "@/models/Order";

export const orderedMail = async (id) => {
  try {
    await connect();
    const getOrder = await Order.findById(id);
    await sendEmail({
      order: getOrder,
      email: getOrder.email,
      subject: "Welcome to Rental Hub",
      message: `Hi there, your booking is successfull`,
    });

    await sendEmail({
      order: getOrder,
      email: "kartiks04800@gmail.com",
      subject: "Welcome to Rental Hub",
      message: `Hi there, your booking is successfull`,
    });
    return getOrder;
  } catch (error) {}
};
