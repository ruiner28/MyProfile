import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransacion from "@/components/ui/PageTransaction";
import StairTransaction from "@/components/ui/StairTransaction";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Gaurav's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="ipad_icon.jpg" sizes="any" type="image/x-icon" /> 
      </head>
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairTransaction />
        <PageTransacion>{children}</PageTransacion>
      </body>
    </html>
  );
}
