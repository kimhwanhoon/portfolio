import "server-only";

const nodemailer = require("nodemailer");

const nodeMailerApi = nodemailer.createTransport({
  host: "mail.spacemail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_ADDRESS ?? "contact@hwanhoon.kim",
    pass: process.env.MAIL_PASSWORD ?? "David-Spacemail1!",
  },
  logger: true,
  debug: true,
});

export default nodeMailerApi;
