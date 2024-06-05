import "server-only";

import nodemailer from "nodemailer";

const nodeMailerApi = nodemailer.createTransport({
  host: "mail.spacemail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_ADDRESS as string,
    pass: process.env.MAIL_PASSWORD as string,
  },
  // use below when encountering an error.
  // logger: true,
  // debug: true,
});

export default nodeMailerApi;
