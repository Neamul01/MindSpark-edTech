import SiteNavbar from "@/components/Navbars/SiteNavbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SiteFooter from "@/components/Footers/SiteFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <SiteNavbar />
        </header>
        <main>{children}</main>
        <footer>
          <SiteFooter />
        </footer>
      </body>
    </html>
  );
}
