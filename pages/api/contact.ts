import { NextApiRequest, NextApiResponse } from "next";

const nodemailer = require("nodemailer");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "lodungsao@gmail.com",
      pass: process.env.password
    },
    secure: true
  });

  await new Promise((resolve, reject) => {
    transporter.verify(function (error: any, success: any) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailData = {
    from: {
      name: req.body.fullname,
      address: req.body.email
    },
    replyTo: req.body.email,
    to: "lodungsao@gmail.com",
    subject: `Message From ${req.body.fullname}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<p>Title: ${req.body.title}</p><div>Message: ${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err: any, info: unknown) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  res.status(200).json({ status: "OK" });
};
