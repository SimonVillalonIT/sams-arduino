import "styles/globals.css";

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
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
