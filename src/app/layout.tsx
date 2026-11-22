import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import { ThemeProvider } from "@/app/components/common/theme-provider"

const instrument_serif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const amiamie = localFont({
  variable: "--font-amiamie",
  src: [
    { path: "./fonts/Amiamie-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/Amiamie-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Amiamie-Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/Amiamie-Black.ttf", weight: "900", style: "normal" },
  ],
});

const jetbrains_mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instrument_serif.variable} ${amiamie.variable} ${jetbrains_mono.variable} font-sans antialiased min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
