import Header from "@/components/landingPage/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-backgroundColor`}>
        <Header />
        {children}
      </body>
    </html>
  );
}