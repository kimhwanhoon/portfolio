import * as React from "react";
import { Heading, Html, Text } from "@react-email/components";

interface ContactMeMailProps {
  email: string;
  name: string;
  message: string;
}

export function ContactMeMail({ email, name, message }: ContactMeMailProps) {
  return (
    <Html lang="en">
      <Heading as="h1">Mail received from your portfolio!</Heading>
      <Heading as="h2">
        From: {name} &quot;{email}&quot;
      </Heading>
      <Text>{message}</Text>
    </Html>
  );
}
