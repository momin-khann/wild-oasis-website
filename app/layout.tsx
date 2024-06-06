import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/components/reusable/Header";

const joseFin = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - Wild Oasis",
    default: "Home - Wild Oasis",
  },
  description:
    "Wild Oasis - A Boutique Hotel - Luxurious wooden cabins - Located at heart of Berlin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${joseFin.className} bg-primary-950 text-white min-h-screen flex flex-col `}
      >
        <Header />

        {/*Main Content*/}
        <main className="flex-1 flex flex-col">{children}</main>
      </body>
    </html>
  );
}
