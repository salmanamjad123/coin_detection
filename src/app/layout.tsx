import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Snap&Trace",
  description: "DXF Files Modifications Using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={` ${raleway.variable} antialiased`} >{children}</body>
    </html>
  );
}
