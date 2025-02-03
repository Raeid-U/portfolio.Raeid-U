import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono, Lateef } from "next/font/google";

export const metadata: Metadata = {
  title: "Portfolio - Raeid-U",
  description: "Welcome to Raeid's Official Website.",
};

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
});

const lateef = Lateef({
  subsets: ["arabic", "latin"],
  weight: ["400"],
  variable: "--font-lateef",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetBrainsMono.variable} ${lateef.variable}`}>
      <body className="bg-foreground min-h-screen w-full">{children}</body>
    </html>
  );
}
