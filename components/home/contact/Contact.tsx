"use client";

import { SectionType1 } from "@/components/sections/SectionType1";
import { TiptapEditor } from "@/components/textEditor/TiptapEditor";
import { Button, Divider, Modal, TextInput, Textarea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notifications } from "@mantine/notifications";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
      const { error, data } = await fetch("/contact/send-mail", {
        method: "post",
        body: formData,
      }).then((r) => r.json());
      // to be deleted
      if (error) {
        notifications.show({
          title: "Error occurred",
          message:
            "Something went wrong! 🤥 Please try again or contact me directly at contact@hwanhoon.kim",
          color: "red",
          autoClose: 5000,
        });
      } else {
        notifications.show({
          title: "Message sent!",
          message: "Your message has been successfully sent to Hwanhoon Kim.",
          autoClose: 5000,
        });
        setEmail("");
        setName("");
        setMessage("");
        setTextEditorMessage("");
        setIsSuccess(true);
        close();
      }
    } catch (error) {
      notifications.show({
        title: "Error occurred",
        message:
          "Something went wrong! 🤥 Please try again or contact me directly at contact@hwanhoon.kim",
        color: "red",
        autoClose: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Modal
        keepMounted={!isSuccess}
        opened={opened}
        onClose={close}
        title="Contact Me"
        size={"lg"}
        centered
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
          <div>
            <TiptapEditor
              content={message}
              setTextEditorMessage={setTextEditorMessage}
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
      </Modal>
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
        <section className="mx-auto flex max-w-md items-center justify-center gap-8 py-4">
          <div>
            <h3 className="text-2xl font-semibold">For hire?</h3>
            <p className="">Download my CV now</p>
          </div>
          <Button
            prefetch={false}
            variant="outline"
            component={Link}
            href="/cv/Hwanhoon_Kim_CV_FR_COURT.pdf"
          >
            Download Now
          </Button>
        </section>
      </SectionType1>
    </>
  );
};
