import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { TopNavbar } from "@/components/common/TopNavbar";
import CategoriesBar from "@/components/common/CategoriesBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oxygen Surgicals",
  description: "Buy quality medical products",
  keywords: ["medical", "healthcare", "equipment"],
  authors: [{ name: "Your Brand" }],
  openGraph: {
    title: "Oxygen Surgicals",
    description: "Buy quality medical products",
    images: ["/public/logo/oxygensurgicals.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopNavbar />
        <Navbar />
        <CategoriesBar />
        <div className="max-w-7xl mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
