import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Developer Toolkit",
  description: "Find all the tools you need in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-neutral-800  text-neutral-100 font-sans font-semibold ${inter.className}`}>
      <Header/>  

        {children}
      <Footer/>

      </body>
    </html>
  );
}
