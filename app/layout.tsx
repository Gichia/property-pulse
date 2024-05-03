import type { Metadata } from "next";
// import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";

import "@/assets/css/globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PropertyPulse | Find The Perfect Rental",
  description: "Find your dream property",
  keywords: ["rentals", "find rentals", "rentals near me"],
};

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
