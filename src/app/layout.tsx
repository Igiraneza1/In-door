import type { Metadata } from "next";
// import { Inter, Poppins } from "next/font/google";

import "./globals.css";
import Navbar from "./navbar/page";
// import Footer from "./footer/page";

// Load Google Fonts
// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
//   weight: ["400", "600", "700"],
// });

// const poppins = Poppins({
//   subsets: ["latin"],
//   variable: "--font-poppins",
//   weight: ["400", "600", "700"],
// });

// Metadata for <head>
export const metadata: Metadata = {
  title: "Headset Store",
  description: "Listen to the amazing music sound.",
};

// Root layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html >
      <body className="font-sans antialiased bg-white text-black">
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
