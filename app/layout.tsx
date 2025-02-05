import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/sections/Footer";
import Navbar from "@/sections/Navbar";

export const metadata: Metadata = {
  title: "Portfolio Island",
  description: "A modern Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="bg-slate-300/20">
          <Navbar />
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
