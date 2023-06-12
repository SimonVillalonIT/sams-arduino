import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col overflow-x-clip bg-primary">
        {children}
      </body>
    </html>
  )
}
