import "server-only";

import nodeMailerApi from "./nodeMailerApi";
import { render } from "@react-email/render";
import { ContactMeMail } from "./ContactMeMail";

interface MailType {
  email: string;
  name: string;
  message: string;
}

const sendMail = async ({ email, name, message }: MailType) => {
  const sender = process.env.MAIL_ADDRESS as string;
  const recipient = process.env.MAIL_ADDRESS as string;
  const title = "New Message - hwanhoon.kim";

  const emailHtml = render(ContactMeMail({ email, name, message }));

  const mailOption = {
    from: `'김환훈⭐️' <${sender}>`,
    to: recipient,
    subject: title,
    html: emailHtml,
  };

  const info = await nodeMailerApi.sendMail(mailOption);

  return { data: { info, sender, processEnv: process.env.MAIL_ADDRESS } };

  if (info.accepted.length > 0) {
    return { error: null, data: info };
  } else {
    return { error: true, data: info };
  }
};

export default sendMail;
