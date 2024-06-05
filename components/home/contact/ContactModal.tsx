"use client";

import { TiptapEditor } from "@/components/textEditor/TiptapEditor";
import { Button, Modal, TextInput } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

interface ContactModalProps {
  isSuccess: boolean;
  opened: boolean;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  message: string;
  setTextEditorMessage: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  sendMail: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  close: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isSuccess,
  opened,
  name,
  setName,
  email,
  setEmail,
  message,
  setTextEditorMessage,
  isLoading,
  sendMail,
  close,
}) => {
  const { width } = useViewportSize();
  return (
    <Modal
      fullScreen={width <= 425}
      keepMounted={!isSuccess}
      opened={opened}
      onClose={close}
      title="Contact Me"
      size={"lg"}
      centered
      classNames={{ content: "pb-4" }}
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
  );
};
