import "server-only";

const nodemailer = require("nodemailer");

const nodeMailerApi = nodemailer.createTransport({
  host: "mail.spacemail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_ADDRESS as string,
    pass: process.env.MAIL_PASSWORD as string,
  },
  logger: true,
  debug: true,
});

export default nodeMailerApi;
