"use client";
import "styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="emerald" themes={["emerald", "night"]}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
