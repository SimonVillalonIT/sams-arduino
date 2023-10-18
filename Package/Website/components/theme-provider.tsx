"use client";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

export default function ThemeProviderClient({ children }: PropsWithChildren) {
  return (
    <ThemeProvider defaultTheme="emerald" themes={["emerald", "night"]}>
      {children}
    </ThemeProvider>
  );
}
