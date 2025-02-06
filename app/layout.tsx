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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Analytics />
        <script
          id="theme-script"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                const initialTheme = savedTheme || systemPreference;
                
                if (initialTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })()
            `
          }}
        />
      </head>
      <body className={`relative grid gap-8 place-items-center min-h-screen overflow-x-hidden ${genosSans.variable} antialiased transition-colors`}>

        <a href="#main" className="absolute left-0 top-0 py-2 px-4 z-50 -translate-y-full focus:translate-y-0 transition" tabIndex={0}>Skip to main content</a>

        {children}
      </body>
    </html>
  );
}
