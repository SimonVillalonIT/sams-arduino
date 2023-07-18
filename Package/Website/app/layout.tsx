import "styles/globals.css";
import { Header, Footer } from "components";

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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
