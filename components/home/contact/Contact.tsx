import { SectionType1 } from "@/components/sections/SectionType1";
import { Button, TextInput, Textarea } from "@mantine/core";
import React from "react";

export const Contact = () => {
  return (
    <SectionType1
      key={"contact"}
      id="contact"
      title="Contact Me"
      subtitle="Have a project in mind or just want to say hello? Fill out the form
      below and I'll get back to you as soon as possible."
    >
      <form className="mx-auto mt-8 max-w-md space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <TextInput label="name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <TextInput
              label="email"
              placeholder="john@example.com"
              required
              type="email"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Textarea label="message" placeholder="Content" required />
        </div>
        <Button className="w-full" type="submit">
          Send Message
        </Button>
      </form>
    </SectionType1>
  );
};
