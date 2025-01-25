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
    <html lang="en" className="scroll-smooth">
      <Analytics />
      <body className={`grid gap-8 place-items-center min-h-screen ${genosSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
