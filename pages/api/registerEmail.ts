import { NextApiRequest, NextApiResponse } from "next";

const nodemailer = require("nodemailer");
const PASSWORD = process.env.password;

export default async function (req: NextApiRequest, res: NextApiResponse) {
  require("dotenv").config();

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "lodungsao@gmail.com",
      pass: PASSWORD
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
    subject: `Register email message`,
    text: req.body.email,
    html: `<p>Email:
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

  res.status(200).end();
}
