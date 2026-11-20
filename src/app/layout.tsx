
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI CallFlow | AI Calling Automation",
  description:
    "Build multilingual AI calling agents for your business. Automate calls, manage leads and understand every conversation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
