import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PetWorld",
  description: "Pet Adoption Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} transition-colors duration-300 bg-white dark:bg-black dark:text-white`}
      >
        {/* 🌙 DARK MODE PROVIDER WRAP START */}
        <ThemeProvider>
          {/* NAVBAR */}
          <Navbar />

          {/* PAGE CONTENT */}
          {children}

          {/* FOOTER */}
          <Footer />
        </ThemeProvider>
        {/* 🌙 DARK MODE PROVIDER WRAP END */}
      </body>
    </html>
  );
}