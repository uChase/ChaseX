import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChaseX - Portfolio",
  description: "Welcome to my portfolio website.",
  icons: {
    // This becomes: <link rel="icon" href="/wall.jpeg" type="image/jpeg" />
    icon: [
      {
        url: "/wall.jpeg",
        type: "image/jpeg",
        sizes: "any", // allows any size
      },
    ],
    // This becomes: <link rel="shortcut icon" href="/wall.jpeg" />
    shortcut: "/wall.jpeg",
    // For iOS / Apple devices:
    apple: "/wall.jpeg",
    // If you wanted to preload your icon for extra speed:
    other: [
      {
        rel: "preload",
        url: "/wall.jpeg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
