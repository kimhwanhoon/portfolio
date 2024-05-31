import sendMail from "@/lib/mail/sendMail";
import { NextResponse, type NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();

  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const message = formData.get("message") as string;

  const form = { email, name, message };

  try {
    await sendMail(form);
    return NextResponse.json({ error: null });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
};
