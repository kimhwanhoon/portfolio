"use client";

import { SectionType1 } from "@/components/sections/SectionType1";
import { Button, Divider, TextInput, Textarea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { DownloadCV } from "./DownloadCV";
import {
  notificationContactError,
  notificationContactSuccess,
} from "@/lib/notification/contact";
import { ContactModal } from "./ContactModal";

export const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [textEditorMessage, setTextEditorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [textareaDisabled, setTextareaDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (textEditorMessage.length > 7) {
      setTextareaDisabled(true);
      setMessage(
        "You're writing a complex message on text editor. Please write it on text editor by pressing icon next to message label",
      );
    } else {
      setTextareaDisabled(false);
      setMessage("");
    }
  }, [textEditorMessage]);

  const sendMail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append(
      "message",
      textEditorMessage.length > 7 ? textEditorMessage : message,
    );

    try {
      const { error } = await fetch("/contact/send-mail", {
        method: "post",
        body: formData,
      }).then((res) => res.json());
      if (error) {
        notifications.show(notificationContactError);
      } else {
        notifications.show(notificationContactSuccess);
        setEmail("");
        setName("");
        setMessage("");
        setTextEditorMessage("");
        setIsSuccess(true);
        close();
      }
    } catch (error) {
      notifications.show(notificationContactError);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <ContactModal
        email={email}
        isLoading={isLoading}
        isSuccess={isSuccess}
        message={message}
        name={name}
        opened={opened}
        sendMail={sendMail}
        setEmail={setEmail}
        setName={setName}
        setTextEditorMessage={setTextEditorMessage}
        close={close}
      />
      <SectionType1
        key={"contact"}
        name="contact"
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
          <div className="relative space-y-2">
            <Image
              className="hover-effect absolute right-0 top-0 cursor-pointer"
              src="contact/window-maximize.svg"
              alt="contact-modal-open"
              width={20}
              height={20}
              onClick={open}
            />
            <Textarea
              classNames={{ input: "!min-h-[150px]" }}
              autosize
              disabled={textareaDisabled}
              label="message"
              placeholder="Content"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <Button
            loading={isLoading}
            className="w-full"
            type="submit"
            style={{ width: "100%" }}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </form>
        <Divider className="my-4" />
        <DownloadCV />
      </SectionType1>
    </>
  );
};
