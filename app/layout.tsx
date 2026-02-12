import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Genos } from "next/font/google";
import "./globals.css";

import Header from "./Header";
import Footer from "./Footer";
import { PostHogProvider } from "./providers";

const genosSans = Genos({
  variable: "--font-genos",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kyle Thornburgh | Full-Stack Software Engineer",
  description: "I'm Kyle, a full-stack engineer who loves crafting clean code and intuitive designs for modern applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <head>
        <Analytics />
        <script
          id="theme-script"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                const initialTheme = savedTheme || 'dark';
                
                if (initialTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                }
              })()
            `
          }}
        />
      </head>
      <body className={`relative grid gap-8 place-items-center min-h-screen pt-20 overflow-x-hidden ${genosSans.variable} antialiased transition-colors`}>

        <PostHogProvider>
          <Header />
          {children}
          <Footer />
        </PostHogProvider>

      </body>
    </html>
  );
}
