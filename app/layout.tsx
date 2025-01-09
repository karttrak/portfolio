import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Genos } from "next/font/google";
import "./globals.css";

const genosSans = Genos({
  variable: "--font-genos",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kyle Thornburgh | Software Engineer",
  description: "I'm Kyle, a full-stack engineer who loves crafting clean code and intuitive designs for modern applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body
        className={`relative grid gap-16 items-center justify-items-center pt-24 min-h-screen overflow-x-hidden ${genosSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
