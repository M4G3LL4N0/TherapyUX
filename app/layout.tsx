import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TherapyUX | Private Mental OS",
  description: "Psychological recovery tools designed for real progress. Secure, private, and built for healing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <div className="flex-1 flex flex-col">
          <div className="flex-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
