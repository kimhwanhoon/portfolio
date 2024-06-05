import * as React from "react";
import { Heading, Html } from "@react-email/components";

interface ContactMeMailProps {
  email: string;
  name: string;
  message: string;
}

export function ContactMeMail({ email, name, message }: ContactMeMailProps) {
  return (
    <Html lang="en">
      <Heading as="h1">{"You've got a message from your portfolio."}</Heading>
      <Heading as="h2">{`From: ${name} | ${email}`}</Heading>
      {/* {message} */}
      <div dangerouslySetInnerHTML={{ __html: message }} />
    </Html>
  );
}
