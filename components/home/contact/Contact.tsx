"use client";

import { SectionType1 } from "@/components/sections/SectionType1";
import { Button, Divider, TextInput, Textarea } from "@mantine/core";
import Link from "next/link";
import React, { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    const { error } = await fetch("/contact/send-mail", {
      method: "post",
      body: formData,
    }).then((r) => r.json());

    if (error) {
      alert("error");
      console.log(error);
    } else {
      alert("success");
    }
  };
  return (
    <SectionType1
      key={"contact"}
      id="contact"
      title="Contact Me"
      subtitle="Have a project in mind or just want to say hello? Fill out the form
      below and I'll get back to you as soon as possible."
      twClassNameForSectionBackGround="contact-bg"
    >
      <form
        className="mx-auto mt-8 max-w-md space-y-4"
        onSubmit={(e) => sendMail(e)}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <TextInput
              label="name"
              placeholder="John Doe"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <TextInput
              label="email"
              placeholder="john@example.com"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Textarea
            label="message"
            placeholder="Content"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <Button className="w-full" type="submit" style={{ width: "100%" }}>
          Send Message
        </Button>
      </form>
      <Divider className="my-4" />
      <section className="mx-auto flex max-w-md items-center justify-center gap-8 py-4">
        <div>
          <h3 className="text-2xl font-semibold">For hire?</h3>
          <p className="">Download my CV now</p>
        </div>
        <Button
          variant="outline"
          component={Link}
          href="/cv/Hwanhoon_Kim_CV_FR_COURT.pdf"
        >
          Download Now
        </Button>
      </section>
    </SectionType1>
  );
};
