import "server-only";

import nodeMailerApi from "./nodeMailerApi";
import { render } from "@react-email/render";
import { ContactMeMail } from "./ContactMeMail";
import { SuccessNoticeMail } from "./SuccessNoticeMail";

interface MailType {
  email: string;
  name: string;
  message: string;
}

const sendMail = async ({ email, name, message }: MailType) => {
  const sender = process.env.MAIL_ADDRESS as string;
  const recipient = process.env.MAIL_ADDRESS as string;
  const title = "New Message - hwanhoon.kim";

  const renderedContactMail = render(ContactMeMail({ email, name, message }));
  const renderedSuccessNoticeMail = render(
    SuccessNoticeMail({ email, name, message }),
  );

  const mailOption_to_hwanhoonKim = {
    from: `'hwanhoon.kim' <${sender}>`,
    to: recipient,
    subject: title,
    html: renderedContactMail,
  };

  const mailOption_to_Writer = {
    from: `'Hwanhoon Kim' <${sender}>`,
    to: email,
    subject: title,
    html: renderedSuccessNoticeMail,
  };

  try {
    const info = await nodeMailerApi.sendMail(mailOption_to_hwanhoonKim);

    if (info.accepted.length > 0) {
      const info = await nodeMailerApi.sendMail(mailOption_to_Writer);
      return { error: null, data: info };
    } else {
      return { error: true, data: info };
    }
  } catch (error) {
    return { error };
  }
};

export default sendMail;
