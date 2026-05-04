

import type { Metadata } from "next";
import CursorFollower from "./components/common/cursor";
import { Instrument_Serif, Poltawski_Nowy, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import OnekoCat from "./components/common/OnekoCat";
import { ThemeProvider } from "@/app/components/common/theme-provider" // We will create this


const instrument_serif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const poltawaski_noway = Poltawski_Nowy({
  variable: "--font-poltawaski_noway",
  subsets: ["latin"],
});

const imb_plex_mono = IBM_Plex_Mono({
  variable: "--font-imb_plex_mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600",]
});

export const metadata: Metadata = {
  title: "Nikhil Dhanda",
  description: "This is the portfolio website of Nikhil Dhanda. It has multiple sections including Projects, Experience, and a very minimal landing page",
  icons: "/logo.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${imb_plex_mono.variable} ${poltawaski_noway.variable} ${instrument_serif.variable} font-primary antialiased bg-light dark:bg-dark text-stone-900 dark:text-stone-300 min-h-screen px-4 md:px-8 pb-4 md:pb-8 pt-0`}
      >
        <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
                  disableTransitionOnChange
                >
        <div className="max-w-6xl mx-auto min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] relative">
          <CursorFollower />
          {children}
          <OnekoCat />
          <Analytics />

        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
