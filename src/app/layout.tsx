import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import FloatingChatButton from "@/components/FloatingChatButton";
import "./globals.css";
import "lenis/dist/lenis.css";

/** Matches school-management `index.html` + `index.css`: Plus Jakarta Sans primary, Inter fallback. */
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CIMDR Sangli | Chintamanrao Institute of Management Development and Research",
  description:
    "Deccan Education Society's CIMDR — MBA, MCA, BBA, BCA. Affiliated to Shivaji University, Kolhapur. NAAC accredited.",
  keywords: ["CIMDR", "MBA Sangli", "MCA Sangli", "BBA", "BCA", "DES Sangli"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="antialiased selection:bg-primary/15 selection:text-primary">
        <SmoothScroll>{children}</SmoothScroll>
        <FloatingChatButton />
      </body>
    </html>
  );
}
