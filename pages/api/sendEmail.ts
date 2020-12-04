import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: process.env.MAILING_USER,
    pass: process.env.MAILING_PASS,
  },
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { to, from, subject, template, data } = req.body;

  // if (!from || !to || !subject || !template) {
  //   res.status(403).send("");
  //   return;
  // }

  try {
    const info = await transporter.sendMail({
      to,
      from,
      subject,
      html: data,
    });
    res.status(200).send(info);
  } catch (error) {
    res.status(500).send(error);
  }
};
