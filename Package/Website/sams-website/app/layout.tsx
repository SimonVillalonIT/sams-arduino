import './globals.css'
import { Inter } from 'next/font/google'
import { headersData } from '@/data/Header.data'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-backgroundColor`}>
      <header className='flex items-center justify-around px-4 py-6 '>
        <div>Logo</div>
        <div>
        {headersData.links.map((e, i)=><a key={i} href={e.link} title={e.title}>{e.text}</a>)}
        </div>
        <div>
            <a href="">{headersData.dashboard.register}</a>
          <button className='p-2 bg-secondary rounded-full text-white'>{headersData.dashboard.dashboard}</button></div>
      </header> 
        {children}</body>
    </html>
  )
}
