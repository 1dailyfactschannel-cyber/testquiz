import React from "react"
import type { Metadata, Viewport } from "next";
import { Space_Mono, Inter } from "next/font/google";
import { DottedSurface } from "@/components/ui/dotted-surface";

import "./globals.css";

const _inter = Inter({ subsets: ["latin", "cyrillic"] });
const _spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Кто ты из самых мерзких существ?",
  description:
    "Психологический тест: пройди 10 вопросов и узнай, какое отвратительное создание природы скрывается внутри тебя.",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <DottedSurface />
        <main>{children}</main>
      </body>
    </html>
  );
}
