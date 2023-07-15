import "styles/globals.css";
import {Header} from "components"

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
    <html lang="en">
      <body>
          <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
