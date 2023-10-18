import "styles/globals.css";
import type { Metadata } from "next";
import ThemeProviderClient from "@/components/theme-provider";
import Favicon from "@/public/favicon.ico";

export const metadata: Metadata = {
  title: "Sams",
  description: "Sams Arduino Oficial Website",
  authors: [{ name: "Enzo Delgado" }, { name: "Simon Villalon" }],
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body>
        <ThemeProviderClient>{children}</ThemeProviderClient>
      </body>
    </html>
  );
}
