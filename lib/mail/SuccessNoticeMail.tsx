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
      <Text>Your message has been sent to my personal email address.</Text>
      <Text>I&apos;m going to contact you as soon as I check my mailbox.</Text>
      <Text>Until then, have a nice day and talk to you soon!</Text>
      <Text></Text>
      <Text>Best Regards,</Text>
      <Text>Hwanhoon Kim</Text>
      <Text>contact@hwanhoon.kim | me@hwanhoon.kim</Text>
      <Text></Text>

      <Heading as="h2">Your original message to me:</Heading>
      <Text>From: {email}</Text>
      <Text>{message}</Text>
    </Html>
  );
}
