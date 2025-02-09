import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono, Lateef } from "next/font/google";

export const metadata: Metadata = {
  title: "Raeid Usmanali | Full-Stack Developer & Software Engineer",
  description:
    "Explore Raeid's portfolio showcasing full-stack development, software engineering projects, and expertise in Next.js, React, Node.js, Rust, Tauri, and C/C++.",
  keywords:
    "Raeid-U, portfolio, raeid, raeid usmanali, full-stack developer, software engineer, Next.js, React, Node.js, Rust, Tauri, C/C++, web development",
  openGraph: {
    title: "Raeid-U | Full-Stack Developer & Software Engineer",
    description:
      "Discover Raeid's work in web development, software engineering, and full-stack development. Featuring expertise in Next.js, React, Node.js, Rust, Tauri, C/C++ and more.",
    url: "https://raeid-u.ca",
    siteName: "Raeid-U Portfolio",
    images: [
      {
        url: "https://www.raeid.ca/hero_sat.JPG",
        width: 1200,
        height: 630,
        alt: "Raeid-U Portfolio Banner",
      },
      {
        url: "https://www.raeid.ca/about_sat.JPG",
        width: 1200,
        height: 630,
        alt: "Raeid-U About Me Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raeid-U | Full-Stack Developer & Software Engineer",
    description:
      "Explore Raeid's software engineering projects, full-stack development skills, and expertise in modern web technologies.",
    images: ["https://www.raeid.ca/hero_sat.JPG"],
  },
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
