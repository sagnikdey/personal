import type { Metadata } from "next";
import { Quattrocento_Sans } from "next/font/google";
import "./globals.css";

const quattrocentoSans = Quattrocento_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-quattrocento",
});

export const metadata: Metadata = {
  title: "Sagnik Dey — Product Designer & Creative Strategist",
  description:
    "Product Design Lead at 7-Eleven. I lead the design of frictionless, omnichannel ecosystems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={quattrocentoSans.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
