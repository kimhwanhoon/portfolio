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

  try {
    const mailOption = {
      from: `'김환훈⭐️' <${sender}>`,
      to: recipient,
      subject: title,
      html: emailHtml,
    };

    const info = await nodeMailerApi.sendMail(mailOption);

    if (info.accepted.length > 0) {
      return { error: null, data: info };
    } else {
      return { error: true, data: info };
    }
  } catch (error) {
    return { error: error, data: { sender, test: 1 } };
  }
};

export default sendMail;
