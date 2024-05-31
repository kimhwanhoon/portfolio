import type { Metadata, Viewport } from "next";
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

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const arimo = Arimo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-arimo",
});
import { ThemeProvider } from "@/theme/ThemeProvider";
import { Header } from "@/components/header/Header";

export const metadata: Metadata = {
  title: "kimhwanhoon - portfolio website",
  applicationName: "KIMHWANHOON",
  description:
    "Welcome to portfolio website of me, Hwanhoon Kim. I'm a frontend developer who mainly uses next.js with typescript, tailwindcss, supabase etc. I use Mantine and Ant design UI libraries. This website is made of Mantine.",
  appleWebApp: {
    capable: true,
    title: "kimhwanhoon - portfolio website",
    statusBarStyle: "black-translucent",
    startupImage: ["./apple-icon.png"],
  },
  authors: {
    name: "Hwanhoon Kim",
    url: "https://github.com/kimhwanhoon/portfolio",
  },
  creator: "Hwanhoon Kim",
  publisher: "Hwanhoon Kim, Deployed by Vercel",
  keywords: ["portfolio", "kimhwanhoon"],
  category: "portfolio",
  icons: "./apple-icon.png",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  interactiveWidget: "resizes-content",
  userScalable: false,
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
          <Notifications position="top-center" />
          <Header />
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
