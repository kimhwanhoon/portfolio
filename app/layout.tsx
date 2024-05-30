import type { Metadata } from "next";
import { ColorSchemeScript } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import { Arimo } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/nprogress/styles.css";
import "@mantine/tiptap/styles.css";
import "@mantine/charts/styles.css";

const arimo = Arimo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-arimo",
});
import { ThemeProvider } from "@/theme/ThemeProvider";
import { Header } from "@/components/header/Header";

export const metadata: Metadata = {
  title: "kimhwanhoon - portfolio website",
  description:
    "Welcome to portfolio website of me, Hwanhoon Kim. I'm a frontend developer who mainly uses next.js with typescript, tailwindcss, supabase etc. I use Mantine and Ant design UI libraries. This website is made of Mantine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={arimo.className}>
        <ThemeProvider>
          <Notifications />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
