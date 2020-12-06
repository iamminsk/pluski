import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: process.env.MAILING_USER,
    pass: process.env.MAILING_PASS,
  },
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email } = req.body;

  const confirmationTemplate = handlebars.compile(
    fs.readFileSync("./public/mailTemplates/confirmation.hbs", "utf-8")
  );
  const reservationInfoTemplate = handlebars.compile(
    fs.readFileSync("./public/mailTemplates/reservationInfo.hbs", "utf-8")
  );

  console.log(req.headers);

  try {
    const reservationInfo = await transporter.sendMail({
      to: "minskiam@gmail.com",
      from: `"${name}" <${email}>`,
      replyTo: email,
      subject: `Zapytanie o dostępność domu`,
      html: reservationInfoTemplate(req.body),
    });
    const confirmationInfo = await transporter.sendMail({
      to: email,
      from: `"Domek letniskowy Pluski" <domek@letniskowy.com.pl>`,
      subject: "Dom letniskowy Pluski - potwierdzenie otrzymania zapytania",
      html: confirmationTemplate(req.body),
    });

    if (!confirmationInfo.error && !reservationInfo.error) {
      res.status(200).send("");
      return;
    }
  } catch (error) {
    res.status(500).send(error);
    return;
  }
};
