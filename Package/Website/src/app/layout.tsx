import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-primary flex flex-col min-h-screen">{children}</body>
    </html>
  )
}
