<<<<<<< HEAD
"use client";
=======
"use client"
>>>>>>> ad5736d93822d1589808b85cd8bb93f77cc28cba
import "styles/globals.css";
import { ThemeProvider } from "next-themes";

export const metadata = {
  title: "Sams",
  description: "Sams - Sitio Web Oficial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body>
<<<<<<< HEAD
        <ThemeProvider defaultTheme="emerald" themes={["emerald", "night"]}>
          {children}
        </ThemeProvider>
=======
        <ThemeProvider defaultTheme="emerald" themes={["emerald", "night"]}>{children}</ThemeProvider>
>>>>>>> ad5736d93822d1589808b85cd8bb93f77cc28cba
      </body>
    </html>
  );
}
