import sendMail from "@/lib/mail/sendMail";
import { NextResponse, type NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();

  const email = formData.get("email") as string;
  const name = formData.get("name") as string;
  const message = formData.get("message") as string;

  const form = { email, name, message };

  try {
    const { error, data } = await sendMail(form);
    if (error) {
      return NextResponse.json({ error, data });
    } else {
      return NextResponse.json({ error: null, data });
    }
  } catch (error) {
    return NextResponse.json({ error: error });
  }
};
