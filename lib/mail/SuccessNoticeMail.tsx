import * as React from "react";
import { Heading, Html, Text } from "@react-email/components";

interface SuccessNoticeMailProps {
  email: string;
  name: string;
  message: string;
}

export function SuccessNoticeMail({
  email,
  name,
  message,
}: SuccessNoticeMailProps) {
  return (
    <Html lang="en">
      <Heading as="h1">
        You&apos;ve successfully sent a message to Hwanhoon Kim.
      </Heading>
      <Heading as="h2">Thank you {name} for your interest!</Heading>
      <p>Your message has been sent to my personal email address.</p>
      <p>I&apos;m going to contact you as soon as I check my mailbox.</p>
      <p>Until then, have a nice day and talk to you soon!</p>
      <br />
      <p>Best Regards,</p>
      <p>Hwanhoon Kim</p>
      <p>contact@hwanhoon.kim | me@hwanhoon.kim</p>

      <Heading as="h2">Your original message to me:</Heading>
      <Text>From: {email}</Text>
      <div dangerouslySetInnerHTML={{ __html: message }} />
    </Html>
  );
}
