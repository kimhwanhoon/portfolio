import { Button, TextInput, Textarea } from "@mantine/core";
import React from "react";

export const Contact = () => {
  return (
    <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Have a project in mind or just want to say hello? Fill out the form
            below and I'll get back to you as soon as possible.
          </p>
        </div>
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
      </div>
    </section>
  );
};
