import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MusicBox Store",
  description: "Lesson 4 learning project - Custom Theme",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}